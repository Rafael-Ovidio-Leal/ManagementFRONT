import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AreaGetModel } from 'src/app/models/Area/area-get.model';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-area-update',
  templateUrl: './area-update.component.html'
})
export class AreaUpdateComponent implements OnInit {

  id!: number;
  name!:string;
  responsible!:string;
  description!:string;
  tools!:string;
  technologies!:string;
  Status!:string;

  AreaGet!: AreaGetModel

  constructor(
    private service: AreaService,
    private router: Router,
    private route: ActivatedRoute,
    private snack: MatSnackBar,
  ) { }

  private routeSub: Subscription = new Subscription();

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.service.getId(this.id).subscribe((area)=>{
      this.AreaGet=area;
    })
  }

  editar(): void{
    this.AreaGet.areaId = this.id;
    this.AreaGet.name = this.name != null ? this.name : this.AreaGet.name;
    this.AreaGet.responsible = this.responsible != null ? this.responsible : this.AreaGet.responsible;
    this.AreaGet.description = this.description != null ? this.description : this.AreaGet.description;
    this.AreaGet.tools = this.tools != null ? this.tools : this.AreaGet.tools;
    this.AreaGet.technologies = this.technologies != null ? this.technologies :  this.AreaGet.technologies;
    this.AreaGet.Status = this.Status != null ? this.Status : this.AreaGet.Status;

    this.service.update(this.AreaGet).subscribe({
      next:(res=>{
        this.snack.open("OK", "Area atualizada com sucesso", {
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
