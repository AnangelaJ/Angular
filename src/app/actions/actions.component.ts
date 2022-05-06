import { Component, OnInit } from '@angular/core';
import { CategoriesService} from '../servicio/categories.service';
import {FormControl} from '@angular/forms';
import {  Categorie } from '../servicio/categorie';

@Component({
  selector: 'app-categories',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  name: FormControl = new FormControl('')
  amount: FormControl = new FormControl(0)
  categories:  Categorie[] = []
  id: FormControl = new FormControl(0)

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
    console.log(this.name.value + ' fdssfdgfdg  ' + this.amount.value)
    let name = this.name.value;
    let amount = this.amount.value;
   if(this.id.value === 0){
      this._categoriesService.addCategory(name, amount).subscribe(response => { 
        console.log(response);
        // document.location='/'; 
      })
   } else{
    this._categoriesService.updateCategory(this.id.value,name, amount)
       .subscribe(() => { 
        this.getCategories()
        // this.id.value=0
        // this.name.setValue("")
        // this.amount.setValue(0) 
      })
   }
}

}