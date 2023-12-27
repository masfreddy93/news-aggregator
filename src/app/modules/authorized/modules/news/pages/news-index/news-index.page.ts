import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { finalize } from 'rxjs';
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
  isLoading: boolean = false;
  hasErrors: boolean = false;

  newsList: IMediaStackNews[] = [];

  paginatorDefaultConfig: { length: number; pageSizeOptions: number[] } = {
    length: 0,
    pageSizeOptions: [10, 25, 50],
  };

  apiDefaultParams: IMediaStackApiRequestParams = {
    limit: 10,
    offset: 0,
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

  private _fetchData(params: IMediaStackApiRequestParams): void {
    this.isLoading = true;

    // FIXME: remove mock after tests
    this._newsDataService
      .getAllMockData(params)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (apiResponse: IMediaStackApiResponse) => {
          this.newsList = apiResponse.data;
          console.log(this.newsList);

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
