import { getBool, getRandomElement, getRandomNumber } from "../../utils";
import { ordinalNumbers } from "../../database/numbersData";
import { getPerson, getPeople } from '../../database/peopleData'
import { regularVerbs } from "../../database/verbData";

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
    const number = ordinalNumbers[getRandomNumber(2, 10)]
    const period = getRandomElement(periods)
    const verb = getRandomElement(regularVerbs)
    const object = getRandomElement(verb.objects)

    const prompt = `${subject.firstName} ${verb.past} ${object} ${number} ${period}s ago.`
    const answer = `Did ${subject.firstName} ${verb.infinitive} ${object} ${number} ${period}s ago?`

    return { prompt, answer }
}

export default getQuestion