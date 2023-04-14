const maleNames = [
    "Adam",
    "Ashton",
    "Dave",
    "John",
    "Tom",
    "Henry",
    "Mark",
    "Matthew",
    "William",
    "Robert",
    "Carl",
    "Wesley"
]

const femaleNames = [
    "Mary",
    "Susan",
    "Katherine",
    "Olivia",
    "Pamela",
    "Beatrice",
    "Sandra",
    "Diana",
    "Phoebe",
    "Anna",
    "Christine",
    "Lisa",
    "Vanessa"
]

export const getPerson = (isMale) => {
    const type = isMale ? 'male' : 'female';
    const firstName = isMale ? 
    maleNames[Math.floor(Math.random() * maleNames.length)] : 
    femaleNames[Math.floor(Math.random() * femaleNames.length)]; 
    const subjectivePronoun = isMale ? 'he' : 'she';
    const objectivePronoun = isMale ? 'him' : 'her';
    const possessiveAdjective = isMale ? 'his' : 'her';
    const possessivePronoun = isMale ? 'his' : 'hers';
    const reflexivePronoun = isMale ? 'himself' : 'herself';
    return {type, firstName, subjectivePronoun, objectivePronoun, possessiveAdjective,
    possessivePronoun, reflexivePronoun}
}

export const getPeople = () => {
    const people = []
    people.push(getPerson(Math.floor(Math.random() * 2)))
    people.push(getPerson(Math.floor(Math.random() * 2)))
    const type = 'plural';
    const firstName = `${people[0].firstName} and ${people[1].firstName}`
    const subjectivePronoun = 'they';
    const objectivePronoun = 'them';
    const possessiveAdjective = 'their';
    const possessivePronoun = 'theirs';
    const reflexivePronoun = 'themselves';
    return {type, firstName, subjectivePronoun, objectivePronoun, possessiveAdjective,
        possessivePronoun, reflexivePronoun}
}