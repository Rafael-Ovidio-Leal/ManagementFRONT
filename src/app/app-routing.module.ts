import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './layout/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AreaFormComponent } from './components/area/area-form/area-form.component';
import { AreaTableComponent } from './components/area/area-table/area-table.component';
import { AreaUpdateComponent } from './components/area/area-update/area-update.component';
import { AreaDeleteComponent } from './components/area/area-delete/area-delete.component';
import { RegisterComponent } from './layout/register/register.component';
import { ProcessFormComponent } from './components/process/process-form/process-form.component';
import { ProcessTableComponent } from './components/process/process-table/process-table.component';
import { ProcessUpdateComponent } from './components/process/process-update/process-update.component';
import { ProcessDeleteComponent } from './components/process/process-delete/process-delete.component';
import { SubprocessFormComponent } from './components/subprocess/subprocess-form/subprocess-form.component';
import { SubprocessUpdateComponent } from './components/subprocess/subprocess-update/subprocess-update.component';
import { SubprocessDeleteComponent } from './components/subprocess/subprocess-delete/subprocess-delete.component';
import { SubprocessTableComponent } from './components/subprocess/subprocess-table/subprocess-table.component';
import { FlowComponent } from './components/flow/flow/flow.component';
import { AreaDetalhesComponent } from './components/area/area-detalhes/area-detalhes.component';
import { ProcessDetalhesComponent } from './components/process/process-detalhes/process-detalhes.component';
import { SubprocessDetalhesComponent } from './components/subprocess/subprocess-detalhes/subprocess-detalhes.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {
    path:"",
    component:HeaderComponent,
    children: [
      {path:"", redirectTo:"/login", pathMatch:"full"},
      {path:"home", component:DashboardComponent, canActivate:[AuthGuard]},

      {path:"area", component:AreaFormComponent, canActivate:[AuthGuard]},
      {path:"area-table", component:AreaTableComponent, canActivate:[AuthGuard]},
      {path:"area-update/:id", component:AreaUpdateComponent, canActivate:[AuthGuard]},
      {path:"area-delete/:id", component:AreaDeleteComponent, canActivate:[AuthGuard]},
      {path:"area-detalhes/:id", component:AreaDetalhesComponent, canActivate:[AuthGuard]},

      {path:"process", component:ProcessFormComponent, canActivate:[AuthGuard]},
      {path:"process-table", component:ProcessTableComponent, canActivate:[AuthGuard]},
      {path:"process-update/:id", component:ProcessUpdateComponent, canActivate:[AuthGuard]},
      {path:"process-delete/:id", component:ProcessDeleteComponent, canActivate:[AuthGuard]},
      {path:"process-detalhes/:id", component:ProcessDetalhesComponent, canActivate:[AuthGuard]},

      {path:"subprocess", component:SubprocessFormComponent, canActivate:[AuthGuard]},
      {path:"subprocess-table", component:SubprocessTableComponent, canActivate:[AuthGuard]},
      {path:"subprocess-update/:id", component:SubprocessUpdateComponent, canActivate:[AuthGuard]},
      {path:"subprocess-delete/:id", component:SubprocessDeleteComponent, canActivate:[AuthGuard]},
      {path:"subprocess-detalhes/:id", component:SubprocessDetalhesComponent, canActivate:[AuthGuard]},

      {path:"flow", component:FlowComponent, canActivate:[AuthGuard]},
    ]
  },

  {path:"register", component:RegisterComponent},
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
