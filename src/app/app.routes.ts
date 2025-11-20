import { Routes } from '@angular/router';
import { Auth } from './services/auth';
import { authGuard } from './guard/auth-guard';
// import { Login } from './components/login/login';
// import { ForgotPassword } from './components/forgot-password/forgot-password';
// import { NotFound } from './components/not-found/not-found';
// import { AdminModule } from './modules/admin/admin-module';

export const routes: Routes = [
    {path:'login',loadComponent:()=>import('./components/login/login').then((c)=>c.Login)},
    {path:'forgot-password',loadComponent:()=>import('./components/forgot-password/forgot-password').then((c)=>c.ForgotPassword)},

    {path:'admin',canActivate:[authGuard],loadChildren:()=>import('./modules/admin/admin-module').then((c)=>c.AdminModule)},

    {path:'', redirectTo:'/login', pathMatch:'full'},
    {path:'**',loadComponent:()=>import('./components/not-found/not-found').then((c)=>c.NotFound)}
    

    
];
