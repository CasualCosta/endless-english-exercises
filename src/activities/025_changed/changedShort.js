import { getBool, getRandomElement } from "../../utils";
import { getPerson, getPeople } from '../../database/peopleData'
import { feelings } from "../../database/feelingsData";

const getQuestion = () => {
    const isMale = getBool()
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const feeling = getRandomElement(feelings)
    const isAffirmative = getBool()

    const prompt = `${isPlural ? "Were" : "Was"} ${subject.firstName} ${feeling} yesterday?`
    const answer = `${isAffirmative ? "Yes" : "No"}, ${subject.subjectivePronoun} is${isAffirmative ? "" : "n't"}.`

    return { prompt, answer }
}

export default getQuestion