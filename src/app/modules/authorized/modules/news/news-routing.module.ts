import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsIndexPage } from './pages/news-index/news-index.page';

const routes: Routes = [
  {
    path: '',
    component: NewsIndexPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
