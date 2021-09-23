import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorPageComponent } from '@core/error-page/error-page.component';
import { HeaderModule } from '@core/header/header.module';
import { StoreModule } from '@ngrx/store';
import { CategoriesHttpService } from 'src/app/services/categories-http.service';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { UserEffects } from './redux/user/user.effects';
import { userReducer } from './redux/user/user.reducers';
import { CheckAuthService } from './services/check-auth.service';
import { UserHttpService } from './services/user-http.service';
import { CartHttpService } from './services/cart-http.service';
import { locationReducer } from './redux/location/location.reducer';
import { LocationEffects } from './redux/location/location.effects';
import { Interceptor } from './api.interceptor';

@NgModule({
  declarations: [AppComponent, ErrorPageComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
    StoreModule.forRoot({ userState: userReducer, locationState: locationReducer }),
    EffectsModule.forRoot([UserEffects, LocationEffects]),
  ],
  providers: [
    CategoriesHttpService,
    UserHttpService,
    CheckAuthService,
    CartHttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
