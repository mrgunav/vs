import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class VsTranslateService {

 constructor(
    private translate:TranslateService) { }

  get(key:string,value:any=null){
    return this.translate.get(key,value);
  }

  getAll(keys:string[]){
    return this.translate.get(keys);
  }

  use(lang:string){
    return this.translate.use(lang);
  }

  default(lang:string){
    return this.translate.setDefaultLang(lang);
  }

}