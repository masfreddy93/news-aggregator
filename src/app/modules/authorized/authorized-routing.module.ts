import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'news',
        loadChildren: () =>
          import('./modules/news/news.module').then((m) => m.NewsModule),
      },
      {
        path: 'favorites',
        loadChildren: () =>
          import('./modules/favorites/favorites.module').then(
            (m) => m.FavoritesModule
          ),
      },
      {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizedRoutingModule {}
