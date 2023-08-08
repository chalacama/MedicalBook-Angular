import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { ErrorComponent } from './public/pages/error/error.component';
import { AuthGuard } from './core/shared/guard/auth.guard';
import { PermissionGuard } from './core/shared/guard/permission/permission.guard';
@NgModule({
    imports: [
        RouterModule.forRoot([
{
            path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule),
            // canActivate: [PermissionGuard]
            canActivate: [AuthGuard]
            },
            {
                path: 'home', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule),canActivate: [AuthGuard] },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule),canActivate: [AuthGuard] },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ],
                // canActivate: [PermissionGuard],
                // canActivate: [AuthGuard]
                // canActivate: [PermissionGuard]
            },

            // { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            // { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    providers:[AuthGuard]
})


export class AppRoutingModule {
}
