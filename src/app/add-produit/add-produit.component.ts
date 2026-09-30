import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-produit.component.html',
})
export class AddProduitComponent implements OnInit {
  newProduit = {} as Produit; 

  message!: string; // Ajout du ! pour éviter l'erreur TypeScript "not initialized"

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {}

  addProduit(): void {
    this.produitService.ajouterProduit(this.newProduit);
    
    // Espaces ajoutés autour du nom pour un affichage propre
    this.message = "Produit " + this.newProduit.nomProduit + " ajouté avec succès !";
  }
}