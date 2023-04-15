import { getBool, getRandomElement, capitalizeFirstLetter } from "../../utils"
import { getPerson, getPeople } from "../../database/peopleData"
import { getRandomVerb } from "../../database/verbData"
import { presentContinuousPeriods } from "../../database/timePeriodData"


const getQuestion = () => {
    const isPlural = getBool()
    const isMale = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const toBe = isPlural ? "are" : "is"
    const verb = getRandomVerb()
    const period = getRandomElement(presentContinuousPeriods)
    const isAffirmative = getBool()

    const prompt = capitalizeFirstLetter(`${toBe} ${subject.firstName} ${verb.gerund} ${period}? (${isAffirmative ? 'affirmative' : 'negative'})`)
    const answer = `${isAffirmative ? 'Yes' : 'No'}, ${subject.subjectivePronoun} ${toBe}${isAffirmative ? '' : "n't"}.`

    return { prompt, answer }
}

export default getQuestion