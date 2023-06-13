import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProcessGetModel } from 'src/app/models/Process/process-get.model';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-process-detalhes',
  templateUrl: './process-detalhes.component.html',
  styleUrls: ['./process-detalhes.component.scss']
})
export class ProcessDetalhesComponent implements OnInit {

  id!: number;
  name!:string;
  responsible!:string;
  description!:string;
  tools!:string;
  technologies!:string;
  Status!:string;

  ProcessGet!: ProcessGetModel

  constructor(
    private service: ProcessService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  private routeSub: Subscription = new Subscription();

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.service.getId(this.id).subscribe((proc)=>{
      this.ProcessGet=proc;
    })
  }
  
  back(): void{
    this.router.navigate(["process-table"]);
  }
}
