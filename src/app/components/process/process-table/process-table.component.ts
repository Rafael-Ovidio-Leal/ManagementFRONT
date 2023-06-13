import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProcessGetModel } from 'src/app/models/Process/process-get.model';
import { ProcessService } from 'src/app/services/process.service';

@Component({
  selector: 'app-process-table',
  templateUrl: './process-table.component.html'
})
export class ProcessTableComponent implements OnInit{
  
  colunasProcess: string[] = ['processId', 'name', 'area', 'responsible', 'tools', 'technologies', 'status', 'detalhes',  'editar', 'deletar'];
  processTable = new MatTableDataSource<ProcessGetModel>();
  processos: ProcessGetModel[] = [];

  processId!: number;
  process!: ProcessGetModel;

  constructor(private service: ProcessService, private router: Router ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((processos) => {
      this.processos = processos
    });
  }

  onSubmit(): void{
    this.router.navigate(['process'])
  }

  onUpdate(processId: number): void{
    this.router.navigate(['process-update', processId])
  }

  onDelete(processId: number): void{
    this.router.navigate(['process-delete', processId])
  }

  onDetalhes(areaId: number): void{
    this.router.navigate(['process-detalhes', areaId])
  }
}
