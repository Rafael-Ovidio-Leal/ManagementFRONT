import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name!: any

  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private auth: AuthService) { }

  routerActive: string = "activelink";

  ngOnInit() {
    this.name = this.auth.getfullNameFromToken();
    console.log(this.name)
  }

  sidebarMenu: sidebarMenu[] = [
    {
      link: "/home",
      icon: "home",
      menu: "Dashboard",
    },
    {
      link: "/area-table",
      icon: "List",
      menu: "Área",
    },
    {
      link: "/process-table",
      icon: "menu",
      menu: "Processo",
    },
    {
      link: "/subprocess-table",
      icon: "grid",
      menu: "Subprocesso",
    },
    {
      link: "/flow",
      icon: "Layers",
      menu: "Fluxo",
    }
  ]

  logout(): void{
    this.auth.logout();
  }
  
}

