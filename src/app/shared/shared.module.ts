import { NgModule , ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

/**All Shared Services */
import * as services from './services'


@NgModule({
  imports:      [ 
    CommonModule,
    TranslateModule
    ],
  declarations: [ ],
  exports : [ 
    CommonModule,
    TranslateModule 
  ]
})

export class SharedModule {
  constructor(private vsTranslate : TranslateService){
    this.vsTranslate.setDefaultLang('en');
  }
  //Forroot method used to ensure the service have singletons instance
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ 
        services.VsTranslateService
      ]
    }
  }
}