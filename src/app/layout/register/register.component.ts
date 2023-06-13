import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRegisterModel } from 'src/app/models/user-register.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username!: string;
  email!: string;
  password!: string;
  firstName!: string;
  lastName!: string;

  public showPassword: boolean = false;

  constructor(
    private service: AuthService,
    private router: Router,
    private snack: MatSnackBar,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void{
    let userObj: UserRegisterModel={
        username: this.username,
        email: this.email,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        token: "",
        role: "Admin"
    };
    
    this.service.register(userObj).subscribe((res)=>{

      this.snack.open("OK", "SUCCESS", {
        duration: 3000,
        horizontalPosition: "center",
        verticalPosition: "bottom"
      });
      this.router.navigate(["login"]);

      
    });
  }

}
