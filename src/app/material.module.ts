import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatCardModule
} from '@angular/material';

const MATERIAL_MODULES = [
    MatButtonModule,
    MatCardModule,
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ...MATERIAL_MODULES
    ],
    exports: [
        ...MATERIAL_MODULES
    ]
})
export class MaterialModule { }
