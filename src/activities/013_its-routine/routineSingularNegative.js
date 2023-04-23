import { getRandomDay } from "../../database/daysOfTheWeekData";
import { getRandomVerb } from "../../database/verbData";
import { getPerson, getPeople } from "../../database/peopleData";
import { getBool, getRandomElement } from "../../utils";

const getQuestion = () => {
    const isMale = getBool()
    const subject = getPerson(isMale)
    const verb = getRandomVerb()
    const object = getRandomElement(verb.objects)
    const time = `${Math.floor((Math.random() * 8) + 2)}${getBool() ? 'am' : 'pm'}`

    const prompt = `${subject.firstName} ${verb.thirdPerson} ${object} at ${time}.`
    const answer = `${subject.firstName} doesn't ${verb.infinitive} ${object} at ${time}.`

    return { prompt, answer }
}

export default getQuestion