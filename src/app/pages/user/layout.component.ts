import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AccountService } from '../../_services';
import { Account, Role } from '../../_models';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  Role = Role;
  account: Account;

  options: FormGroup;

  constructor(private accountService: AccountService, private formBuilder: FormBuilder) {
    this.options = formBuilder.group({
      bottom: 0,
      fixed: true,
      top: 0
    });
  }

  logout() {
      this.accountService.logout();
  }

  ngOnInit(): void {
  }

}
