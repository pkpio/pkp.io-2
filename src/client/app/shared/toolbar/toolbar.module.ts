import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdToolbarModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MdToolbarModule, MdIconModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
