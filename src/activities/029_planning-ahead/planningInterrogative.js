import { getBool, getRandomElement } from "../../utils"
import { getPerson, getPeople } from "../../database/peopleData"
import { getRandomVerb } from "../../database/verbData"
import { daysOfTheWeek } from "../../database/daysOfTheWeekData"

const getQuestion = () => {
    const isPlural = getBool()
    const isMale = getBool()
    const subject = isPlural ? getPeople().firstName : getPerson(isMale).firstName
    const toBe = isPlural ? "Are" : "Is"
    const verb = getRandomVerb()
    const object = getRandomElement(verb.objects)
    const day = getRandomElement(daysOfTheWeek)

    const prompt = `${subject} / ${verb.infinitive}${object ? ' ' + object : ''} / ${day}`
    const answer = `${toBe} ${subject} going to ${verb.infinitive} ${object ? object + ' ' : ''} on ${day}?`

    return { prompt, answer }
}

export default getQuestion