import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/** Shared Module */
import { SharedModule } from './shared/shared.module';

/** Main Routing */
import { VsRoutingModule } from './vs-routing/vs-routing.module'

/**Translate Loader */
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    SharedModule,
    VsRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
