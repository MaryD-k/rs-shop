import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorPageComponent } from '@core/error-page/error-page.component';
import { HeaderModule } from '@core/header/header.module';
import { StoreModule } from '@ngrx/store';
import { CategoriesHttpService } from 'src/app/services/categories-http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './redux/user/user.effects';
import { userReducer } from './redux/user/user.reducers';
import { CheckAuthService } from './services/check-auth.service';
import { UserHttpService } from './services/user-http.service';
import { CartHttpService } from './services/cart-http.service';
import { locationReducer } from './redux/location/location.reducer';
import { LocationEffects } from './redux/location/location.effects';

@NgModule({
  declarations: [AppComponent, ErrorPageComponent, FooterComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HeaderModule, 
    HttpClientModule,
    StoreModule.forRoot({userState: userReducer, locationState: locationReducer}), 
    EffectsModule.forRoot([UserEffects, LocationEffects])
  ],
  providers: [CategoriesHttpService, UserHttpService, CheckAuthService, CartHttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
