import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutDependenciesModule } from '../shared/layout-dependencies.module';
import { BackgroundComponent } from './background.component';
import { BackgroundRoutingModule } from './background-routing.module';

@NgModule({
  imports: [CommonModule, BackgroundRoutingModule, LayoutDependenciesModule],
  declarations: [BackgroundComponent],
  exports: [BackgroundComponent]
})
export class BackgroundModule { }
