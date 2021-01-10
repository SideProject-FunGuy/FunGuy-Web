import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-onboarding1',
  templateUrl: './onboarding1.component.html',
  styleUrls: ['./onboarding1.component.css']
})
export class Onboarding1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    },
    nav: false
  }

  slidesStore = [
    {
      id:"One",
      src:'../../assets/images/onboarding1.png',
      logo: '../../assets/images/logo.png',
      text:'Time to take total control over your fridge.'
    },
    {
      id:"Two",
      src:'../../assets/images/onboarding2.png',
      logo: '../../assets/images/logo.png',
      text:'Track your food waste.'
    },
    {
      id:"Three",
      src:'../../assets/images/onboarding3.png',
      logo: '../../assets/images/logo.png',
      text:'Know when your ingredients expire.'
    }
  ]


}
