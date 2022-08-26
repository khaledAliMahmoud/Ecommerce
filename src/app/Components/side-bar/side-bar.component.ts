import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  categories:any;

  constructor(private _ApiServiceService:ApiServiceService) { }

  ngOnInit(): void {

    this._ApiServiceService.getCategories().subscribe((res)=>{
      this.categories = res
    })

  }

  useCategory(producyType:any){
    this._ApiServiceService.category= producyType;
    this._ApiServiceService.loadProducts()
  }

}
