import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';

const components = [
    MatTabsModule,
    MatMenuModule
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ...components
    ],
    exports: [...components]
})
export class MaterialModule {}