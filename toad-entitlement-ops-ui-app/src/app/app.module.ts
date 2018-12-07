import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { SiderComponent } from './components/sider/sider.component';
import { HttpIntersector } from './http-intersector';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SiderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, 
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntersector, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
