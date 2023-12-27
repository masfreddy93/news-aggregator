import { Component, Input } from '@angular/core';
import { IMediaStackNews } from '../../interfaces/i-media-stack-api-response.interface';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input() newsItem?: IMediaStackNews;
}
