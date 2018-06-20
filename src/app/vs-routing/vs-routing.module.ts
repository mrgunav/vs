import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/** Routing Path */
import { vsRoutes } from './routing';

@NgModule({
  imports: [
    RouterModule.forRoot(vsRoutes)
  ],
  exports: [ RouterModule ]
})
export class VsRoutingModule { }