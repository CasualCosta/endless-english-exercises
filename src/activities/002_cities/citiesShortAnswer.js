import cities from "../../database/cityData";
import { getPerson, getPeople } from "../../database/peopleData";
import { capitalizeFirstLetter } from "../../utils";

const getQuestion = () => {
    const isMale = Math.floor(Math.random() * 2) === 0
    const isPlural = Math.floor(Math.random() * 2) === 0
    const isAffirmative = Math.floor(Math.random() * 2) === 0
    let subject;
    if(isPlural)
        subject = getPeople();
    else
        subject = getPerson(isMale);
    const city = cities[Math.floor(Math.random() * cities.length)];
    const prompt = capitalizeFirstLetter(`${isPlural ? "are" : "is"} ${subject.firstName} from ${city}? ${isAffirmative ? '(Affirmative)' : '(Negative)'}`)
    const answer = `${isAffirmative ? "Yes" : "No"}, ${subject.subjectivePronoun} ${isPlural ? 'are' : 'is'}${isAffirmative ? '' : "n't"}.`
    return {prompt, answer}
}

export default getQuestion;