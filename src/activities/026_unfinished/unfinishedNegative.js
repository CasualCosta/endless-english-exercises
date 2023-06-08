import { getBool, getRandomElement } from "../../utils";
import { getPerson, getPeople } from '../../database/peopleData'
import { getRandomVerb } from "../../database/verbData";

const getQuestion = () => {
    const isMale = getBool()
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const verb = getRandomVerb()
    const object = getRandomElement(verb.objects)

    const prompt = `${subject.firstName} ${isPlural ? "aren't" : "isn't"} ${verb.gerund} ${object}.`
    const answer = `${subject.firstName} ${isPlural ? "weren't" : "wasn't"} ${verb.gerund} ${object}.`

    return { prompt, answer }
}

export default getQuestion