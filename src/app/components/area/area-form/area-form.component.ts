import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AreaAddModel } from 'src/app/models/Area/area-add.model';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-area-form',
  templateUrl: './area-form.component.html',
})
export class AreaFormComponent implements OnInit {

  name!:string;
  responsible!:string;
  description!:string;
  tools!:string;
  technologies!:string;
  
  constructor(
    private router: Router, 
    private area: AreaService, 
    private snack: MatSnackBar,
  ) { }

  ngOnInit(): void {}

  onBack(): void {
    let registerObj: AreaAddModel = {
      name: this.name,
      responsible: this.responsible,
      description: this.description,
      tools: this.tools,
      technologies: this.technologies
    }
    this.area.register(registerObj).subscribe({
      next:(res=>{
        this.snack.open("OK", "Area cadastrada com sucesso", {
          duration: 3000,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
        this.router.navigate(['area-table'])
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
    this.router.navigate(["area-table"]);
  }

}
