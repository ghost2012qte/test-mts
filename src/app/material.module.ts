import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

const components = [
    MatTabsModule,
    MatMenuModule,
    MatTooltipModule,
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
