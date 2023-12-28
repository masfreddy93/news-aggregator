import { Component, Input, OnInit } from '@angular/core';
import { IMediaStackNews } from '../../interfaces/i-media-stack-api-response.interface';
import { FAVORITES_NEWS_LIST_LOCAL_STORAGE_KEY } from '../../consts/favorites-news-list-local-storage-key.const';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  /**
   * The newsItem object.
   */
  @Input() newsItem?: IMediaStackNews;

  /**
   * Indicates whether a news is among the favorites.
   */
  isInFavorites: boolean = false;

  FAVORITES_NEWS_LIST_LOCAL_STORAGE_KEY: string =
    FAVORITES_NEWS_LIST_LOCAL_STORAGE_KEY;

  ngOnInit(): void {
    this.checkFavoriteStateOnInit();
  }

  /**
   * Adds or removes a `newsItem` from favorites, saving the information in localStorage
   * and in the component's property `isInFavorites`.
   */
  toggleFavorite(): void {
    if (!this.newsItem) {
      console.error('Could not retrieve itemNews informations');

      return;
    }

    const favoritesNewsList: IMediaStackNews[] = JSON.parse(
      localStorage.getItem(this.FAVORITES_NEWS_LIST_LOCAL_STORAGE_KEY) ?? '[]'
    );
    const newsItemIndex: number = favoritesNewsList.findIndex(
      (newsItem) => newsItem.url === this.newsItem?.url
    );

    // check if itemNews is already in favorites array
    // and remove it if already present or add it if not present
    if (newsItemIndex !== -1) {
      favoritesNewsList.splice(newsItemIndex, 1);
      this.isInFavorites = false;
    } else {
      favoritesNewsList.push(this.newsItem);
      this.isInFavorites = true;
    }

    // save favorites array in local storage
    localStorage.setItem(
      this.FAVORITES_NEWS_LIST_LOCAL_STORAGE_KEY,
      JSON.stringify(favoritesNewsList)
    );
  }

  /**
   * Check during the component's onInit if a news is among the favorites,
   * setting the component's property `isInFavorites`'s value.
   */
  checkFavoriteStateOnInit(): void {
    if (!this.newsItem || !this.newsItem.url) {
      console.error('Could not retrieve itemNews informations');

      return;
    }

    const favoritesNewsList: IMediaStackNews[] = JSON.parse(
      localStorage.getItem(this.FAVORITES_NEWS_LIST_LOCAL_STORAGE_KEY) ?? '[]'
    );

    this.isInFavorites = favoritesNewsList
      .map((itemNews) => itemNews.url)
      .includes(this.newsItem.url);
  }
}
