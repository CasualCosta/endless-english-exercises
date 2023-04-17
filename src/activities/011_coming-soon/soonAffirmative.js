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

    const prompt = `${subject.firstName} / ${verb.infinitive}${object} ${period}`
    const answer = `${subject.firstName} will ${verb.infinitive}${object} ${period}.`

    return { prompt, answer }
}

export default getQuestion