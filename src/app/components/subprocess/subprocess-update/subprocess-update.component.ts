import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProcessGetModel } from 'src/app/models/Process/process-get.model';
import { SubprocessGetModel } from 'src/app/models/Subprocess/subprocess-get.model';
import { ProcessService } from 'src/app/services/process.service';
import { SubprocessService } from 'src/app/services/subprocess.service';

@Component({
  selector: 'app-subprocess-update',
  templateUrl: './subprocess-update.component.html',
})
export class SubprocessUpdateComponent implements OnInit {

  id!: number;
  name!:string;
  responsible!:string;
  description!:string;
  tools!:string;
  technologies!:string;
  processId!:number
  fatherId!:number
  Status!:string;

  processos: ProcessGetModel[] = [];
  subprocessos: SubprocessGetModel[] = [];

  SubprocessGet!: SubprocessGetModel

  constructor(
    private sub: SubprocessService,
    private proc : ProcessService,
    private router: Router,
    private route: ActivatedRoute,
    private snack: MatSnackBar,
  ) { }

  private routeSub: Subscription = new Subscription();

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.sub.getId(this.id).subscribe((proc)=>{
      console.log(proc)
      if(proc.fatherId != 0){
        this.fatherId = proc.fatherId
      }
      else
      {
        this.processId = proc.process.processId
      }

      this.SubprocessGet=proc;
    })
    this.proc.getAll().subscribe((processos: ProcessGetModel[]) => {
      this.processos = processos;
    });

    this.sub.getAll().subscribe((subprocessos: SubprocessGetModel[]) => {
      this.subprocessos = subprocessos;
    });
    
  }

  editar(): void{
    this.SubprocessGet.subprocessId = this.id;
    this.SubprocessGet.processId = this.processId != null ? this.processId : this.SubprocessGet.processId;
    this.SubprocessGet.fatherId = this.fatherId != null ? this.fatherId : this.SubprocessGet.fatherId;
    this.SubprocessGet.name = this.name != null ? this.name : this.SubprocessGet.name;
    this.SubprocessGet.responsible = this.responsible != null ? this.responsible : this.SubprocessGet.responsible;
    this.SubprocessGet.description = this.description != null ? this.description : this.SubprocessGet.description;
    this.SubprocessGet.tools = this.tools != null ? this.tools : this.SubprocessGet.tools;
    this.SubprocessGet.technologies = this.technologies != null ? this.technologies :  this.SubprocessGet.technologies;
    this.SubprocessGet.Status = this.Status != null ? this.Status : this.SubprocessGet.Status;
    
    this.sub.update(this.SubprocessGet).subscribe({
      next:(res=>{
        this.snack.open("OK", "Subprocessos atualizado com sucesso", {
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
        this.router.navigate(['subprocess-table'])
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

  onBack(): void{
    this.router.navigate(["subprocess-table"]);
  }
}
