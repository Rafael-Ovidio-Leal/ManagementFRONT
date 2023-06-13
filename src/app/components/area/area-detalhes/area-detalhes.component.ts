import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AreaGetModel } from 'src/app/models/Area/area-get.model';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-area-detalhes',
  templateUrl: './area-detalhes.component.html',
})
export class AreaDetalhesComponent implements OnInit {

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
  
  back(): void{
    this.router.navigate(["area-table"]);
  }
}
