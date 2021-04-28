import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { PermissionComponent } from './permission/permission.component';
import { TracinglistComponent } from './tracinglist/tracinglist.component';
import { OutingComponent } from './outing/outing.component';
import { TracingaddComponent } from './tracingadd/tracingadd.component';
import { OutingaddComponent } from './outingadd/outingadd.component';
import { PermissionaddComponent } from './permissionadd/permissionadd.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    PermissionComponent,
    TracinglistComponent,
    OutingComponent,
    TracingaddComponent,
    OutingaddComponent,
    PermissionaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }