import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { AreaGetModel } from 'src/app/models/Area/area-get.model';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-area-delete',
  templateUrl: './area-delete.component.html'
})
export class AreaDeleteComponent implements OnInit {

  id!: number;
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

  delete(): void{
    this.service.delete(this.id).subscribe({
      next:(res=>{
        this.snack.open("OK", "Area deleta com sucesso", {
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