import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DataViewModule} from 'primeng/dataview';
import {HttpClientModule} from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ImageModule} from 'primeng/image';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ItemsDataViewComponent } from './components/items-data-view/items-data-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsDataViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataViewModule,
    HttpClientModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    ImageModule,
    BrowserAnimationsModule,
    CarouselModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
