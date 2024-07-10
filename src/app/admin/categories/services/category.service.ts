import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

constructor(private _HttpClient:HttpClient) { }

getAllCategories(size:number, number:number):Observable<any>{
  return this._HttpClient.get('Category', {params: {pageSize: size, pageNumber: number}});
}

onAddCategory(itemName:string):Observable<any>{
  return this._HttpClient.post('Category', {name: itemName})
}

onEditCategory(categoryId:number, itemName: string):Observable<any>{
  return this._HttpClient.put(`Category/${categoryId}`, {name: itemName})
}

onDeleteCategory(categoryId:number):Observable<any>{
  return this._HttpClient.delete(`Category/${categoryId}`)
}

}
