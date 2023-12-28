import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsIndexPage } from './pages/news-index/news-index.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [NewsIndexPage],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
    MatPaginatorModule,
    MatExpansionModule,
  ],
})
export class NewsModule {}
