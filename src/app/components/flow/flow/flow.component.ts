import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AreaGetModel } from 'src/app/models/Area/area-get.model';
import { ProcessGetModel } from 'src/app/models/Process/process-get.model';
import { SubprocessGetModel } from 'src/app/models/Subprocess/subprocess-get.model';
import { AreaService } from 'src/app/services/area.service';
import { FlowService } from 'src/app/services/flow.service';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {

  panelOpenState = false;
  step = 0;
  areaId!: number;
  processId!: number
  subprocessId!: number
  fatherId!: number

  public show:boolean = false;
  public buttonName:any = 'Listar';

  areas: AreaGetModel[] = [];
  processos: ProcessGetModel[] = [];
  subprocessos: SubprocessGetModel[] = [];
  subs: SubprocessGetModel[] = [];

  constructor(
    private area: AreaService,
    private flow: FlowService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.area.getAll().subscribe((areas: AreaGetModel[]) => {
      this.areas = areas;
    })
  }

  process() {

    this.flow.getProcess(this.areaId).subscribe((processs: ProcessGetModel[]) => {
      this.processos = processs;
    });
    
  }

  subprocess(processId: number) {
    this.subs = [];
    this.flow.getSubprocess(processId).subscribe((subprocesss: SubprocessGetModel[]) => {
      this.subprocessos = subprocesss;
    });
    
  }
  

  sub(fatherId: number) {
    this.flow.getSubprocess(fatherId).subscribe((subs: SubprocessGetModel[]) => {
      this.subs = subs;
    });
  }
    
  

}
