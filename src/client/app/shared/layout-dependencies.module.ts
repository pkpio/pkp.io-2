import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdToolbarModule, MdIconModule } from '@angular/material';

/**
 * All layout related external modules to simplify module imports.
 */
@NgModule({
  imports: [FlexLayoutModule, MdToolbarModule, MdIconModule],
  exports: [FlexLayoutModule, MdToolbarModule, MdIconModule]
})
export class LayoutDependenciesModule { }
