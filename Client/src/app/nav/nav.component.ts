import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  username: string = '';

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.accountService.currentUser$.subscribe({
      next : user => {
        if(user)
          this.username = user.username;
      },
      error : error => console.log(error)
    })
  }

  login(){
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.username = this.model.username;
      },
      error: error => console.log(error)
    })
  }

  logout(){
    this.accountService.logout();
  }
}
