import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdCardModule, MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdCardModule,
    MdInputModule
  ],
  declarations: [],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdCardModule,
    MdInputModule
  ]
})
export class MaterialdesignModule { }
