import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AreaGetModel } from 'src/app/models/Area/area-get.model';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-area-table',
  templateUrl: './area-table.component.html'
})
export class AreaTableComponent implements OnInit{
  
  colunasAreas: string[] = ['areaId', 'name', 'responsible', 'tools', 'technologies', 'status', 'detalhes',  'editar', 'deletar'];
  areaTable = new MatTableDataSource<AreaGetModel>();
  areas: AreaGetModel[] = [];

  areaId!: number;
  area!: AreaGetModel;

  constructor(private service: AreaService, private router: Router ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((areas) => {
      this.areas = areas
    });
  }

  onSubmit(): void{
    this.router.navigate(['area'])
  }

  onUpdate(areaId: number): void{
    this.router.navigate(['area-update', areaId])
  }

  onDelete(areaId: number): void{
    this.router.navigate(['area-delete', areaId])
  }

  onDetalhes(areaId: number): void{
    this.router.navigate(['area-detalhes', areaId])
  }
}
