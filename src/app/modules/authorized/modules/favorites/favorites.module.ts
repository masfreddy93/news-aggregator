import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesIndexPage } from './pages/favorites-index/favorites-index.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FavoritesIndexPage],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatIconModule,
  ],
})
export class FavoritesModule {}
