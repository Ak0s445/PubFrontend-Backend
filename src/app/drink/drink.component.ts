import { Component } from '@angular/core';
import { DrinkapiService } from '../shared/drinkapi.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TypeapiService } from '../shared/typeapi.service';
import { PackageapiService } from '../shared/packageapi.service';

@Component({
  selector: 'app-drink',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './drink.component.html',
  styleUrl: './drink.component.css'
})
export class DrinkComponent {

  drinkForm!: any;
  drinks: any;
  types:any;
  packages:any;
  addMode = true;

  constructor(
    private drinkApi: DrinkapiService,
    private typeApi: TypeapiService,
    private packageApi: PackageapiService,
    private build: FormBuilder
  ){}

  ngOnInit() {
    this.getDrinks();
    this.getTypes();
    this.getPackages();
    this.drinkForm = this.build.group({
      id: [''],
      drink: [''],
      amount: [''],
      price: [''],
      type: [''],
      package: ['']
    });
  }

  setMode() {
    this.addMode = true;
  }

  save() {
    console.log('Mentés...')
   if(this.addMode){
    this.createDrink();
   } else{
    this.updateDrink();
   }
  }

  createDrink() {
     this.drinkApi.createDrink$(this.drinkForm.value).subscribe({
      next: (result) => {
        console.log(result);
        this.drinkForm.reset();
        this.getDrinks();
      }
    });
  }

  getDrinks() {
    this.drinkApi.getDrinks$().subscribe({
      next: (result: any) => {
        console.log(result.data);
        this.drinks = result.data;
      },
      error: () => {}
    })
  }

  getTypes() {
    this.typeApi.getTypes$().subscribe({
      next: (result:any) => {
        //console.log( result.data)
        this.types= result.data;
      }
    });
  }

  getPackages() {
    this.packageApi.getPackages$().subscribe({
      next: (result:any) => {
       console.log(result.data)
       this.packages = result.data;
      }
    })
  }

  edit(drink:any) {
    console.log(drink)

    this.drinkForm.value = {
      id: drink.id 
      
    }

    this.addMode=false;


  }

  updateDrink(){
    console.log("Update arnyékeljárás...")
    this.addMode = true;
  }

  delete(id:number){
    this.drinkApi.deleteDrink$(id).subscribe({
      next: (result: any) => {
        console.log(result) 
        this.getDrinks();
      }
    });

  }
}
