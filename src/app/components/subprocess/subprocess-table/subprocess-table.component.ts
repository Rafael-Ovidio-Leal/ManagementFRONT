import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SubprocessGetModel } from 'src/app/models/Subprocess/subprocess-get.model';
import { SubprocessService } from 'src/app/services/subprocess.service';

@Component({
  selector: 'app-subprocess-table',
  templateUrl: './subprocess-table.component.html'
})
export class SubprocessTableComponent implements OnInit{
  
  colunasSubprocess: string[] = ['subprocessId', 'name', 'process', 'subprocess', 'responsible', 'tools', 'technologies', 'status', 'detalhes',  'editar', 'deletar'];
  subprocessTable = new MatTableDataSource<SubprocessGetModel>();
  subprocessos: SubprocessGetModel[] = [];

  subprocessId!: number;
  subprocess!: SubprocessGetModel;

  constructor(private service: SubprocessService, private router: Router ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((subprocess) => {
     
      for (let i = 0; i < subprocess.length; i++) {
        if(subprocess[i].fatherId > 0){
          this.service.getId(subprocess[i].fatherId).subscribe((sub) => {
              subprocess[i].fatherName = sub.name;
          });
        }
      }

      this.subprocessos = subprocess
    });

  }

  onSubmit(): void{
    this.router.navigate(['subprocess'])
  }

  onUpdate(subprocessId: number): void{
    this.router.navigate(['subprocess-update', subprocessId])
  }

  onDelete(subprocessId: number): void{
    this.router.navigate(['subprocess-delete', subprocessId])
  }

  onDetalhes(areaId: number): void{
    this.router.navigate(['subprocess-detalhes', areaId])
  }
}