import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ProcessGetModel } from 'src/app/models/Process/process-get.model';
import { SubprocessAddModel } from 'src/app/models/Subprocess/subprocess-add.model';
import { SubprocessGetModel } from 'src/app/models/Subprocess/subprocess-get.model';
import { ProcessService } from 'src/app/services/process.service';
import { SubprocessService } from 'src/app/services/subprocess.service';

@Component({
  selector: 'app-subprocess-form',
  templateUrl: './subprocess-form.component.html',
})
export class SubprocessFormComponent implements OnInit {

  name!:string;
  responsible!:string;
  description!:string;
  tools!:string;
  technologies!:string;
  processId!:number
  fatherId!:number

  processos: ProcessGetModel[] = [];
  subprocessos: SubprocessGetModel[] = [];
  
  constructor(
    private router: Router, 
    private proc: ProcessService, 
    private snack: MatSnackBar,
    private sub: SubprocessService, 
  ) { }

  ngOnInit(): void {
    this.proc.getAll().subscribe((processos: ProcessGetModel[]) => {
      this.processos = processos;
    });

    this.sub.getAll().subscribe((subprocessos: SubprocessGetModel[]) => {
      this.subprocessos = subprocessos;
    });
  }

  onSubmit(): void {
    let registerObj:  SubprocessAddModel= {
      name: this.name,
      responsible: this.responsible,
      description: this.description,
      tools: this.tools,
      technologies: this.technologies,
      processId: this.processId != null ? this.processId : 0 ,
      fatherId: this.fatherId != null ? this.fatherId : 0
    }

    this.sub.register(registerObj).subscribe({
      next:(res=>{
        this.snack.open("OK", "Subprocessos deletado com sucesso", {
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
    this.router.navigate(['subprocess-table'])
  }
}
