import { occupations } from "../../database/occupationsData"
import { getRandomElement, getBool, getArticle } from "../../utils"
import { getPerson, getPeople } from "../../database/peopleData"

const getQuestion = () => {
    const isPlural = getBool();
    const subject = isPlural ? getPeople() : getPerson();
    const occupation = getRandomElement(occupations)
    const article = isPlural ? '' : getArticle(occupation) + ' ';
    const prompt = `${subject.firstName} / ${occupation}`
    const answer = `${subject.firstName} ${isPlural ? 'are' : 'is'} ${article}${occupation}${isPlural ? 's' : ''}.`

    return { prompt, answer }
}

export default getQuestion