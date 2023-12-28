import { Component, Input, OnInit } from '@angular/core';
import { IMediaStackNews } from '../../interfaces/i-media-stack-api-response.interface';

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

  ngOnInit(): void {
    this.checkFavoriteStateOnInit();
  }

  /**
   * Adds or removes a `newsItem` from favorites, saving the information in localStorage
   * and in the component's property `isInFavorites`.
   * The key of the `newsItem` in localStorage is the `newsItem` url and the value is the
   * `newsItem` object converted to a string.
   */
  toggleFavorite(): void {
    if (!this.newsItem || !this.newsItem.url) {
      console.error('Could not retrieve itemNews informations');

      return;
    }

    if (localStorage.getItem(this.newsItem.url)) {
      localStorage.removeItem(this.newsItem.url);
      this.isInFavorites = false;

      return;
    }

    localStorage.setItem(this.newsItem.url, JSON.stringify(this.newsItem));
    this.isInFavorites = true;
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

    this.isInFavorites = localStorage.getItem(this.newsItem.url) ? true : false;
  }
}
