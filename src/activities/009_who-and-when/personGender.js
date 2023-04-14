import { getPerson } from "../../database/peopleData";
import { getRandomElement } from "../../utils";

const getQuestion = () => {
    const isMale = Math.floor(Math.random() * 2)
    const personOne = getPerson(isMale).firstName
    const personTwo = getPerson(!isMale).firstName
    const adjectives = ['funny', 'boring', 'quiet', 'calm', 'stressed', 'nervous', 'sad', 'happy', 'smart', 'talented', 'weird', 'normal', 'regular', 'simple', 'complicated']
    const adjective = getRandomElement(adjectives)

    const prompt = `${personOne} is a ${adjective} person. / ${personTwo}`
    const answer = `${personTwo} is a ${adjective} person.`

    return { prompt, answer }
}

export default getQuestion;