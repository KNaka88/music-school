import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './service/user/auth-guard.service';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent, canActivate: [AuthGuardService]
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
