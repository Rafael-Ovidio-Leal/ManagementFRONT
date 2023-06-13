import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { FormsModule } from '@angular/forms';
import { allIcons } from 'angular-feather/icons';

import { WebManagementModule } from '../web-management-module';
import { AreaDeleteComponent } from './area/area-delete/area-delete.component';
import { AreaFormComponent } from './area/area-form/area-form.component';
import { AreaTableComponent } from './area/area-table/area-table.component';
import { AreaUpdateComponent } from './area/area-update/area-update.component';
import { ProcessDeleteComponent } from './process/process-delete/process-delete.component';
import { ProcessFormComponent } from './process/process-form/process-form.component';
import { ProcessTableComponent } from './process/process-table/process-table.component';
import { ProcessUpdateComponent } from './process/process-update/process-update.component';
import { SubprocessUpdateComponent } from './subprocess/subprocess-update/subprocess-update.component';
import { SubprocessDeleteComponent } from './subprocess/subprocess-delete/subprocess-delete.component';
import { SubprocessTableComponent } from './subprocess/subprocess-table/subprocess-table.component';
import { SubprocessFormComponent } from './subprocess/subprocess-form/subprocess-form.component';
import { FlowComponent } from './flow/flow/flow.component';
import { AreaDetalhesComponent } from './area/area-detalhes/area-detalhes.component';
import { SubprocessDetalhesComponent } from './subprocess/subprocess-detalhes/subprocess-detalhes.component';
import { ProcessDetalhesComponent } from './process/process-detalhes/process-detalhes.component';


@NgModule({
  declarations: [
    AreaFormComponent,
    AreaTableComponent,
    AreaUpdateComponent,
    AreaDeleteComponent,
    ProcessDeleteComponent,
    ProcessFormComponent,
    ProcessTableComponent,
    ProcessUpdateComponent,
    SubprocessUpdateComponent,
    SubprocessDeleteComponent,
    SubprocessTableComponent,
    SubprocessFormComponent,
    FlowComponent,
    AreaDetalhesComponent,
    SubprocessDetalhesComponent,
    ProcessDetalhesComponent
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    FormsModule,
    WebManagementModule
  ],
  exports: [
    AreaFormComponent,
    AreaTableComponent,
    AreaUpdateComponent,
    AreaDeleteComponent
  ]
})
export class ComponentsModule { }
