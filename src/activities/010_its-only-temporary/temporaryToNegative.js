import { getBool, getRandomElement } from "../../utils"
import { getPerson, getPeople } from "../../database/peopleData"
import { getRandomVerb } from "../../database/verbData"
import { presentContinuousPeriods } from "../../database/timePeriodData"


const getQuestion = () => {
    const isPlural = getBool()
    const isMale = getBool()
    const subject = isPlural ? getPeople().firstName : getPerson(isMale).firstName
    const toBe = isPlural ? "are" : "is"
    const verb = getRandomVerb()
    const object = getRandomElement(verb.objects)
    const period = getRandomElement(presentContinuousPeriods)

    const prompt = `${subject} ${toBe} ${verb.gerund} ${object ? object + ' ' : ' '}${period}.`
    const answer = `${subject} ${toBe}n't ${verb.gerund} ${object ? object + ' ' : ' '}${period}.`

    return { prompt, answer }
}

export default getQuestion