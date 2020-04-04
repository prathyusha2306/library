import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor( private nav:NavbarService) { }

  ngOnInit() {
    this.nav.show();
  }

}
