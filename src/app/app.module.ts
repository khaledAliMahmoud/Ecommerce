import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { CategoriesBarComponent } from './Components/categories-bar/categories-bar.component';
import { PageContentComponent } from './Components/page-content/page-content.component';
import { PageHeaderComponent } from './Components/page-header/page-header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './Components/product-card/product-card.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SideBarComponent,
    CategoriesBarComponent,
    PageContentComponent,
    PageHeaderComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
