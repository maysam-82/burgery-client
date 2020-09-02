import { IIngredients } from '../../types/ingredients';

export const getIngredients = (ingredients: IIngredients): string[] => {
    let transformedIngredients: string[] = [];
    for (const ingredientKey in ingredients) {
        for (let index = 0; index < ingredients[ingredientKey]; index++) {
            transformedIngredients.push(ingredientKey);
        }
    }
    return transformedIngredients;
};
