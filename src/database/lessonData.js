import fromCountry from '../activities/001_my-country/fromCountry'
import isNationality from '../activities/001_my-country/isNationality'
import possessiveCountry from '../activities/001_my-country/possessiveCountry'

import affirmativeToNegative from '../activities/002_cities/affirmativeToNegative'
import affirmativeToInterrogative from '../activities/002_cities/affirmativeToInterrogative'
import citiesShortAnswer from '../activities/002_cities/citiesShortAnswer'

import abilitiesToNegative from '../activities/003_abilities/abilitiesToNegative'
import abilitiesToInterrogative from '../activities/003_abilities/abilitiesToInterrogative'
import abilitiesShortAnswers from '../activities/003_abilities/abilitiesShortAnswers'

import homeAffirmative from '../activities/004_home-sweet-home/homeAffirmative'
import homeNegative from '../activities/004_home-sweet-home/homeNegative'
import homeInterrogative from '../activities/004_home-sweet-home/homeInterrogative'
import homeShort from '../activities/004_home-sweet-home/homeShort'

import occupationsArticle from '../activities/005_what-do-you-do/occupationsArticle'
import occupationsSentence from '../activities/005_what-do-you-do/occupationsSentence'
import occupationsNegative from '../activities/005_what-do-you-do/occupationsNegative'

import stuffS from '../activities/006_so-much-stuff/stuffS'
import stuffEs from '../activities/006_so-much-stuff/stuffEs'
import stuffY from '../activities/006_so-much-stuff/stuffY'
import stuffIrregular from '../activities/006_so-much-stuff/stuffIrregular'

import demonstrativeNear from '../activities/007_where-we-live/demonstrativeNear'
import demonstrativeFar from '../activities/007_where-we-live/demonstrativeFar'
import demonstrativeBoth from '../activities/007_where-we-live/demonstrativeBoth'
import demonstrativeSentence from '../activities/007_where-we-live/demonstrativeSentence'

import familyRewriteSingular from '../activities/008_meet-my-family/familyRewriteSingular'
import familyRewritePlural from '../activities/008_meet-my-family/familyRewritePlural'
import familyWho from '../activities/008_meet-my-family/familyWho'
import familyWhose from '../activities/008_meet-my-family/familyWhose'

import monthsAddAdjective from '../activities/009_who-and-when/monthsAddAdjective'
import weeksToNegative from '../activities/009_who-and-when/weeksToNegative'
import personGender from '../activities/009_who-and-when/personGender'
import personPlural from '../activities/009_who-and-when/personPlural'

import temporaryAffirmative from "../activities/010_its-only-temporary/temporaryAffirmative"
import temporaryToNegative from "../activities/010_its-only-temporary/temporaryToNegative"
import temporaryToInterrogative from "../activities/010_its-only-temporary/temporaryToInterrogative"
import temporaryToShort from "../activities/010_its-only-temporary/temporaryShort"

import soonAffirmative from '../activities/011_coming-soon/soonAffirmative'
import soonToNegative from '../activities/011_coming-soon/soonToNegative'
import soonToInterrogative from '../activities/011_coming-soon/soonToInterrogative'
import soonShort from '../activities/011_coming-soon/soonShort'



