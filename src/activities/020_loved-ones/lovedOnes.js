import { getBool, getRandomElement } from "../../utils";
import { getPerson, getPeople } from '../../database/peopleData'
import { getRandomVerb } from "../../database/verbData";

const verbs = [
    'love',
    'like',
    'dislike',
    'hate'
]
const getQuestion = () => {
    const maleSub = getBool()
    const pluralSub = getBool()
    const subject = pluralSub ? getPeople() : getPerson(maleSub)

    const maleObj = getBool()
    const pluralObj = getBool()
    const object = pluralObj ? getPeople() : getPerson(maleObj)

    const verb = getRandomElement(verbs) + `${pluralSub ? '' : 's'}`

    const prompt = `${subject.firstName} ${verb} ${object.firstName}.`
    const answer = `${subject.firstName} ${verb} ${object.objectivePronoun}.`

    return { prompt, answer }
}

export default getQuestion