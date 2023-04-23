import { getRandomVerb } from "../../database/verbData";
import { getPerson, getPeople } from "../../database/peopleData";
import { getBool, getRandomElement } from "../../utils";

const getQuestion = () => {
    const isMale = getBool()
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const aux = isPlural ? "Do" : "Does"
    const verb = getRandomVerb()
    const object = getRandomElement(verb.objects)
    const time = `${Math.floor((Math.random() * 8) + 2)}${getBool() ? 'am' : 'pm'}`

    const prompt = `${subject.firstName} ${isPlural ? verb.infinitive : verb.thirdPerson} ${object} at ${time}.`
    const answer = `${aux} ${subject.firstName} ${verb.infinitive} ${object} at ${time}?`

    return { prompt, answer }
}

export default getQuestion