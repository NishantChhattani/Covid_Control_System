import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracingListComponent } from './tracing-list/tracing-list.component';
import { TracingFormComponent } from './tracing-form/tracing-form.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },

    { path: 'tracing', component: TracingListComponent },
    { path: 'addtracing', component: TracingFormComponent },

    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
