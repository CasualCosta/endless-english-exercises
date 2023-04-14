import { getPerson, getPeople } from "../../database/peopleData";
import { getRandomElement } from "../../utils";

const getQuestion = () => {
    const isMale = Math.floor(Math.random() * 2)
    const person = getPerson(isMale).firstName
    const people = getPeople().firstName
    const adjectives = ['interesting', 'impressive', 'exciting', 'excited', 'experienced', 'inexperienced', 'honest', 'awesome', 'artistic', 'authentic', 'expressive', 'easy-going', 'efficient', 'exemplary', 'introverted', 'obedient', 'odd']
    const adjective = getRandomElement(adjectives)

    const prompt = `${person} is an ${adjective} person. / ${people}`
    const answer = `${people} are ${adjective} people.`

    return { prompt, answer }
}

export default getQuestion;