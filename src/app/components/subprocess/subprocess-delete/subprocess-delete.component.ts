import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { SubprocessGetModel } from 'src/app/models/Subprocess/subprocess-get.model';
import { SubprocessService } from 'src/app/services/subprocess.service';

@Component({
  selector: 'app-subprocess-delete',
  templateUrl: './subprocess-delete.component.html',
})
export class SubprocessDeleteComponent implements OnInit {

  id!: number;
  SubprocessGet!: SubprocessGetModel

  constructor(
    private service: SubprocessService,
    private router: Router,
    private route: ActivatedRoute,
    private snack: MatSnackBar,
  ) { }

  private routeSub: Subscription = new Subscription();

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.service.getId(this.id).subscribe((sub)=>{
      this.SubprocessGet=sub;
    })
  }

  delete(): void{
    this.service.delete(this.id).subscribe({
      next:(res=>{
        this.snack.open("OK", "Subprocess deletado com sucesso", {
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

  back(): void{
    this.router.navigate(["subprocess-table"]);
  }

}
