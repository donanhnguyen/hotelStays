const seededHotels = [
    {
        name: "Tatooine King's Hut",
        planet: "Tatooine",
        description: "A nice desert palace for kings.",
        rooms: [{
            name: "Small Room",
            price: 50,
            unvailableDates: [],
        },
        {
            name: "Medium Room",
            price: 70,
            unvailableDates: [],
        },
        {
            name: "Large Room",
            price: 100,
            unvailableDates: [],
        }],
    },
    {
        name: "Tatooine Medium Hut",
        planet: "Tatooine",
        description: "A quiet modest desert hut.",
        rooms: [
            {
              name: "Small Room",
              price: 50,
              unavailableDates: [],
            },
            {
              name: "Medium Room 1",
              price: 70,
              unavailableDates: [],
            },
            {
              name: "Medium Room 2",
              price: 75,
              unavailableDates: [],
            },
          ],
    },
    {
        name: "Owen Lars Farm House",
        planet: "Tatooine",
        description: "Owen Lars' farm house. This is where Luke Skywalker was raised.",
        rooms: [
            {
              name: "The whole farm house",
              price: 120,
              unavailableDates: [],
            },
          ],
    },
    {
        name: "Hoth Major Base Hotel",
        planet: "Hoth",
        description: "A comfortable, warm, inviting base with outstanding service.",
        rooms: [
            {
              name: "Small Room",
              price: 50,
              unavailableDates: [],
            },
            {
              name: "Medium Room",
              price: 70,
              unavailableDates: [],
            },
            {
              name: "Large Room",
              price: 85,
              unavailableDates: [],
            },
            {
              name: "Super Room",
              price: 120,
              unavailableDates: [],
            },
          ],
    },
    {
        name: "Aurek Base",
        planet: "Hoth",
        description: "A former war base turned snowy getaway.",
        rooms: [
            {
              name: "Small Room",
              price: 50,
              unavailableDates: [],
            },
            {
              name: "Medium Room",
              price: 70,
              unavailableDates: [],
            },
          ],
    },
    {
        name: "Hoth Mini Hut",
        planet: "Hoth",
        description: "A modest snowy hut made for the budget-friendly.",
        rooms: [
            {
              name: "Entire Hut",
              price: 60,
              unavailableDates: [],
            },
          ],
    },
    {
        name: "Hoth Ball Hotel",
        planet: "Hoth",
        description: "A modest snowy hotel made for the budget-friendly.",
        rooms: [{
            name: "Small Room",
            price: 45,
            unvailableDates: [],
        },
        {
            name: "Medium Room",
            price: 65,
            unvailableDates: [],
        },]
    },
    {
        name: "Nar Shaddaa Stronghold",
        planet: "Nar Shaddaa",
        description: "The most poular hotel in Nar Shaddaa.",
        rooms: [
            {
                name: "Small Room",
                price: 50,
                unvailableDates: [],
            },
            {
                name: "Medium Room",
                price: 60,
                unvailableDates: [],
            },
            {
                name: "Loft",
                price: 150,
                unvailableDates: [],
            },
            {
                name: "Penthouse",
                price: 200,
                unvailableDates: [],
            },
        ]
    },
    {
        name: "Nar Shaddaa Sky Condo",
        planet: "Nar Shaddaa",
        description: "Known for it's view and exciting central location.",
        rooms: [
            {
                name: "Entire condo",
                price: 230,
                unvailableDates: [],
            },
        ]
    },
    {
        name: "Coruscant Stronghold",
        planet: "Coruscant",
        description: "The most popular hotel in the galaxy, central location, in the middle of Coruscant's busting nightlife.",
        rooms: [
            {
                name: "Small Room",
                price: 50,
                unvailableDates: [],
            },
            {
                name: "Medium Room",
                price: 60,
                unvailableDates: [],
            },
            {
                name: "Loft",
                price: 150,
                unvailableDates: [],
            },
            {
                name: "Penthouse",
                price: 200,
                unvailableDates: [],
            },
        ]
    },
    {
        name: "Alderaan Stronghold",
        planet: "Alderaan",
        description: "A supreme hotel in the mountains of Alderaan.",
        rooms: [
            {
                name: "Small Room",
                price: 70,
                unvailableDates: [],
            },
            {
                name: "Medium Room",
                price: 90,
                unvailableDates: [],
            },
            {
                name: "Queen's Room",
                price: 120,
                unvailableDates: [],
            },
            {
                name: "King's Room",
                price: 200,
                unvailableDates: [],
            },
        ],
    },
    {
        name: "House Alde",
        planet: "Alderaan",
        description: "Hotel of House Alde, where there is oustanding service.",
        rooms: [
            {
                name: "Small Room",
                price: 75,
                unvailableDates: [],
            },
            {
                name: "Medium Room",
                price: 90,
                unvailableDates: [],
            },
        ],
    },
    {
        name: "Alderaan Royal Palace",
        planet: "Alderaan",
        description: "A super prestine, elegant, yet expensive hotel in the middle of Alderaan.",
        rooms: [
            {
                name: "Royal Basic Room",
                price: 100,
                unvailableDates: [],
            },
            {
                name: "Royal Advanced Room",
                price: 150,
                unvailableDates: [],
            },
            {
                name: "Room of the Royal King",
                price: 200,
                unvailableDates: [],
            },
        ],
    },
    {
        name: "Endor Treehouse Village",
        planet: "Endor",
        description: "Stay with Ewoks who will serve you.",
        rooms: [
            {
                name: "Treehouse 1",
                price: 30,
                unvailableDates: [],
            },
            {
                name: "Treehouse 2",
                price: 30,
                unvailableDates: [],
            },
            {
                name: "Treehouse 3",
                price: 30,
                unvailableDates: [],
            },
        ],
    },
    {
        name: "Endor Imperial Base",
        planet: "Endor",
        description: "Once a base for the Empire, it is now a hotel in the Endor forest.",
        rooms: [
            {
                name: "Imperial room 1",
                price: 30,
                unvailableDates: [],
            },
            {
                name: "Imperial room 2",
                price: 35,
                unvailableDates: [],
            },
            {
                name: "Imperial room 3",
                price: 40,
                unvailableDates: [],
            },
        ],
    },
    {
        name: "Manaan Stronghold",
        planet: "Manaan",
        description: "A beautiful ocean stay with an even more amazing view of the deep blue waters of Manaan.",
        rooms: [
            {
                name: "Basic Ocean room",
                price: 100,
                unavailableDates: [],
            },
            {
                name: "Advanced Ocean room",
                price: 125,
                unavailableDates: [],
            },
            {
                name: "Supreme Ocean loft",
                price: 250,
                unavailableDates: [],
            }
        ]
        
    },
    {
        name: "Manaan Ocean House",
        planet: "Manaan",
        description: "A private ocean getaway.",
        rooms: [
            {
                name: "Entire Ocean-front house",
                price: 350,
                unavailableDates: [],
            }
        ]
    },
    {
        name: "Varykino Villa",
        planet: "Naboo",
        description: "An absolutely beautiful villa originally for wealthy politicians, but now a heavenly getaway for all visitors.",
        rooms: [
            {
                name: "Entire Villa",
                price: 500,
                unavailableDates: [],
            }
        ]
    },
    {
        name: "Wookie Village",
        planet: "Kashyyyk",
        description: "Home to the brave wookies, this is a modest, relaxing, and affordable stay where the wookies will protect you.",
        rooms: [
            {
                name: "Small Hut",
                price: 25,
                unavailableDates: [],
            },
            {
                name: "Medium Hut",
                price: 30,
                unavailableDates: [],
            },
            {
                name: "Large Hut",
                price: 35,
                unavailableDates: [],
            }
        ]
    },
    {
        name: "Coruscant Skyrise Apartment",
        planet: "Coruscant",
        description: "A comforting, budget-friendly apartment with a skyrise view.",
        rooms: [
            {
                name: "Entire Apartment",
                price: 90,
                unavailableDates: [],
            }
        ]
    }

]

export {seededHotels}