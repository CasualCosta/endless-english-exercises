import { getBool, getRandomElement } from "../../utils";
import { getPerson, getPeople } from '../../database/peopleData'
import { getRandomVerb } from "../../database/verbData";

const getQuestion = () => {
    const isMale = getBool()
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const verb = getRandomVerb()
    const object = getRandomElement(verb.objects)

    const prompt = `${subject.firstName} ${isPlural ? "are" : "is"} ${verb.gerund} ${object}.`
    const answer = `${subject.firstName} ${isPlural ? "were" : "was"} ${verb.gerund} ${object}.`

    return { prompt, answer }
}

export default getQuestion