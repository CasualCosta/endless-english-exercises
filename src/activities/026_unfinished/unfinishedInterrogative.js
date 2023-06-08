import { getBool, getRandomElement } from "../../utils";
import { getPerson, getPeople } from '../../database/peopleData'
import { getRandomVerb } from "../../database/verbData";

const getQuestion = () => {
    const isMale = getBool()
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const verb = getRandomVerb()
    const object = getRandomElement(verb.objects)

    const prompt = `${isPlural ? "Are" : "Is"} ${subject.firstName} ${verb.gerund} ${object}.`
    const answer = `${isPlural ? "Were" : "Was"} ${subject.firstName} ${verb.gerund} ${object}?`

    return { prompt, answer }
}

export default getQuestion