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
    ingredients: ['Tenderloin', 'Small potatoes', 'Eggs', 'Salt', 'Pepper', 'Unsalted butter', 'neutral oil']
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
