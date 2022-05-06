import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from './categorie';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  
 URL = "http://localhost:8000/categories";
   
  constructor(private _http :HttpClient) { }

getCategories(): Observable<Categorie[]> {
    return this._http.get<Categorie[]>(this.URL);
}

addCategory(name:string, amount:string): Observable<any>{
    let obj = new FormData()
    obj.append("name",name)
    obj.append("amount", amount)
    return this._http.post(this.URL, obj )
}

deleteCategory(id:Number):Observable<any>{
    return this._http.delete(this.URL+'/'+id)
}

updateCategory(id:Number, name:string, amount:string){
   let obj = new FormData()
   obj.append("id",''+id)
   obj.append("name",name)
   obj.append("amount", amount)
   return this._http.put(this.URL, obj)
}

getCategory(id:Number):Observable<Categorie>{
  return this._http.get<Categorie>(this.URL+'/'+id)
}

}