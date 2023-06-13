import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AreaGetModel } from 'src/app/models/Area/area-get.model';
import { ProcessAddModel } from 'src/app/models/Process/process-add.model';
import { AreaService } from 'src/app/services/area.service';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-process-form',
  templateUrl: './process-form.component.html'
})
export class ProcessFormComponent implements OnInit {

  name!:string;
  responsible!:string;
  description!:string;
  tools!:string;
  technologies!:string;
  areaId!:number

  areas: AreaGetModel[] = [];
  
  constructor(
    private router: Router, 
    private process: ProcessService, 
    private snack: MatSnackBar,
    private area: AreaService, 
  ) { }

  ngOnInit(): void {
    this.area.getAll().subscribe((areas: AreaGetModel[]) => {
      this.areas = areas;
    });
  }

  onBack(): void {
    let registerObj:  ProcessAddModel= {
      name: this.name,
      responsible: this.responsible,
      description: this.description,
      tools: this.tools,
      technologies: this.technologies,
      areaId: this.areaId
    }

    this.process.register(registerObj)
      .subscribe({
        next:(res=>{
          this.snack.open("OK", "Processo cadastrado com sucesso", {
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