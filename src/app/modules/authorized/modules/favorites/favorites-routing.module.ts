import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesIndexPage } from './pages/favorites-index/favorites-index.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritesIndexPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesRoutingModule {}
