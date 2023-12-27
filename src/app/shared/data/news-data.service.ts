import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMediaStackApiResponse } from '../interfaces/i-media-stack-api-response.interface';
import { Observable, delay, of } from 'rxjs';
import { NEWS_MOCK_DATA } from '../mocks/news-mock.data';

@Injectable({
  providedIn: 'root',
})
export class NewsDataService {
  /**
   * The endpoint of the MediaStack 'Live News' API Request with the free access key.
   *
   * For reference, see [MediaStack Documentation](https://mediastack.com/documentation#:~:text=API%20Features-,Live%20News,-Available%20on%3A%20All).
   */
  private _apiUrl: string =
    'http://api.mediastack.com/v1/news?access_key=1018939fa0c395462841534dbdf1600c';

  constructor(private _http: HttpClient) {}

  getAll(): Observable<IMediaStackApiResponse> {
    return this._http.get<IMediaStackApiResponse>(this._apiUrl);
  }

  getAllMockData(): Observable<IMediaStackApiResponse> {
    return of(NEWS_MOCK_DATA);
  }
}
