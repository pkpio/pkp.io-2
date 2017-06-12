import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdToolbarModule, MdIconModule, MdButtonModule } from '@angular/material';

/**
 * All layout related external modules to simplify module imports.
 */
@NgModule({
  imports: [FlexLayoutModule, MdToolbarModule, MdIconModule, MdButtonModule],
  exports: [FlexLayoutModule, MdToolbarModule, MdIconModule, MdButtonModule]
})
export class LayoutDependenciesModule { }
