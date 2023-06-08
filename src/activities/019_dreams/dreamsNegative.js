import { getBool, getRandomElement } from "../../utils";
import { getPerson, getPeople } from '../../database/peopleData'
import { getRandomVerb } from "../../database/verbData";

const getQuestion = () => {
    const isMale = getBool()
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const verb = getRandomVerb()
    const object = getRandomElement(verb.objects)

    const prompt = `${subject.firstName} would ${verb.infinitive} ${object}, if possible.`
    const answer = `${subject.firstName} wouldn't ${verb.infinitive} ${object}, if possible.`

    return { prompt, answer }
}

export default getQuestion