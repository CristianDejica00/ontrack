import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { AuthRegisterComponent } from './auth-register/auth-register.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { SettingsComponent } from './settings/settings.component';
import { NavbarComponent } from './navbar/navbar.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ProjectBlockComponent } from './projects/project-block/project-block.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AuthMainComponent,
    AuthRegisterComponent,
    AuthLoginComponent,
    HomeComponent,
    ProjectsComponent,
    ScheduleComponent,
    InvoicesComponent,
    SettingsComponent,
    NavbarComponent,
    ProjectBlockComponent,
    ProjectViewComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
