import { Component, OnInit } from '@angular/core';

export class member {
  name: string;
  email: string;
}

const TEAM: member[] = [
  { name: 'Abe Gupta', email: '' },
  { name: 'Ioana Sandor', email: '' },
  { name: 'Justin Ho', email: '' },
  { name: 'Lucy Huang', email: '' },
  { name: 'Sammy Yoo', email: '' }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  title: string;
  team: member[];

  constructor() { }

  ngOnInit() {
    this.title = 'Iris';
    this.team = TEAM;
  }

}
