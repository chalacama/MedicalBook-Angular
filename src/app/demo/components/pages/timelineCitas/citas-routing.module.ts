import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CitasComponent } from './citas.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CitasComponent }
    ])],
    exports: [RouterModule]
})
export class CitasRoutingModule { }
