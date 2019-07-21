import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  sliderImages: Array<string>;
  imagePath: string;
  imageId: number;
  constructor() { 
    this.sliderImages = new Array<string>();
    for (let index = 0; index < 10; index++) {
      this.sliderImages.push(`https://picsum.photos/1920/400?image=${index}`);
    }
    this.imageId = 0;
    this.changeImage();
  }

  ngOnInit() {
  }

  nextImage(){
    this.imageId = this.imageId + 1;
    if (this.imageId === this.sliderImages.length){
      this.imageId = 0;
    }
    this.changeImage();
  }

  prevImage(){
    this.imageId = this.imageId - 1;
    if (this.imageId === -1){
      this.imageId = this.sliderImages.length - 1;
    }
    this.changeImage();
  }

  private changeImage(){
    this.imagePath = this.sliderImages[this.imageId];
  }
}
