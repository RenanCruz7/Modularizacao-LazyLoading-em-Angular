import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BuscaComponent } from './pages/busca/busca.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './core/material/material.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { AutenticacaoInterceptor } from './autenticacao/autenticacao.interceptor';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    BuscaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    BrowserAnimationsModule,
    AutenticacaoModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AutenticacaoInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