const data = [
    {
        title: 'My Country',
        activities: [
            {
                description: 'Put the sentences in the negative form. Follow the example:',
                example:
                {
                    prompt: 'Portugal / John',
                    answer: 'He is from Portugal.'
                },
                getQuestion: fromCountry
            },
            {
                description: 'Write sentences about nationality based on the country and gender.',
                example: {
                    prompt: 'England / Michael',
                    answer: 'He is English.'
                },
                getQuestion: isNationality
            },
            {
                description: 'Write sentences about countries using personal adjectives.',
                example: {
                    prompt: 'Spain / Mario',
                    answer: 'His country is Spain.'
                },
                getQuestion: possessiveCountry
            }
        ]
    },
    {
        title: 'Cities',
        activities: [
            {
                description: 'Re-write the sentence in the negative form. Follow the example:',
                example:
                {
                    prompt: 'John is from Toronto.',
                    answer: "John isn't from Toronto."
                },
                getQuestion: affirmativeToNegative
            },
            {
                description: 'Re-write the sentence in the interrogative form. Follow the example:',
                example:
                {
                    prompt: 'John is from Toronto.',
                    answer: "Is John from Toronto?"
                },
                getQuestion: affirmativeToInterrogative
            },
            {
                description: 'Re-write the sentence in the interrogative form. Follow the example:',
                example:
                {
                    prompt: 'John is from Toronto.',
                    answer: "Is John from Toronto?"
                },
                getQuestion: citiesShortAnswer
            }
        ]
    },
    {
        title: 'Abilities',
        activities: [
            {
                description: 'Re-write the sentences in the negative form. Follow the example:',
                example: 
                {
                    prompt: 'Bob can swim.',
                    answer: `Bob can't swim.`
                },
                getQuestion: abilitiesToNegative
            },
            {
                description: 'Re-write the sentences in the interrogative form. Follow the example:',
                example: 
                {
                    prompt: 'Bob can swim.',
                    answer: 'Can Bob swim?'
                },
                getQuestion: abilitiesToInterrogative
            },
            {
                description: 'Write short answers to the questions. Follow the example:',
                example: 
                {
                    prompt: 'Can Bob swim? / Affirmative',
                    answer: 'Yes, he can.'
                },
                getQuestion: abilitiesShortAnswers
            }
        ]
    },
    {
        title: 'Home, Sweet Home',
        activities: [
            {
                description: 'Complete the sentences about existence in the affirmative form. Follow the example:',
                example: 
                {
                    prompt: 'two lamps in my bedroom.',
                    answer: 'There are'
                },
                getQuestion: homeAffirmative
            },
            {
                description: 'Complete the sentences about existence in the negative form. Follow the example:',
                example: 
                {
                    prompt: 'two lamps in my bedroom.',
                    answer: "There aren't"
                },
                getQuestion: homeNegative
            },
            {
                description: 'Complete the sentences about existence in the interrogative form. Follow the example:',
                example: 
                {
                    prompt: 'two lamps in you bedroom?',
                    answer: 'Are there'
                },
                getQuestion: homeInterrogative
            },
            {
                description: 'Write short answers about existence. Follow the example:',
                example: 
                {
                    prompt: 'Are there two lamps in your bedroom?',
                    answer: 'Yes, there are.'
                },
                getQuestion: homeShort
            }
        ]
    },
    {
        title: 'What do you do?',
        activities: [
            {
                description: 'Complete the sentences with the correct indeterminate article. Follow the example:',
                example: 
                {
                    prompt: 'Michael is __ doctor.',
                    answer: 'a'
                },
                getQuestion: occupationsArticle
            },
            {
                description: 'Write sentences based on the prompts. Follow the example:',
                example: 
                {
                    prompt: 'Michael / doctor',
                    answer: 'Michael is a doctor'
                },
                getQuestion: occupationsSentence
            },
            {
                description: 'Write sentences based on the prompts. Follow the example:',
                example: 
                {
                    prompt: 'Michael / engineer / doctor',
                    answer: 'Michael is an Engineer, he is a doctor.'
                },
                getQuestion: occupationsNegative
            }
        ]
    },
    {
        title: 'So much stuff',
        activities: [
            {
                description: 'Write the plural form of the words given. Follow the example:',
                example: 
                {
                    prompt: 'horse',
                    answer: 'horses'
                },
                getQuestion: stuffS
            },
            {
                description: 'Write the plural form of the words given. Follow the example:',
                example: 
                {
                    prompt: 'pass',
                    answer: 'passes'
                },
                getQuestion: stuffEs
            },
            {
                description: 'Write the plural form of the words given. Follow the example:',
                example: 
                {
                    prompt: 'fly',
                    answer: 'flies'
                },
                getQuestion: stuffY
            },
            {
                description: 'Write the plural form of the words given. Follow the example:',
                example: 
                {
                    prompt: 'child',
                    answer: 'children'
                },
                getQuestion: stuffIrregular
            }
        ]
    },
    {
        title: 'Where we live',
        activities: [
            {
                description: 'Complete the sentences with the correct demonstrative pronoun for proximity. Follow the example:',
                example: 
                {
                    prompt: 'is a hospital.',
                    answer: 'This'
                },
                getQuestion: demonstrativeNear
            },
            {
                description: 'Complete the sentences with the correct demonstrative pronoun for distance. Follow the example:',
                example: 
                {
                    prompt: 'is a hospital.',
                    answer: 'That'
                },
                getQuestion: demonstrativeFar
            },
            {
                description: 'Complete the sentences with the correct demonstrative pronoun. Follow the example:',
                example: 
                {
                    prompt: 'is a hospital. (near)',
                    answer: 'This'
                },
                getQuestion: demonstrativeBoth
            },
            {
                description: 'Write sentences based on the prompt. Follow the example:',
                example: 
                {
                    prompt: 'hospital. (near)',
                    answer: 'This is a hospital.'
                },
                getQuestion: demonstrativeSentence
            }
        ]
    },
    {
        title: 'Meet my family',
        activities: [
            {
                description: 'Re-write the sentences using the genitive case. Follow the example:',
                example: 
                {
                    prompt: 'John: "Michael is my brother."',
                    answer: "Michael is John's brother."
                },
                getQuestion: familyRewriteSingular
            },
            {
                description: 'Re-write the sentences using the genitive case. Follow the example:',
                example: 
                {
                    prompt: 'John and Paul: "Michael is my brother."',
                    answer: "Michael is John and Paul's brother."
                },
                getQuestion: familyRewritePlural
            },
            {
                description: 'Write questions about family. Follow the example:',
                example: 
                {
                    prompt: 'John / Brother',
                    answer: "Who is John's brother?"
                },
                getQuestion: familyWho
            },
            {
                description: 'Write questions about family. Follow the example:',
                example: 
                {
                    prompt: 'John / Brother',
                    answer: "Whose brother is John?"
                },
                getQuestion: familyWhose
            }
        ]
    },
    {
        title: 'Who and When',
        activities: [
            {
                description: 'Re-write the sentence adding the adjective. Follow the example:',
                example: 
                {
                    prompt: 'October is a month. / rainy',
                    answer: 'October is a rainy month.'
                },
                getQuestion: monthsAddAdjective
            },
            {
                description: 'Re-write the sentences in the negative form, adding the adjective. Follow the example:',
                example: 
                {
                    prompt: 'Sunday is a day. / bad',
                    answer: "Sunday isn't a bad day."
                },
                getQuestion: weeksToNegative
            },
            {
                description: 'Re-write the sentences with the different person. Follow the example:',
                example: 
                {
                    prompt: 'John is a good person. Mary',
                    answer: "Mary is a good person."
                },
                getQuestion: personGender
            },
            {
                description: 'Re-write the sentences with the different people. Follow the example:',
                example: 
                {
                    prompt: 'John is a good person. Mary and Josh',
                    answer: "Mary and Josh are good people."
                },
                getQuestion: personPlural
            }
        ]
    },
    {
        title: "It's only temporary",
        activities: [
            {
                description: 'Write a sentence based on the prompt. Follow the example:',
                example: 
                {
                    prompt: 'John / Study',
                    answer: 'John is studying English this year.'
                },
                getQuestion: temporaryAffirmative
            },
            {
                description: 'Re-write the sentences in the negative form. Follow the example:',
                example: 
                {
                    prompt: 'Sunday is a day. / bad',
                    answer: "Sunday isn't a bad day."
                },
                getQuestion: temporaryToNegative
            },
            {
                description: 'Re-write the sentences with the different person. Follow the example:',
                example: 
                {
                    prompt: 'John is a good person. Mary',
                    answer: "Mary is a good person."
                },
                getQuestion: temporaryToInterrogative
            },
            {
                description: 'Re-write the sentences with the different people. Follow the example:',
                example: 
                {
                    prompt: 'John is a good person. Mary and Josh',
                    answer: "Mary and Josh are good people."
                },
                getQuestion: temporaryToShort
            }
        ]
    },
    {
        title: 'Coming soon',
        activities: [
            {
                description: 'Write sentences based on the prompts. Follow the example:',
                example: 
                {
                    prompt: 'Michael / Go to England next year',
                    answer: 'Michael will go to England next year.'
                },
                getQuestion: soonAffirmative
            },
            {
                description: 'Re-write the sentences in the negative form. Follow the example:',
                example: 
                {
                    prompt: 'Michael will go to England next year.',
                    answer: "Michael won't go to England next year."
                },
                getQuestion: soonToNegative
            },
            {
                description: 'Re-write the sentences in the interrogative form. Follow the example:',
                example: 
                {
                    prompt: 'Michael will go to England next year.',
                    answer: 'Will Michael go to England next year?'
                },
                getQuestion: soonToInterrogative
            },
            {
                description: 'Re-write the sentences in the interrogative form. Follow the example:',
                example: 
                {
                    prompt: 'Will Michael go to England next year? (affirmative)',
                    answer: 'Yes, he will.'
                },
                getQuestion: soonShort
            }
        ]
    }
]

export default data;


// {
//     title: ,
//     activities: [
//         {
//             description: '',
//             example: 
//             {
//                 prompt: '',
//                 answer: ''
//             },
//             getQuestion: null
//         }
//     ]
// },