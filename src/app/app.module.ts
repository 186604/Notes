import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import {LoginComponent} from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { NavbarComponent } from './notes/common/navbar/navbar.component';
import { DashboardComponent } from './notes/dashboard/dashboard.component';
import {Authenticate} from './user/login/authenticate';
import { ActionBoxComponent } from './notes/common/action-box/action-box.component';
import { NewBoardComponent } from './notes/new-board/new-board.component';
import { PageHeaderComponent } from './notes/common/page-header/page-header.component';
import { NotesService } from './notes/notes.service';

const routes: Routes  = [
  { path: '',component:LoginComponent },
  { path: '404', component: LoginComponent },
  { path: 'login.component',component:LoginComponent },
  //{path: '/*path', redirectTo: '/login.component'},
  { path: 'register.component',component:RegisterComponent },
   { path: 'new-board.component',component:NewBoardComponent },
  { path: 'dashboard.component',component:DashboardComponent,canActivate: [Authenticate] },
  {path: '**', redirectTo: '404'}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DashboardComponent,
    ActionBoxComponent,
    NewBoardComponent,
    PageHeaderComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Authenticate, NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
