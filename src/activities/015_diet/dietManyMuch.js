import { getBool, getRandomElement } from "../../utils";
import { countableFoodItems, uncountableFoodItems } from "../../database/foodData";

const timePeriods = [
    'week',
    'month',
    'year'
]
const getQuestion = () => {
    const isCountable = getBool()
    const food = getRandomElement(isCountable ? countableFoodItems : uncountableFoodItems)
    const period = getRandomElement(timePeriods)
    

    const prompt = `${food} / ${period}`
    const answer = `How ${isCountable ? 'many' : 'much'} ${food}${isCountable ? 's' : ''} do you eat in a ${period}?`

    return { prompt, answer }
}

export default getQuestion