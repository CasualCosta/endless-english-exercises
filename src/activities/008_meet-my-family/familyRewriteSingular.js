import { getBool, getRandomElement } from "../../utils";
import { getPerson } from "../../database/peopleData";
import { relatives } from "../../database/relativesData";

const getQuestion = () => {
    const isMale = getBool()
    const isMaleTwo = getBool()
    const subject = getPerson(isMale).firstName
    const object = getPerson(isMaleTwo).firstName
    const relation = isMaleTwo ? getRandomElement(relatives).male : getRandomElement(relatives).female

    const prompt = `${subject}: ${object} is my ${relation}.`
    const answer = `${object} is ${subject}'s ${relation}.`

    return { prompt, answer }
}

export default getQuestion