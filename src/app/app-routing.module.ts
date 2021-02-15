import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_helpers';
import { Role } from './_models';

const homeModule = () => import('./pages/home/home.module').then(x => x.HomeModule);
const accountModule = () => import('./pages/account/account.module').then(x => x.AccountModule);
const userModule = () => import('./pages/user/user.module').then(x => x.UserModule);

const routes: Routes = [
    { path: '', loadChildren: homeModule},
    { path: 'account', loadChildren: accountModule },
    { path: 'user', loadChildren: userModule, canActivate: [AuthGuard], data: { roles: [Role.User] } },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
