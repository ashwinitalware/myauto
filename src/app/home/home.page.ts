import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  categoryJobLists: any = [];
  // slider: any;
  // slideOptions = {
  //   initialSlide: 0,
  //   slidesPerView: 1,
  //   autoplay: true,
  // };


  slider: any;
  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor() { }

  //   slideChanged() {
  //     this.slider.stopAutoplay();
  //   }
  // }

  slideChanged() {
    this.slider.stopAutoplay(); //this code for slide after page change
  }
}

// setTimeout(function () {
//   let activeSlide = document.querySelector('.slide.translate-x-0');
//   activeSlide.classList.remove('translate-x-0');
//   activeSlide.classList.add('-translate-x-full');

//   let nextSlide = activeSlide.nextElementSibling;
//   nextSlide.classList.remove('translate-x-full');
//   nextSlide.classList.add('translate-x-0');
// }, 3000);


