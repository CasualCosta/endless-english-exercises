import { getBool, getRandomElement } from "../../utils";
import { getPerson, getPeople } from "../../database/peopleData";
import { relatives } from "../../database/relativesData";

const getQuestion = () => {
    const isMaleTwo = getBool()
    const subject = getPeople().firstName
    const object = getPerson(isMaleTwo).firstName
    const relation = isMaleTwo ? getRandomElement(relatives).male : getRandomElement(relatives).female

    const prompt = `${subject}: ${object} is our ${relation}.`
    const answer = `${object} is ${subject}'s ${relation}.`

    return { prompt, answer }
}

export default getQuestion