import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddRestroComponent } from './add-restro/add-restro.component';
import { RestroListComponent } from './restro-list/restro-list.component';
import { RestroService } from './service/restro.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ,AddRestroComponent ,RestroListComponent ],
  providers : [RestroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
