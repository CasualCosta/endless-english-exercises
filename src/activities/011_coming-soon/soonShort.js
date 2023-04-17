import { vagueFuturePeriods } from "../../database/timePeriodData";
import { getRandomVerb } from "../../database/verbData";
import { getPerson, getPeople } from "../../database/peopleData";
import { getBool, getRandomElement } from "../../utils"

const getQuestion = () => {
    const isPlural = getBool()
    const isMale = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const verb = getRandomVerb()
    const object = verb.objects ? ' ' + getRandomElement(verb.objects) : ''
    const period = getRandomElement(vagueFuturePeriods)

    const isAffirmative = getBool()

    const prompt = `Will ${subject.firstName} ${verb.infinitive}${object} ${period}? (${isAffirmative ? 'affirmative' : 'negative'})`
    const answer = `${isAffirmative ? 'Yes' : 'No'}, ${subject.subjectivePronoun} ${isAffirmative ? 'will' : "won't"}.`

    return { prompt, answer }
}

export default getQuestion