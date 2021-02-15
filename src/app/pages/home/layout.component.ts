import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {
  activeTab = 'home';
  Company_Employees: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
