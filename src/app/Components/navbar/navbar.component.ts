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
  categories:any;
  CategoryName:string = 'All categories';

  constructor(public _ApiServiceService:ApiServiceService) { }

  ngOnInit(): void {
    this._ApiServiceService.getCategories().subscribe((res)=>{
      this.categories = res
  });
  }
  ListBtn():void{
    this.showList = !this.showList
  }

  searchingResult(){
    this._ApiServiceService.searchResult.next(this.searching);

  }

  useCategory(producyType:any){
    this._ApiServiceService.category= producyType;
    if(producyType == ''){
      this.CategoryName = 'All categories'
    }else{
      this.CategoryName = producyType
    }
    this._ApiServiceService.counter = 0
    this._ApiServiceService.loadProducts()
  }

}
