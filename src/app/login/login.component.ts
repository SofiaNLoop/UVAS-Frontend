import { Component,NgZone,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  loginForm : FormGroup;

  constructor( private fb: FormBuilder,
    private router: Router, private logServ: LoginService,
    private ngZone: NgZone) {

      this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        role: ['', Validators.required],

      });

    }


    login(){
      this.logServ.login( this.loginForm.value )
        .subscribe( data => {
  
          this.router.navigateByUrl('/sesion');
  
        }, (err)=>{
          // Swal.fire('Error', err.error.msg, 'error');
        });
  
    };

}
