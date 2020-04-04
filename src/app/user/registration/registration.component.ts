import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { customvalidators } from './validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private builder: FormBuilder, private router:Router) { }
  regGroup;
  ngOnInit() {
    this.regGroup=this.builder.group({
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      username:['',[Validators.required]],
      pass:['',[Validators.required]],
      confirmpass:['',Validators.required],
      email:['',[Validators.required]]
    },{validators:customvalidators})
  }
 submit(){
 let userdetails=JSON.stringify(this.regGroup.value);
 localStorage.setItem(this.regGroup.value.username,userdetails);
 this.router.navigate(['/login']);
 }
}
