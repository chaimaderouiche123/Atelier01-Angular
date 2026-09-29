import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produits',
  imports: [],
  templateUrl: './produits.component.html',
})
export class ProduitsComponent {
   produits! : string[]; //un tableau de chînes de caractères 

   constructor() { 
    this.produits = ["PC Asus", "Imprimante Epson", "Tablette Samsung"]; 
   } 
}
