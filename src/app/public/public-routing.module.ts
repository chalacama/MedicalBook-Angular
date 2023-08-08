import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { LogComponent } from './pages/log/container/log.component';
import { Component } from '@fullcalendar/core/preact';

const routes: Routes = [
    {
        path : '',component:PublicComponent,children:
      [
        {path:'',redirectTo:'login',pathMatch: 'full'},
        {path:'login', component : LogComponent,title:'Login' },
      ]

    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule { }
