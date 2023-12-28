import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { finalize } from 'rxjs';
import { NewsFilters } from 'src/app/shared/components/news-filters/news-filters.component';
import { NewsDataService } from 'src/app/shared/data/news-data.service';
import { IMediaStackApiRequestParams } from 'src/app/shared/interfaces/i-media-stack-api-request-params.interface';
import {
  IMediaStackApiResponse,
  IMediaStackNews,
} from 'src/app/shared/interfaces/i-media-stack-api-response.interface';

@Component({
  selector: 'app-news-index',
  templateUrl: './news-index.page.html',
  styleUrls: ['./news-index.page.scss'],
})
export class NewsIndexPage implements OnInit {
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  title: string = 'Notizie';

  isLoading: boolean = false;
  hasErrors: boolean = false;

  newsList: IMediaStackNews[] = [];

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

  constructor(private _newsDataService: NewsDataService) {}

  ngOnInit(): void {
    this._fetchData(this.apiDefaultParams);
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

    this._fetchData(this.apiDefaultParams);
  }

  /**
   * Get the event (values of filters) from `news-filters` component
   * and fetch data with HTTP GET parameters set by user.
   *
   * The event is emitted onInit of `news-filters` component and
   * everytime user submit the form.
   *
   */
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

    this._fetchData(this.apiDefaultParams);
  }

  private _fetchData(params: IMediaStackApiRequestParams): void {
    this.isLoading = true;

    // FIXME: remove mock after tests
    this._newsDataService
      .getAllMockData(params)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (apiResponse: IMediaStackApiResponse) => {
          this.newsList = apiResponse.data;

          this.paginatorDefaultConfig = {
            ...this.paginatorDefaultConfig,
            length: apiResponse.pagination.total,
          };
        },
        error: () => {
          this.hasErrors = true;
        },
      });
  }
}
