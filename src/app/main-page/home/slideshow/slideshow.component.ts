import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, OnDestroy {
  images: string[] = ["https://www.sarafurniture.info/assets/first.png", "https://www.sarafurniture.info/assets/second.png", "https://www.sarafurniture.info/assets/third.png", "https://www.sarafurniture.info/assets/fourth.png", "https://www.sarafurniture.info/assets/fifth.png","https://www.sarafurniture.info/assets/sixth.png", "https://www.sarafurniture.info/assets/seven.png",];
  slideIndex = 1;
  interval: any;

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    this.showSlides(1);
    this.startAutoSlide(3000);
  }
  ngOnDestroy(): void {
    this.stopAutoSlide(); // Stop auto sliding when component is destroyed
  }

  plusSlides(n: number): void {
    this.showSlides(this.slideIndex += n);
  }

  showSlides(n: number): void {
    let i;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;

    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[this.slideIndex - 1].style.display = "block";
  }

  startAutoSlide(intervalTime: number): void {
    this.interval = setInterval(() => {
      this.plusSlides(1);
    }, intervalTime);
  }

  stopAutoSlide(): void {
    clearInterval(this.interval);
  }
}
