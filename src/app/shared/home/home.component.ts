import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userName: string | any = localStorage.getItem('userName');

  role: string| any= localStorage.getItem('role')
}
