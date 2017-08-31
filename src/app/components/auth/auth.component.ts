import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @ViewChild('loginForm') form:NgForm; /*bedzie po zmienna form dostepny, szukamy cos w templatce loginForm*/
  constructor(public authService: AuthService) {

  }

  ngOnInit() {
  }

  sendForm(loginForm) {
    if (this.form.valid) {
      this.authService.logIn(this.form.value);
    }
    else {
      console.warn('form invlaid');
    }
  }
}
