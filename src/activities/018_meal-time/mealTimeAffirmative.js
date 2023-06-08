import { getBool, getRandomElement, getRandomNumber, getArticle } from "../../utils";
import { getPerson, getPeople } from '../../database/peopleData'
import { appetizers, mainCourses, sideDishes, desserts, drinks } from "../../database/mealsData";

const getQuestion = () => {
    const isMale = getBool()
    const isPlural = getBool()
    const subject = isPlural ? getPeople() : getPerson(isMale)
    const number = getRandomNumber(0, 5)
    const verb = number === 4 ? "drink" : "eat"
    const meals = [appetizers, mainCourses, sideDishes, desserts, drinks]
    const meal = getRandomElement(meals[number])
    const quantifier = meal.countable ? getArticle(meal.name) : "some"

    const prompt = `${subject.firstName} / ${meal.name}`
    const answer = `${subject.firstName} would like to ${verb} ${quantifier} ${meal.name}.`

    return { prompt, answer }
}

export default getQuestion