import { Component, OnInit } from '@angular/core';
import { CategoriesService} from '../servicio/categories.service';
import {FormControl} from '@angular/forms';
import {  Categorie } from '../servicio/categorie';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  name: FormControl = new FormControl('')
  amount: FormControl = new FormControl(0)
  categories:  Categorie[] = []
  id: FormControl = new FormControl(0)
  category: Categorie = {id:0,name:'',amount:0}

  constructor(public _categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this._categoriesService.getCategories().subscribe( response => {
      return  this.categories = response   
    })
  }

  addCategory():void {
    let name = this.name.value;
    let amount = this.amount.value;
    console.log("Nombre: " + name + " Monto: " + amount + ' ID: ' + this.id.value);
   if(this.id.value === 0){
      this._categoriesService.addCategory(name, amount).subscribe((response) => { 
        console.log(response);
        this.getCategories()
        this.name.setValue("")
        this.amount.setValue(0) })
   } else{
    this._categoriesService.updateCategory(this.id.value,name, amount)
       .subscribe(() => { 
        this.getCategories()
      })
   }
}

deleteCategory(id:Number):void {
  this._categoriesService.deleteCategory(id).subscribe( res => {
    console.log(res)
    this.getCategories()  
  });
}

getCategory(id:Number):void {
  this._categoriesService.getCategory(id).subscribe(response => {
     console.log(response)
     this.getCategories()
  })
  }
  llenar(id:Number, name:string, amount:Number):void {
      this.category.id = id
      this.category.amount = amount
      this.category.name = name
    }

}