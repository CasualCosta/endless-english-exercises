import { getBool, getRandomElement } from "../../utils";
import { getPerson } from "../../database/peopleData";
import { relatives } from "../../database/relativesData";

const getQuestion = () => {
    const isMale = getBool()
    const subject = getPerson(isMale).firstName
    const relation = isMale ? getRandomElement(relatives).male : getRandomElement(relatives).female

    const prompt = `${subject} / ${relation}`
    const answer = `Whose ${relation} is ${subject}?`

    return { prompt, answer }
}

export default getQuestion