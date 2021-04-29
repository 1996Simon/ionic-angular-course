import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
 private recipes: Recipe[] = [
    {
    id: 'r1',
    title: 'Filet Mignon',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Filet_mignon_wrapped_with_bacon_with_assorted_vegetables.jpg',
    ingredients: ['Tenderloin', 'Small potatoes', 'Salt', 'Pepper', 'Unsalted butter', 'neutral oil']
    },
    {
    id: 'r2',
    title: 'Wagyu Entrecôte A5',
    imageUrl: 'https://www.nicetomeatyou.nl/wp-content/uploads/2019/05/japanse-wagyu-entrecote-a5-steak-4-personen-nice-to-meat.jpg',
    ingredients: ['Wagyu A5 Entrecote', 'Small potatoes', 'Eggs', 'Lemon', 'Spices', 'Unsalted butter', 'Shallots', 'Rainbow Carrots']
    },
    {
    id: 'r3',
    title: 'Cacio e pepe',
    imageUrl: 'https://alchetron.com/cdn/cacio-e-pepe-259bfd4a-fe5c-4d36-bb94-93131e44920-resize-750.jpeg',
    ingredients: ['Spaghetti', 'Unsalted Butter', 'Black Pepper', 'Parmesan Cheese', 'Pecorino Cheese']
    },
    {
    id: 'r4',
    title: 'Spaghetti bolognese',
    imageUrl: 'https://res.cloudinary.com/norgesgruppen/images/c_scale,dpr_auto,f_auto,q_auto:eco,w_1600/m54yfcc8pq399znzcxvg/spaghetti-bolognese-med-oksekraft-og-soltorket-tomat',
    ingredients: ['Spaghetti', 'Unsalted Butter', 'Spices', 'Parmesan Cheese', 'Tomatoes', 'pork minced meat', 'beef minces meat']
    },
    {
    id: 'r5',
    title: 'Steak & fries',
    imageUrl: 'https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/Steak_Frites_V10-700x461.jpg',
    ingredients: ['Flank Steak', 'Butter', 'Spices', 'Potatoes', 'Oil', 'Eggs', 'Lemon', 'Shallots']
    },
    {
    id: 'r6',
    title: 'Pizza Margherita',
    imageUrl: 'https://www.oppskriftskroken.no/wp-content/uploads/2018/10/Pizza-Margaritha.jpg',
    ingredients: ['Flour', 'Yeast', 'Water', 'Oil', 'Spices', 'Mozarella Cheese', 'Tomatoes']
    },
];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
