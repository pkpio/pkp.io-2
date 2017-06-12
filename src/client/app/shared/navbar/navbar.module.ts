import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutDependenciesModule } from '../layout-dependencies.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [CommonModule, RouterModule, LayoutDependenciesModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
