import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { SettingsComponent } from './settings/settings.component';
import { ProjectViewComponent } from './project-view/project-view.component';

const routes: Routes = [
  {path:'', component: AuthMainComponent},
  {path:'auth', component: AuthMainComponent},
  {path:'register', component: AuthRegisterComponent},
  {path:'login', component: AuthLoginComponent},
  {path:'home', component: HomeComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'projects/:id', component: ProjectViewComponent},
  {path:'schedule', component: ScheduleComponent},
  {path:'invoices', component: InvoicesComponent},
  {path:'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
