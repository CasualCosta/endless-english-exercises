import { getBool, getRandomElement } from "../../utils";
import { getPerson } from '../../database/peopleData'
import { getRandomVerb } from "../../database/verbData";

const getQuestion = () => {
    const isMale = getBool()
    const subject = getPerson(isMale)
    const verb = getRandomVerb()
    const object = getRandomElement(verb.objects)

    const verbTwo = getRandomVerb()
    const objectTwo = getRandomElement(verbTwo.objects)


    const prompt = `${subject.firstName} / ${verb.past} ${object} / ${verbTwo} ${objectTwo}`
    const answer = `After ${subject.subjectivePronoun} ${verb.past} ${object}, ${subject.firstName} ${verbTwo.past} ${objectTwo}.`

    return { prompt, answer }
}

export default getQuestion