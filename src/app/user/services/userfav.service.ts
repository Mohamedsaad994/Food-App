import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserfavService {

constructor(private _HttpClient:HttpClient) { }

  addToFavList(id:number):Observable<any>{
    return this._HttpClient.post('userRecipe/', {recipeId: id})
  }

  getAllFavList(size:number, number: number):Observable<any>{
    return this._HttpClient.get('userRecipe',{params: {pageSize: size, pageNumber: number}})
  }

  deleteFromFav(id:number):Observable<any>{
    return this._HttpClient.delete(`userRecipe/${id}`)
  }
}
