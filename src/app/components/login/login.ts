import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private auth:Auth, private router:Router){}
  ngOnInit(){
    if(this.auth.isLoggedIn()){
      this.router.navigate(['admin'])
    }
  }

  loginForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  });

  onSubmit(){
    console.log(this.loginForm.value);
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe((result)=>{
        this.router.navigate(['admin']);
      }, (err:Error)=>{
        alert(err.message)
      })
    }
  }

}
