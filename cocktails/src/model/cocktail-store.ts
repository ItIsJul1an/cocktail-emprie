import { Cocktail } from "./cocktail"
import { BehaviorSubject } from "rxjs"

//Singel - Source - Of - Truth
export interface CocktailStore {
    readonly cocktailsArray: Cocktail[]
}
const initialState: CocktailStore = {
    cocktailsArray: []
}

const cocktailStore = new BehaviorSubject<CocktailStore>(initialState);
export default cocktailStore

