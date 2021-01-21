import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  categories: Array<string>
  header: HTMLElement;
  sticky: any;

  constructor() { }

  ngOnInit() {
    this.categories = ['Product', 'Solutions', 'Pricing'];

    window.onscroll = function () {
      this.header = document.getElementById("myHeader");
      this.sticky = this.header.offsetTop;
      if (window.pageYOffset > this.sticky) {
        this.header.classList.add("sticky");
      } else {
        this.header.classList.remove("sticky");
      }
    };

  }
}
