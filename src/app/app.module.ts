import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EscritorComponent } from './escritor/escritor.component';
import { EscritoresService } from './escritores.service';

@NgModule({
  declarations: [
    AppComponent,
    EscritorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EscritoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
