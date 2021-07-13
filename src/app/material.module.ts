import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

const components = [
    MatTabsModule
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