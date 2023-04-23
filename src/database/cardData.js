const data = [
    {
        id: 0,
        image: 'https://images.unsplash.com/photo-1557321259-82601a9ebfef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        alt: 'British Flag',
        source: 'Jon Tyson',
        title: 'My Country',
        vocabulary: ['Countries and Nationalities'],
        grammar: ['To Be (Present)', 'Personal Adjectives']
    },
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        alt: 'City',
        source: 'Andrea Cau',
        title: 'Cities',
        vocabulary: ['Cities'],
        grammar: ['To Be (Present)']
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1541753866388-0b3c701627d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        alt: 'Woman painting',
        source: 'Jade Stephens',
        title: 'Abilities',
        vocabulary: ['Skill Verbs'],
        grammar: ['Can (Abilities)']
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        alt: 'A living room',
        source: 'sidekix',
        title: 'Home, Sweet Home',
        vocabulary: ['Furniture', 'Rooms'],
        grammar: ['There + TO BE']
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
        alt: 'Construction worker',
        source: 'Spencer Davis',
        title: 'What do you do?',
        vocabulary: ['Occupations'],
        grammar: ['Articles']
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1465433045946-ba6506ce5a59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        alt: 'Stacks of books',
        source: 'Eli Francis',
        title: 'So much stuff',
        vocabulary: ['Nouns'],
        grammar: ['Plurals']
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        alt: "bird's eye view of a neighborhood",
        source: 'Tom Rumble',
        title: 'Where We Live',
        vocabulary: ['Facilities'],
        grammar: ['Demonstrative Pronouns']
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1542216515-4e6a586c1ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80',
        alt: 'family picture',
        source: 'Annie Spratt',
        title: 'Meet My Family',
        vocabulary: ['Family'],
        grammar: ['Genitive Case']
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1558025137-0b406e9cc169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        alt: 'calendar',
        source: 'Monica Sauro',
        title: 'Who and When',
        vocabulary: ['Months', 'Days of the Week', 'Personality words'],
        grammar: ['Adjectives']
    },
    {
        id: 9,
        image: 'https://images.unsplash.com/photo-1577344718665-3e7c0c1ecf6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
        alt: 'person meditating',
        source: 'Max',
        title: "It's only temporary",
        vocabulary: ['Time Periods'],
        grammar: ['Present Progressive']
    },
    {
        id: 10,
        image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
        alt: 'robot',
        source: 'Possessed Photography',
        title: "Coming soon",
        vocabulary: ['Future time Periods'],
        grammar: ['Future with WILL']
    },
    {
        id: 11,
        image: 'https://images.unsplash.com/photo-1552650272-b8a34e21bc4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        alt: 'woman waking up',
        source: 'bruce mars',
        title: "Again and again",
        vocabulary: ['Adverbs of Frequency'],
        grammar: ['Simple Present: Affirmative Form']
    },
    {
        id: 12,
        image: 'https://images.unsplash.com/photo-1539056276907-dc946d5098c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        alt: 'people eating together',
        source: 'Zach Reiner',
        title: "It's routine",
        vocabulary: ['Telling time'],
        grammar: ['Simple Present: Negative Form']
    },
    {
        id: 13,
        image: 'https://images.unsplash.com/photo-1533749047139-189de3cf06d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
        alt: 'clocks',
        source: 'Jon Tyson',
        title: "About time",
        vocabulary: ['Telling time'],
        grammar: ['Simple Present: Interrogative form']
    }
]

export default data