import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private _HttpClient:HttpClient) { }

  getAllRecipes(myParams:any):Observable<any>{
    return this._HttpClient.get('Recipe', {params: myParams});
  }

  getRecipeById(id:number):Observable<any>{
    return this._HttpClient.get(`Recipe/${id}`)
  }

  onAddRecipe(data: FormData):Observable<any>{
    return this._HttpClient.post('Recipe', data)
  }

  onEditRecipe(recipeId:number, recipeData: FormData):Observable<any>{
    return this._HttpClient.put(`Recipe/${recipeId}`, recipeData)
  }

  onDeleteRecipe(recipeId:number):Observable<any>{
    return this._HttpClient.delete(`Recipe/${recipeId}`)
  }

  getAllTags():Observable<any>{
    return this._HttpClient.get('tag');
  }
}
