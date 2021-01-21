import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnInit {
  value: number = 0;
  @Input('label') label: string;
  @Input('min') min: number;
  @Input('max') max: number;
  @Input('showrange') showrange: boolean;
  minValue:string;
  maxValue:string;

  constructor() { }

  ngOnInit() {
    this.minValue = this.thousandSeperator(this.min);
    this.maxValue = this.thousandSeperator(this.max);
  }
  
  showVal(event){
    this.value =this.thousandSeperator(event.target.value);    
  }

  thousandSeperator(value){
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
