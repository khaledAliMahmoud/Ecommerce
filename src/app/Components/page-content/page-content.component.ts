import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';


@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {

  @ViewChild("dialogContentForScroll") dialogContent: ElementRef;
  buyBtn:boolean = false

  constructor(public _ApiServiceService:ApiServiceService) { }

  ngOnInit(): void {
   this._ApiServiceService.loadProducts()
  }

  ngAfterViewInit(): void {

    let dialogElement = this.dialogContent.nativeElement as HTMLElement;
        dialogElement.onscroll = () => {
          this._ApiServiceService.scrollCounter =dialogElement.scrollTop;
          console.log(this._ApiServiceService.scrollCounter);

          if(dialogElement.scrollTop > 700 && dialogElement.scrollTop < 1200){
            this._ApiServiceService.defaultNum = 20;
            this.ngOnInit()
          } else if(dialogElement.scrollTop > 1600){
            this._ApiServiceService.defaultNum = 30;
            this.ngOnInit()
          }
        }

  }

  pressBuyBtn(action){
    this.buyBtn = !this.buyBtn;
    this._ApiServiceService.counterAction(action)
  }


}
