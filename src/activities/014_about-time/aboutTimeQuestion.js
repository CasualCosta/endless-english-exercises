import { getRandomVerb } from "../../database/verbData";
import { getPerson, getPeople } from "../../database/peopleData";
import { getBool, getRandomElement } from "../../utils";

const getQuestion = () => {
    const isMale = getBool()
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const aux = isPlural ? "do" : "does"
    const verb = getRandomVerb()
    const object = getRandomElement(verb.objects)
    const time = `${Math.floor((Math.random() * 8) + 2)}${getBool() ? 'am' : 'pm'}`

    const prompt = `${subject.firstName} / ${verb.infinitive} ${object}`
    const answer = `What time ${aux} ${subject.firstName} ${verb.infinitive} ${object}?`

    return { prompt, answer }
}

export default getQuestion