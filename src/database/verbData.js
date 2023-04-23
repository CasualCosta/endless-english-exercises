import { getRandomElement } from "../utils";

export const regularVerbs = [
    {
        infinitive: 'cook',
        gerund: 'cooking',
        thirdPerson: 'cooks',
        past: 'cooked',
        participle: 'cooked',
        objects: [
            'breakfast',
            'lunch',
            'dinner',
            'pasta',
        ]
    },
    {
        infinitive: 'cry',
        gerund: 'crying',
        thirdPerson: 'cries',
        past: 'cried',
        participle: 'cried',
        objects: [
            'crocodile tears',
            'tears of joy'
        ]
    },
    {
        infinitive: 'dance',
        gerund: 'dancing',
        thirdPerson: 'dances',
        past: 'danced',
        participle: 'danced',
        objects: [
            'salsa',
            'flamenco',
            'samba',
        ]
    },
    {
        infinitive: 'express',
        gerund: 'expressing',
        thirdPerson: 'expresses',
        past: 'expressed',
        participle: 'expressed',
        objects: [
            'an opinion',
            'concerns about the subject',
        ]
    },
    {
        infinitive: 'fry',
        gerund: 'frying',
        thirdPerson: 'fries',
        past: 'fried',
        participle: 'fried',
        objects: [
            'fish',
            'meat',
            'an egg',
        ]
    },
    {
        infinitive: 'listen',
        gerund: 'listening',
        thirdPerson: 'listens',
        past: 'listened',
        participle: 'listened',
        objects: [
            'to Coldplay',
            'to nature',
            'to pop music',
            'to the conversation'
        ]
    },
    {
        infinitive: 'paint',
        gerund: 'painting',
        thirdPerson: 'paints',
        past: 'painted',
        participle: 'painted',
        objects: [
            'a portrait',
            'a wall',
            'a painting'
        ]
    },
    {
        infinitive: 'play',
        gerund: 'playing',
        thirdPerson: 'plays',
        past: 'played',
        participle: 'played',
        objects: [
            'a game',
            'the guitar',
            'the piano',
            'the sax'
        ]
    },
    {
        infinitive: 'start',
        gerund: 'starting',
        thirdPerson: 'starts',
        past: 'started',
        participle: 'started',
        objects: [
            'to exercise',
            'a journey',
            'a project',
            'a business'
        ]
    },
    {
        infinitive: 'study',
        gerund: 'studying',
        thirdPerson: 'studies',
        past: 'studied',
        participle: 'studied',
        objects: [
            'for the test',
            'English',
            'Geography',
            'the subject'
        ]
    },
    {
        infinitive: 'talk',
        gerund: 'talking',
        thirdPerson: 'talks',
        past: 'talked',
        participle: 'talked',
        objects: [
            'to a doctor',
            'to a friend',
            'to me',
            'to the president'
        ]
    },
    {
        infinitive: 'train',
        gerund: 'training',
        thirdPerson: 'trains',
        past: 'trained',
        participle: 'trained',
        objects: [
            'karate',
            'piano',
            'a dog',
            'a kid'
        ]
    },
    {
        infinitive: 'try',
        gerund: 'trying',
        thirdPerson: 'tries',
        past: 'tried',
        participle: 'tried',
        objects: [
            'to sleep',
            'new things',
            'this dish'
        ]
    },
    {
        infinitive: 'walk',
        gerund: 'walking',
        thirdPerson: 'walks',
        past: 'walked',
        participle: 'walked',
        objects: [
            'the dog',
            'to the park',
            'on the beach',
        ]
    },
    {
        infinitive: 'watch',
        gerund: 'watching',
        thirdPerson: 'watches',
        past: 'watched',
        participle: 'watched',
        objects: [
            'TV',
            'a movie',
            'the sunset',
            'a play'
        ]
    },
]

export const irregularVerbs = [
    {
        infinitive: 'begin',
        gerund: 'beginning',
        thirdPerson: 'begins',
        past: 'began',
        participle: 'begun',
        objects: [
            'to study',
            'to understand',
            'a project',
            'an experiment',
            'a task',
            'a speech'
        ]
    },
    {
        infinitive: 'bring',
        gerund: 'bringing',
        thirdPerson: 'brings',
        past: 'brought',
        participle: 'brought',
        objects: [
            'good news',
            'life to the party',
            'a gift',
            'hope'
        ]
    },
    {
        infinitive: 'fly',
        gerund: 'flying',
        thirdPerson: 'flies',
        past: 'flew',
        participle: 'flown',
        objects: [
            'to the moon',
            'to New York',
            'a helicopter'
        ]
    },
    {
        infinitive: 'read',
        gerund: 'reading',
        thirdPerson: 'reads',
        past: 'read',
        participle: 'read',
        objects: [
            'the news',
            'a book',
            'a study',
            'an article',
            'a blog post'
        ]
    },
    {
        infinitive: 'ride',
        gerund: 'riding',
        thirdPerson: 'rides',
        past: 'rode',
        participle: 'ridden',
        objects: [
            'a horse',
            'a bike',
            'a motorcycle'
        ]
    },
    {
        infinitive: 'run',
        gerund: 'running',
        thirdPerson: 'runs',
        past: 'ran',
        participle: 'run',
        objects: [
            'a marathon',
            'a business',
            'home',
            'to the hospital'
        ]
    },
    {
        infinitive: 'swim',
        gerund: 'swimming',
        thirdPerson: 'swims',
        past: 'swam',
        participle: 'swum',
        objects: [
            'in a river',
            'at the Olympics',
            'in a pool',
            'in a lake'
        ]
    },
    {
        infinitive: 'throw',
        gerund: 'throwing',
        thirdPerson: 'throws',
        past: 'threw',
        participle: 'thrown',
        objects: [
            'a party',
            'a ball',
            'a coin',
            'a dart'
        ]
    },
    {
        infinitive: 'write',
        gerund: 'writing',
        thirdPerson: 'writes',
        past: 'wrote',
        participle: 'written',
        objects: [
            'a novel',
            'a letter',
            'a note',
            'a book',
            'a message'
        ]
    }
]

export const getVerb = (verb) => {
    for(let i = 0; i < regularVerbs.length; i++){
        if (verb === regularVerbs[i].infinitive)
            return regularVerbs[i];
    }
    for(let i = 0; i < irregularVerbs.length; i++){
        if (verb === irregularVerbs[i].infinitive)
            return irregularVerbs[i];
    }
    throw new console.error('No match found.');
}

export const getRandomVerb = () => {
    const isRegular = Math.floor(Math.random() * 2) === 0
    if(isRegular)
        return getRandomElement(regularVerbs)
    return getRandomElement(irregularVerbs)
}


    // {
    //     infinitive: '',
    //     thirdPerson: '',
    //     past: '',
    //     participle: ''
    // },