import { getBool, getRandomElement } from "../../utils";
import { getPerson, getPeople } from '../../database/peopleData'
import { getRandomVerb } from "../../database/verbData";

const getQuestion = () => {
    const isMale = getBool()
    const subject = getPerson(isMale)
    const verb = getRandomVerb()
    const object = getRandomElement(verb.objects)

    const isMaleTwo = getBool()
    const subjectTwo = getPerson(isMaleTwo)
    const verbTwo = getRandomVerb()
    const objectTwo = getRandomElement(verbTwo.objects)


    const prompt = `${subject.firstName} / ${verb.infinitive} ${object} / ${subjectTwo.firstName} / ${verbTwo} ${objectTwo}`
    const answer = `${subject.firstName} was ${verb.gerund} ${object} when ${subjectTwo.firstName} ${verbTwo.past} ${objectTwo}.`

    return { prompt, answer }
}

export default getQuestion