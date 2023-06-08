import { getBool, getRandomElement } from "../../utils";
import { getPerson, getPeople } from '../../database/peopleData'
import { feelings } from "../../database/feelingsData";

const getQuestion = () => {
    const isMale = getBool()
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const feeling = getRandomElement(feelings)

    const prompt = `${subject.firstName} ${isPlural ? "aren't" : "isn't"} ${feeling} today.`
    const answer = `${subject.firstName} ${isPlural ? "weren't" : "wasn't"} ${feeling} yesterday.`

    return { prompt, answer }
}

export default getQuestion