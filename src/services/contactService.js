const contacts = [
    {
        id: 1,
        name: 'julian',
        description: 'el mejor delantero que salio de river este ultmimo tiempo',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Argentina_national_football_team_-_2_-_2022_%28Juli%C3%A1n_%C3%81lvarez%29.jpg',
        lastConnection: '18:23',
        connectionStatus: 'offline',
        messages: [
            {
                emisor: 'YO',
                hora: '15:10',
                id: 1,
                texto: 'Hola juli todo bien',
                status: 'visto'
            },
        ]
    },
    {
        id: 2,
        name: 'messi',
        description: 'el mejor jugador de todos los tiempos',
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSW9IXiear7_oUZmBWVh4AcNTka3XLcAdeJg&s",
        lastConnection: '20:00',
        connectionStatus: 'online',
        messages: [
            {
                emisor: 'YO',
                hora: '18:10',
                id: 1,
                texto: 'contestame por favor yo te amo mucho leo',
                status: 'visto'
            },
            {
                emisor: 'YO',
                hora: '18:11',
                id: 2,
                texto: 'me costo mucho conseguir tu numero',
                status: 'visto'
            }
        ]
    },
    {
        id: 3,
        name: 'enzo',
        description: 'el medicampista que jugo poco en river ',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHk6VpXLiT63VJGkIhR56O4y6Sp0SO7rRdmA&s',
        lastConnection: '15:23',
        connectionStatus: 'offline',
        messages: [
            {
                emisor: 'YO',
                hora: '12:00',
                id: 1,
                texto: 'Hola estoy hablando con enzo fernandez',
                status: 'visto'
            },
            {
                emisor: 'enzo',
                hora: '15:20',
                id: 2,
                texto: 'de donde sacate mi numero?',
                status: 'visto'
            }
        ]
    },
];

export const getContactList = () => {
    return contacts
}

export const getContactById = (contact_id) => {
    for (const contact of contacts) {
        if (Number(contact.id) === Number(contact_id)) {
            return contact
        }
    }
    return null
}