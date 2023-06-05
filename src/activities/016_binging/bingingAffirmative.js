import { getPerson, getPeople } from "../../database/peopleData";
import { getBool, getRandomElement } from "../../utils";
import { countableFoodItems, uncountableFoodItems } from "../../database/foodData";


const getQuestion = () => {
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson()

    const isCountable = getBool()
    const food = getRandomElement(isCountable ? countableFoodItems : uncountableFoodItems)

    const prompt = `${subject.firstName} / ${food}${isCountable ? 's' : ''}`
    const answer = `${subject.firstName} eat${isPlural ? '' : 's'} a lot of ${food}${isCountable ? 's' : ''}.`

    return { prompt, answer }
}

export default getQuestion