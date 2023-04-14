import cities from "../../database/cityData";
import { getPerson, getPeople } from "../../database/peopleData";
import { capitalizeFirstLetter } from "../../utils";

const getQuestion = () => {
    const isMale = Math.floor(Math.random() * 2) === 0
    const isPlural = Math.floor(Math.random() * 2) === 0
    let subject;
    if(isPlural)
        subject = getPeople();
    else
        subject = getPerson(isMale);
    const city = cities[Math.floor(Math.random() * cities.length)];
    const prompt = capitalizeFirstLetter(`${subject.firstName} ${isPlural ? 'are' : 'is'} from ${city}.`)
    const answer = capitalizeFirstLetter(`${isPlural ? "are" : "is"} ${subject.firstName} from ${city}?`)
    return {prompt, answer}
}

export default getQuestion;