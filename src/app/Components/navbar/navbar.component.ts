import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showList:boolean = false;
  searching:string = '' ;


  constructor(public _ApiServiceService:ApiServiceService) { }

  ngOnInit(): void {

  }

  ListBtn():void{
    this.showList = !this.showList
  }

  searchingResult(){
    this._ApiServiceService.searchResult.next(this.searching);
    console.log(this._ApiServiceService.searchResult.getValue());

  }

}
