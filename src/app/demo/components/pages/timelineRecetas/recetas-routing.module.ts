import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecetasComponent } from './recetas.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: RecetasComponent }
    ])],
    exports: [RouterModule]
})
export class RecetasRoutingModule { }
