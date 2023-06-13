import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AreaGetModel } from 'src/app/models/Area/area-get.model';
import { ProcessGetModel } from 'src/app/models/Process/process-get.model';
import { AreaService } from 'src/app/services/area.service';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-process-update',
  templateUrl: './process-update.component.html',
})
export class ProcessUpdateComponent implements OnInit {

  id!: number;
  areaId!: number;
  name!:string;
  responsible!:string;
  description!:string;
  tools!:string;
  technologies!:string;
  Status!:string;

  ProcessGet!: ProcessGetModel
  areas: AreaGetModel[] = [];

  constructor(
    private area: AreaService,
    private process : ProcessService,
    private router: Router,
    private route: ActivatedRoute,
    private snack: MatSnackBar,
  ) { }

  private routeSub: Subscription = new Subscription();

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.area.getAll().subscribe((areas: AreaGetModel[]) => {
      this.areas = areas;
    });
    this.process.getId(this.id).subscribe((proc)=>{
      this.ProcessGet=proc;
    })
  }

  editar(): void{
    this.ProcessGet.processId = this.id;
    this.ProcessGet.areaId = this.areaId != null ? this.areaId : this.ProcessGet.areaId;
    this.ProcessGet.name = this.name != null ? this.name : this.ProcessGet.name;
    this.ProcessGet.responsible = this.responsible != null ? this.responsible : this.ProcessGet.responsible;
    this.ProcessGet.description = this.description != null ? this.description : this.ProcessGet.description;
    this.ProcessGet.tools = this.tools != null ? this.tools : this.ProcessGet.tools;
    this.ProcessGet.technologies = this.technologies != null ? this.technologies :  this.ProcessGet.technologies;
    this.ProcessGet.Status = this.Status != null ? this.Status : this.ProcessGet.Status;
    
    this.process.update(this.ProcessGet).subscribe({
      next:(res=>{
        this.snack.open("OK", "Processo atualizado com sucesso", {
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
        this.router.navigate(['process-table'])
      }),
      error:(err=>{
        this.snack.open("ERROR", "Ocorreu um erro, tente novamente.", {
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
      })
    })
  }

  back(): void{
    this.router.navigate(["process-table"]);
  }

}
