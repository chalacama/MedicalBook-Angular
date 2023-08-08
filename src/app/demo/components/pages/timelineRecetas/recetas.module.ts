import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RecetasComponent } from './recetas.component';
import { RecetasRoutingModule } from './recetas-routing.module';


@NgModule({
    imports: [
        CommonModule,
        TimelineModule,
        ButtonModule,
        CardModule,

        RecetasRoutingModule
    ],
    declarations: [RecetasComponent]
})
export class RecetasModule { }
