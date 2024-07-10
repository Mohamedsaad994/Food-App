import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/admin/categories/services/category.service';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addeditrecipe',
  templateUrl: './addeditrecipe.component.html',
  styleUrls: ['./addeditrecipe.component.scss']
})
export class
AddeditrecipeComponent implements OnInit{


  tagsList:any [] = []
  categoriesList:any [] = []

  recipesList:any [] = []
  baseImg:any = 'https://upskilling-egypt.com:3006/'
  imgSrc:any;
  tageId:any;
  cateId:any;
  pageNumber: number = 1
  pageSize = 10;
  recipeId:number = 0
  oneRecipeData:any ;

  url:string = ''
  heading: string = ''


  // image!:any;
  constructor(private _CategoryService:CategoryService, private _RecipeService:RecipeService,
    private _ActivatedRoute:ActivatedRoute, private _ToastrService:ToastrService,
  private _Router:Router){}


  ngOnInit(): void {
    this.getAllCategories()
    this.getAllTags()
    this.recipeId = this._ActivatedRoute.snapshot.params['id']
    if(this.recipeId){
      this.heading = 'Update Your Recipe'
      this.getOneRecipe()
    }else{
      this.heading = 'Add New Recipe'
    }
  }

  getAllCategories():void{
    this._CategoryService.getAllCategories(1000, 1).subscribe({
      next: (res) =>{
        this.categoriesList = res.data
      }
    })
  }

  getAllTags():void{
    this._RecipeService.getAllTags().subscribe({
      next: (res)=>{
        this.tagsList = res
      }
    })
  }

  async fetchImage(url: string) {
    var res = await fetch(url);
    var blob = await res.blob();
    this.imgSrc = blob;
  };

  getOneRecipe():void{
    this._RecipeService.getRecipeById(this.recipeId).subscribe({
      next: (res)=>{
        console.log(res);
        this.oneRecipeData = res
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        this.url = `${this.baseImg}${this.oneRecipeData.imagePath}`
        // this.image = `${this.baseImg}${this.oneRecipeData.imagePath}`
        // console.log(this.imgSrc);

        // this.onAddImage(event)


        this.fetchImage(this.url)
        this.recipeForm.patchValue({
          name:this.oneRecipeData.name,
          description: this.oneRecipeData.description,
          price: this.oneRecipeData.price,
          tagId: this.oneRecipeData.tag.id,
          // recipeImage:this.imgSrc,
          recipeImage:this.oneRecipeData.imagePath,
          categoriesIds: this.oneRecipeData.category.map((value:any) => value.id)
        })
        // console.log(this.imgSrc);
        // this.files.push(url)
        // console.log(this.files);

        // this.imgSrc = this.files[0]
        // console.log(this.files[0]);

      }
    })
  }

  recipeForm:FormGroup = new FormGroup({
    name : new FormControl('', [Validators.required]),
    description : new FormControl('', [Validators.required]),
    price  : new FormControl('', [Validators.required]),
    tagId  : new FormControl('', [Validators.required]),
    recipeImage: new FormControl(''),
    categoriesIds : new FormControl(''),
  })

  sendRecipeForm():void{
    let myData = new FormData()

    myData.append('name', this.recipeForm.value.name)
    myData.append('description', this.recipeForm.value.description)
    myData.append('price', this.recipeForm.value.price)
    myData.append('tagId', this.recipeForm.value.tagId)
    myData.append('recipeImage', this.imgSrc)
    myData.append('categoriesIds', this.recipeForm.value.categoriesIds)

    if(this.recipeId){
      this._RecipeService.onEditRecipe(this.recipeId, myData).subscribe({
        next: (res) =>{
          console.log('editRecipe',res);
          this._ToastrService.success('Recipe is Updated Successfully')
        },error:(err)=>{
          console.log(err);
          this._ToastrService.error(err.error.message)
        },
        complete:()=>{
          this._Router.navigate(['./dashboard/admin/recipes'])
        }
      })
    }else{
      this._RecipeService.onAddRecipe(myData).subscribe({
        next:(res)=>{
          console.log('addRecipe',res);
          this._ToastrService.success(res.message)
        },error:(err)=>{
          console.log(err);
          this._ToastrService.error(err.error.message)
        },
        complete:()=>{
          this._Router.navigate(['./dashboard/admin/recipes'])
        }
      })
    }
  }



  files: any[] = [];

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.imgSrc = this.files[0]
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


  // onAddImage(event: any) {
  //   const reader = new FileReader();
  //   if(event.target.files && event.target.files.length) {
  //     const [file] = event.target.files;
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.imgSrc = reader.result as string;
  //       this.recipeForm.patchValue({
  //         fileSource: reader.result
  //       });
  //     };
  //   }
  // }


}
