import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  values: any;
  registerMode = false;
  constructor() { }

  ngOnInit() {
  }

  ActivateRegisterMode() {
    this.registerMode = true;
  }

  cancelRegisterMode(mode: boolean) {
    this.registerMode = mode;
  }

}
