import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { users } from 'src/app/models/users';
import { LoginService } from '../services/login/login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  fg : FormGroup;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor( private NewUserService : LoginService, private fb : FormBuilder, private router : Router) {



    this.fg=this.fb.group({
      name: ['', Validators.required],
      lastname :['', Validators.required],
      email :['' ,[Validators.required, Validators.email]],
      password :['',Validators.required],
      // role :['',Validators.required]

    })

}

NewUser(){
  const newusers: users = {
    name: this.fg.get('name')?.value,
    lastname: this.fg.get('lastname')?.value,
    email: this.fg.get('email')?.value,
    password: this.fg.get('password')?.value,
    role: this.fg.get('role')?.value,

  }
  console.log(newusers);
  this.NewUserService.Newregister(newusers).subscribe( data => {
    if (data != null){
      console.log("no subió nada");
    } else {
      console.log("hola");
    }



  }, (err: any) => {
    console.log(err);
  } );
}



}
