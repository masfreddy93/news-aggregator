import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NewsFilters } from 'src/app/shared/components/news-filters/news-filters.component';
import { FAVORITES_NEWS_LIST_LOCAL_STORAGE_KEY } from 'src/app/shared/consts/favorites-news-list-local-storage-key.const';
import { IMediaStackApiRequestParams } from 'src/app/shared/interfaces/i-media-stack-api-request-params.interface';
import { IMediaStackNews } from 'src/app/shared/interfaces/i-media-stack-api-response.interface';

@Component({
  selector: 'app-favorites-index',
  templateUrl: '../../../../modules/news/pages/news-index/news-index.page.html',
  styleUrls: ['../../../../modules/news/pages/news-index/news-index.page.scss'],
})
export class FavoritesIndexPage implements OnInit {
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  title: string = 'Preferiti';

  isLoading: boolean = false;
  hasErrors: boolean = false;

  localStorageFavoriteNewsList: IMediaStackNews[] = [];
  newsList: IMediaStackNews[] = [];

  FAVORITES_NEWS_LIST_LOCAL_STORAGE_KEY: string =
    FAVORITES_NEWS_LIST_LOCAL_STORAGE_KEY;

  paginatorDefaultConfig: {
    length: number;
    pageSizeOptions: number[];
  } = {
    length: 0,
    pageSizeOptions: [10, 25, 50],
  };

  apiDefaultParams: IMediaStackApiRequestParams = {
    limit: 10,
    offset: 0,
    categories: '',
    languages: '',
    date: '',
    keywords: '',
  };

  ngOnInit(): void {
    this._fetchData();
  }

  applyFilters(event: NewsFilters): void {
    this.apiDefaultParams = {
      ...this.apiDefaultParams,
      categories: event.category,
      languages: event.language,
      date: event.startDate + (event.endDate ? ',' + event.endDate : ''),
      keywords: event.searchText,
      offset: 0, //everytime I change filters the call should start from page 0
    };

    //everytime I change filters the call should start from page 0
    if (this.paginator) {
      this.paginator.pageIndex = 0;
    }

    this._fetchData();
  }

  onPageChange(event: PageEvent): void {
    this.apiDefaultParams = {
      ...this.apiDefaultParams,
      limit: event.pageSize,
      // se cambio il pagesize allora la chiamata deve partire dalla pagina con index 0
      offset:
        event.pageSize === this.apiDefaultParams.limit
          ? event.pageIndex * event.pageSize
          : 0,
    };

    this._fetchData();
  }

  private _fetchData(): void {
    this.isLoading = true;

    // simulate a BE call
    setTimeout(() => {
      // get array of favorites news from localStorage
      this.localStorageFavoriteNewsList = JSON.parse(
        localStorage.getItem(this.FAVORITES_NEWS_LIST_LOCAL_STORAGE_KEY) ?? '[]'
      ) as IMediaStackNews[];

      // filters favorite news + handle pagination
      this._filterNewsListAndHandledPagination();

      this.isLoading = false;
    }, 500);
  }

  // filters data with `news-filters` values
  private _filterNewsListAndHandledPagination(): void {
    this.newsList = this.localStorageFavoriteNewsList
      .filter((newsItem) => this._filterByCategory(newsItem))
      .filter((newsItem) => this._filterByLanguage(newsItem))
      .filter((newsItem) => this._filterByKeywords(newsItem))
      .filter((newsItem) => this._filterByDate(newsItem));

    // refresh length of paginator
    const totalFilteredNews: number = this.newsList.length;
    this.paginatorDefaultConfig = {
      ...this.paginatorDefaultConfig,
      length: totalFilteredNews,
    };

    // handled pagination
    this.newsList = this.newsList.slice(
      this.apiDefaultParams.offset,
      this.apiDefaultParams.limit + this.apiDefaultParams.offset
    );
  }

  private _filterByCategory(newsItem: IMediaStackNews): boolean {
    if (!newsItem.category) {
      return false;
    }

    return newsItem.category?.includes(this.apiDefaultParams.categories);
  }

  private _filterByLanguage(newsItem: IMediaStackNews): boolean {
    if (!newsItem.language) {
      return false;
    }

    return newsItem.language?.includes(this.apiDefaultParams.languages);
  }

  private _filterByKeywords(newsItem: IMediaStackNews): boolean {
    if (!newsItem.title || !newsItem.description) {
      return false;
    }

    const keywords = this.apiDefaultParams.keywords.toLowerCase();
    return (
      newsItem.title?.toLowerCase().includes(keywords) ||
      newsItem.description?.toLowerCase().includes(keywords)
    );
  }

  private _filterByDate(newsItem: IMediaStackNews): boolean {
    const dates: string[] = this.apiDefaultParams.date.split(',');
    const startDate: string = dates[0] ?? '';
    const endDate: string = dates[1] ?? '';

    if (!endDate && startDate) {
      return new Date(startDate) <= new Date(newsItem.published_at!);
    } else if (endDate && startDate) {
      return (
        new Date(startDate) <= new Date(newsItem.published_at!) &&
        new Date(new Date(endDate).setHours(23, 59, 59)) >=
          new Date(newsItem.published_at!)
      );
    } else {
      return true;
    }
  }
}
