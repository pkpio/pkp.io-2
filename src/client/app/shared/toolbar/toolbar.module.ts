import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutDependenciesModule } from '../layout-dependencies.module';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [CommonModule, LayoutDependenciesModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
