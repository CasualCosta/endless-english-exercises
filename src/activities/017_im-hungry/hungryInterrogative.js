import { getBool, getRandomElement, getArticle } from "../../utils";
import { countableFoodItems, uncountableFoodItems } from "../../database/foodData";


const getQuestion = () => {
    const isCountable = getBool()
    const isPlural = isCountable ? getBool() : false
    const food = getRandomElement(isCountable ? countableFoodItems : uncountableFoodItems)
    const quantifier = isCountable ? (isPlural ? 'some' : getArticle(food)) : 'some'

    const prompt = `${food}${isPlural ? 's' : ''}`
    const answer = `${isPlural ? 'Are' : 'Is'} there ${quantifier} ${food}${isPlural ? 's' : ''} in the fridge?`

    return { prompt, answer }
}

export default getQuestion