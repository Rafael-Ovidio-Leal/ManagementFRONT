import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { UserLoginModel } from 'src/app/models/user-login.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;

  public showPassword: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private snack: MatSnackBar,
    private userStore: UserStoreService
  ) {}

  ngOnInit() {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void{
    let user: UserLoginModel ={
      username: this.username,
      password: this.password
    }
    
    this.auth.login(user).subscribe({
            next: (res) => {
              this.auth.storeToken(res.accessToken);
              this.auth.storeRefreshToken(res.refreshToken);
              const tokenPayload = this.auth.decodedToken();
              this.userStore.setFullNameForStore(tokenPayload.name);
              this.userStore.setRoleForStore(tokenPayload.role);
              this.snack.open("OK", "SUCCESS", {
                duration: 3000,
                horizontalPosition: "center",
                verticalPosition: "bottom"
              });
              this.router.navigate(['home'])
            },
            error: (err) => {
              this.snack.open("ERROR", "Usuário ou senha incorreta", {
                duration: 3000,
                horizontalPosition: "center",
                verticalPosition: "bottom"
              });
              
            },
          });
  }
}