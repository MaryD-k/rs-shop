import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorPageComponent } from '@core/error-page/error-page.component';
import { HeaderModule } from '@core/header/header.module';
import { CategoriesHttpService } from 'src/app/services/categories-http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [AppComponent, ErrorPageComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, HttpClientModule],
  providers: [CategoriesHttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
