import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { ProcessGetModel } from 'src/app/models/Process/process-get.model';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-process-delete',
  templateUrl: './process-delete.component.html',
})
export class ProcessDeleteComponent implements OnInit {

  id!: number;
 ProcessGet!: ProcessGetModel

  constructor(
    private service: ProcessService,
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
      this.ProcessGet=area;
    })
  }

  delete(): void{
    this.service.delete(this.id).subscribe({
      next:(res=>{
        this.snack.open("OK", "Processo deletado com sucesso", {
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
