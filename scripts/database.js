const database = {
    fish: [
        {
            id: 1,  
            image: `./images/sparkle-gourami.webp`,
            name: `Sparkle Gourami`,
            species: `Trichopsis pumila`,
            length: 2,
            harvestLocation: `Southeast Asia`,
            diet: `small insects`,
        },
        {
            id: 2,  
            image: `./images/electric-blue-acara.webp`,
            name: `Electric Blue Acara`,
            species: `Andinoacara pulcher`,
            length: 6,
            harvestLocation: `South America`,
            diet: `small invertebrates`,
        },
        {
            id: 3,  
            image: `./images/redtail-catfish.webp`,
            name: `Redtail Catfish`,
            species: `Phractocephalus hemioliopterus`,
            length: 5,
            harvestLocation: `South America`,
            diet: `small fish and insects`,
        },
        {
            id: 4,  
            image: `./images/rainbowfish.webp`,
            name: `Rainbowfish`,
            species: `Melanotaenia spp.`,
            length: 4,
            harvestLocation: `Australia`,
            diet: `bloodworms and algae`,
        },
        {
            id: 5,  
            image: `./images/discus.webp`,
            name: `Discus`,
            species: `Symphysodon spp.`,
            length: 8,
            harvestLocation: `South America`,
            diet: `bloodworms and brine shrimp`,
        },
        {
            id: 6,  
            image: `./images/bristlenose-pleco.webp`,
            name: `Bristlenose Pleco`,
            species: `Ancistrus spp.`,
            length: 5,
            harvestLocation: `South America`,
            diet: `algae and biofilm`,
        },
        {
            id: 7,  
            image: `./images/archerfish.webp`,
            name: `Archerfish`,
            species: `Toxotes spp.`,
            length: 11,
            harvestLocation: `Southeast Asia`,
            diet: `small fish and insects`,
        },
        {
            id: 8,  
            image: `./images/clown-loach.webp`,
            name: `Clown Loach`,
            species: `Chromobotia macracanthus`,
            length: 6,
            harvestLocation: `Indonesia`,
            diet: `bloodworms and brine shrimp`,
        },
        {
            id: 9,  
            image: `./images/neon-tetra.webp`,
            name: `Neon Tetra`,
            species: `Paracheirodon innesi`,
            length: 1.5,
            harvestLocation: `Amazon Basin`,
            diet: `bloodworms and brine shrimp`,
        },
        {
            id: 10,  
            image: `./images/corydoras-catfish.webp`,
            name: `Corydoras Catfish`,
            species: `Corydoras spp.`,
            length: 3,
            harvestLocation: `South America`,
            diet: `bloodworms and alae`,
        },
        {
            id: 11,  
            image: `./images/dwarf-gourami.webp`,
            name: `Dwarf Gourami`,
            species: `Trichogaster lalius`,
            length: 2,
            harvestLocation: `Southeast Asia`,
            diet: `brine shrimp and algae`,
        },
        {
            id: 12,  
            image: `./images/siamese-fighting-fish.webp`,
            name: `Siamese Fighting Fish`,
            species: `Betta splendens`,
            length: 3,
            harvestLocation: `Southeast Asia`,
            diet: `small insects`,
        },
        {
            id: 13,  
            image: `./images/tiger-barb.webp`,
            name: `Tiger Barb`,
            species: `Puntigrus tetrazona`,
            length: 2.5,
            harvestLocation: `Southeast Asia`,
            diet: `bloodworms and brine shrimp`,
        },
        {
            id: 14,  
            image: `./images/angelfish.webp`,
            name: `Angelfish`,
            species: `Pterophyllum scalare`,
            length: 6,
            harvestLocation: `South America`,
            diet: `small crustaceans`,
        },
        {
            id: 15,  
            image: `./images/zebra-danio.webp`,
            name: `Zebra Danio`,
            species: `Danio rerio`,
            length: 2,
            harvestLocation: `india`,
            diet: `brine shrimp and algae`,
        }
    ],
    careTips: [
        {
            id: 1,
            tankTip: `schedule regular tank water changes to prevent more serious or long term problems.`,
            waterTip: `regularly test the aquarium water for properly pH levels to insure healthy fish.`,
            filterTip: `regularly service the water filter, have spare filters on hand in case quick changes are needed to prevent complete water replacement.`,
        }
    ]
}


export const getLocations = () => {
    return database.fish.map(harvestLocation => ({...harvestLocation}))
}

export const getCareTips = () => {
    return database.careTips.map(careTips => ({...careTips}))
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

const allFish = getFish()

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish (multiples of 3)
    const holyFish = []

    for ( const eachFish of allFish) {
        if (eachFish.length % 3 === 0) {
            holyFish.push(eachFish)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish (multiples of 5)
    const soldiers = []

    for (const eachFish of allFish) {
        if (eachFish.length % 5 === 0) {
            soldiers.push(eachFish)
        }
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = []

    for (const eachFish of allFish) {
        if (eachFish.length % 3 !== 0 || eachFish.length % 5 !== 0) {
            regularFish.push(eachFish)
        }
    }
    return regularFish
}