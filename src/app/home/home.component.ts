import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // imageSources: IImage[] = [
  //   {url: '../assets/images/bg6.png',
  //   backgroundSize: 'cover',
  //   caption: 'For all floor tilling and ceilings'},

  //   {url: '../assets/images/bg9.png',
  //   backgroundSize: 'cover',
  //   caption: 'For all roof tilling, we are here for you. We deliver.'},
  // ];

  /** When Deploying to github or any other hosting environment, Image url's should be as follows */

  imageSources: IImage[] = [
    {url: '../GwbApp/assets/images/bg6.png',
    backgroundSize: 'cover',
    caption: 'For all floor tilling and ceilings'},

    {url: '../GwbApp/assets/images/bg9.png',
    backgroundSize: 'cover',
    caption: 'For all roof tilling, we are here for you. We deliver.'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
