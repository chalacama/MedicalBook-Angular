import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CitasComponent } from './citas.component';
import { CitasRoutingModule } from './citas-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TimelineModule,
        ButtonModule,
        CardModule,
        CitasRoutingModule
    ],
    declarations: [CitasComponent]
})
export class CitasModule { }
