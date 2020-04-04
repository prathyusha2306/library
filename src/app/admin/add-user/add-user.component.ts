import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private nav:NavbarService) { }

  ngOnInit() {
    this.nav.hide();
  }

}
