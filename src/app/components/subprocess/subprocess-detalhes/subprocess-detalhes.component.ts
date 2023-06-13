import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubprocessGetModel } from 'src/app/models/Subprocess/subprocess-get.model';
import { SubprocessService } from 'src/app/services/subprocess.service';

@Component({
  selector: 'app-subprocess-detalhes',
  templateUrl: './subprocess-detalhes.component.html',
  styleUrls: ['./subprocess-detalhes.component.scss']
})
export class SubprocessDetalhesComponent implements OnInit {

  id!: number;
  name!:string;
  responsible!:string;
  description!:string;
  tools!:string;
  technologies!:string;
  Status!:string;

  SubprocessGet!: SubprocessGetModel

  constructor(
    private service: SubprocessService,
    private router: Router,
    private route: ActivatedRoute,
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
  
  back(): void{
    this.router.navigate(["subprocess-table"]);
  }
}
