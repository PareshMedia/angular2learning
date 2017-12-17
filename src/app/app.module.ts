import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ProductComponent } from './product/product.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import {Ng2PaginationModule} from 'ng2-pagination';

const appRoutes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    InventoryComponent,
    PageNotFoundComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,HttpModule,RouterModule.forRoot(appRoutes),FormsModule,Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
