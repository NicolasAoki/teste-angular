import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroiDetalheComponent } from './heroi-detalhe/heroi-detalhe.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroiDetalheComponent,
    MensagemComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
