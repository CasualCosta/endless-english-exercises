import { getBool, getRandomElement, getRandomNumber } from "../../utils";
import { cardinalNumbers } from "../../database/numbersData";
import { getPerson, getPeople } from '../../database/peopleData'
import { irregularVerbs } from "../../database/verbData";

const periods = [
    "day",
    "week",
    "month",
    "year"
]

const getQuestion = () => {
    const isMale = getBool()
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const number = cardinalNumbers[getRandomNumber(2, 10)]
    const period = getRandomElement(periods)
    const verb = getRandomElement(irregularVerbs)
    const object = getRandomElement(verb.objects)

    const prompt = `When did ${subject.firstName} ${verb.infinitive} ${object}? (${number} ${period})`
    const answer = `${subject.firstName} ${verb.past} ${object} ${number} ${period}s ago.`

    return { prompt, answer }
}

export default getQuestion