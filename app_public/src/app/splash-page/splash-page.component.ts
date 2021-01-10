import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.css']
})
export class SplashPageComponent implements OnInit {

  public title: String = 'funguy';

  constructor() { }

  ngOnInit(): void {
  }

}
