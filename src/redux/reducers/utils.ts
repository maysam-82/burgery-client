import { getIngredients } from '../../utils/burger';
import { IIngredients } from '../../types/ingredients';
import { ingredientsPrices } from '../../fixtures/ingredients';

interface IIngredientsOutput {
    ingredients: IIngredients;
    totalPrice: number;
    purchasable: boolean;
}

export const updateIngredientsState = (
    oldIngredients: IIngredients,
    oldTotalPrice: number,
    isIncreased: boolean,
    ingredientType: string
): IIngredientsOutput => {
    if (isIncreased) {
        const ingredients = {
            ...oldIngredients,
            [ingredientType]: oldIngredients[ingredientType] + 1,
        };
        const totalPrice = oldTotalPrice + ingredientsPrices[ingredientType];
        const purchasable = checkPurchasable(ingredients);
        return { ingredients, totalPrice, purchasable };
    } else {
        const isAmountValid = checkAmountValidation(
            oldIngredients[ingredientType]
        );
        const ingredients = {
            ...oldIngredients,
            [ingredientType]: isAmountValid
                ? oldIngredients[ingredientType] - 1
                : oldIngredients[ingredientType],
        };
        const totalPrice = isAmountValid
            ? oldTotalPrice - ingredientsPrices[ingredientType]
            : oldTotalPrice;
        const purchasable = checkPurchasable(ingredients);

        return { ingredients, totalPrice, purchasable };
    }
};

// Check if order can be made.
const checkPurchasable = (ingredients: IIngredients): boolean => {
    if (ingredients) {
        return getIngredients(ingredients).length > 0;
    }
    return false;
};

// Check if ingredient amount will be less than zero by subtracting 1.
const checkAmountValidation = (ingredientAmount: number): boolean => {
    return ingredientAmount - 1 >= 0;
};
