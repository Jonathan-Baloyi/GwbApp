import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  imageSources: IImage[] = [
    {url: '/assets/images/bg5.jpeg', backgroundSize: '700px'},
    {url: '/assets/images/bg4.jpeg', backgroundSize: '700px'},
    {url: '/assets/images/bg6.jpeg', backgroundSize: '700px'},
    {url: '/assets/images/img2.jpg', backgroundSize: '700px'},
    {url: '/assets/images/img4.jpg', backgroundSize: '700px'},
    {url: '/assets/images/img5.jpg', backgroundSize: '700px'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
