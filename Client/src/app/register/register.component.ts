import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  model : any = {};
  @Output() cancelRegisterMode = new EventEmitter();
  
  ngOnInit(): void {
  }

  constructor(private accountService : AccountService){
  }

  register(){
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => console.log(error)
    })
  }

  cancel(){
    console.log("Cancelled");
    this.cancelRegisterMode.emit(false);
  }

}
