import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackgroundComponent } from './background.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'background', component: BackgroundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class BackgroundRoutingModule { }
