import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './component/componente1/componente1.component';
import { Componente2Component } from './component/componente2/componente2.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MainwindowComponent } from './component/mainwindow/mainwindow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GatoComponent } from './component/gato/gato.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { Juego2Component } from './component/juego2/juego2.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FullpageComponent } from './maincomponent/fullpage/fullpage.component';
import { TitlepageComponent } from './maincomponent/titlepage/titlepage.component';
import { ContentpageComponent } from './maincomponent/contentpage/contentpage.component';
import { HomecomponentComponent } from './windowcontent/homecomponent/homecomponent.component';
import { FunctionalitiescomponentComponent } from './windowcontent/functionalitiescomponent/functionalitiescomponent.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    SidebarComponent,
    MainwindowComponent,
    GatoComponent,
    Juego2Component,
    FullpageComponent,
    TitlepageComponent,
    ContentpageComponent,
    HomecomponentComponent,
    FunctionalitiescomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
