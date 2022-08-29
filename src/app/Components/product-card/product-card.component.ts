import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() products:any ;
  buyBtn:boolean = false

  constructor(public _ApiServiceService:ApiServiceService) {}

  ngOnInit() {

  }

  pressBuyBtn(action){
    this.buyBtn = !this.buyBtn;
    this._ApiServiceService.counterAction(action)
  }

}
