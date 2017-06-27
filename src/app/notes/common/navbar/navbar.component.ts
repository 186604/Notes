import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  protected logout(): void{
    localStorage.setItem("currentUser",undefined);
    alert('logged out!');
    location.href="#";
  }
}
