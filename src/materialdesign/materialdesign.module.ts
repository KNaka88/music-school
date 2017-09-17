import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdCardModule
  ],
  declarations: [],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdCardModule
  ]
})
export class MaterialdesignModule { }
