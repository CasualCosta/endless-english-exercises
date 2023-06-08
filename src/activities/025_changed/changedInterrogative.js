import { getBool, getRandomElement } from "../../utils";
import { getPerson, getPeople } from '../../database/peopleData'
import { feelings } from "../../database/feelingsData";

const getQuestion = () => {
    const isMale = getBool()
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const feeling = getRandomElement(feelings)

    const prompt = `${isPlural ? "Are" : "Is"} ${subject.firstName} ${feeling} today?`
    const answer = `${isPlural ? "Were" : "Was"} ${subject.firstName} ${feeling} yesterday?`

    return { prompt, answer }
}

export default getQuestion