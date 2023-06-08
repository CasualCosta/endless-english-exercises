import { getBool, getRandomElement } from "../../utils";
import { getPerson, getPeople } from '../../database/peopleData'
import { getRandomVerb } from "../../database/verbData";

const getQuestion = () => {
    const isMale = getBool()
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const verb = getRandomVerb()
    const object = getRandomElement(verb.objects)

    const prompt = `If possible, ${subject.firstName} would ${verb.infinitive} ${object}.`
    const answer = `If possible, would ${subject.firstName} ${verb.infinitive} ${object}?`

    return { prompt, answer }
}

export default getQuestion