import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  categoryString=''
  scrollCounter:any = 0;
  category: any;
  defaultNum: any =10;
  products: any;
  searchResult = new BehaviorSubject(null);
  counter:number = 0 ;

  constructor(private _HttpClient:HttpClient) { }

  counterAction(action){
    if(action == 'add'){
      this.counter++;
    }else if(action == 'remove'){
      this.counter--;
    }
  }

  getProducts(productsNum):Observable<any>{
    if(this.category)
    this.categoryString=`/category/${this.category}`
    return this._HttpClient.get(environment.apiLink+ this.categoryString, { params: {limit: productsNum} })
  }

  getCategories():Observable<any>{
    return this._HttpClient.get(environment.categoryLink)
  }

  searchProducts():Observable<any>{
    return this._HttpClient.get(`https://dummyjson.com/products/search?q=${this.searchResult.getValue()}`)
  }

  loadProducts(){

    this.searchResult.subscribe((res)=>{

      if(res == null){

        this.getProducts(this.defaultNum).subscribe((res)=>{
          this.products = res.products
        })

      }else{

        this.searchProducts().subscribe((res)=>{
          this.products = res.products
        })

      }

    })

  }

}
