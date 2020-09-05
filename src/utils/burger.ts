import { IIngredients } from '../types/ingredients';

export const getIngredients = (ingredients: IIngredients): string[] => {
    let transformedIngredients: string[] = [];
    for (const ingredientKey in ingredients) {
        for (let index = 0; index < ingredients[ingredientKey]; index++) {
            transformedIngredients.push(ingredientKey);
        }
    }
    return transformedIngredients;
};

// converts ingredients to queryString to pass as query params
export const setQueryString = (
    ingredients: IIngredients,
    totalPrice: number
) => {
    const queryParams = [];
    for (const key in ingredients) {
        queryParams.push(
            encodeURIComponent(key) + '=' + encodeURIComponent(ingredients[key])
        );
    }
    queryParams.push(`totalPrice=${totalPrice}`);
    return queryParams.join('&');
};

// gets query params and converts them into ingredients
export const getQueryParams = (searchString: string) => {
    const query = new URLSearchParams(searchString);
    let ingredients: IIngredients = {
        bacon: 0,
        salad: 0,
        cheese: 0,
        meat: 0,
    };
    let totalPrice = 0;
    for (const param of query.entries()) {
        if (param[0] === 'totalPrice') {
            totalPrice = +param[1];
        } else {
            // ['salad','1']
            ingredients = { ...ingredients, [param[0]]: +param[1] };
        }
    }
    return { ingredients, totalPrice };
};
