import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MainNavComponent } from './pages/main-nav/main-nav.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/modules/angular-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { LogInterceptor } from './core/log.interceptor';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PresentationComponent,
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    HttpClientJsonpModule,
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),

  ],
  providers: [
    {
    provide : HTTP_INTERCEPTORS,
    useClass: LogInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
