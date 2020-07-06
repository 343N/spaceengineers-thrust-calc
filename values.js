// gravities

const gravityOptions = {
    "earth": 1,
    "mars": 0.9,
    "alien": 1.1,
    "moon": 0.25,
    "europa": 0.25,
    "triton": 0.25
}


// weight in KG
// thrust in newtons
// power in watts
// fuel (for hydrogen) is in Litres/s

const smallShipThrusters = {
    largeIon: {
        name: "Large Ion Thruster",
        weight: 721,
        thrust: 172800,
        power: 2400,
        fuel: null,
        imagefile: 'large_ion_thruster.png'
    },
    smallIon: {
        name: "Ion Thruster",
        weight: 121,
        thrust: 172800,
        power: 200,
        fuel: null,
        imagefile: 'ion_thruster.png'
    },
    largeHydrogen: {
        name: "Large Hydrogen Thruster",
        weight: 1222,
        thrust: 480000,
        power: 600,
        fuel: 386,
        imagefile: 'large_hydrogen_thruster.png'
    },
    smallHydrogen: {
        name: "Hydrogen Thruster",
        weight: 334,
        thrust: 98400,
        power: 125,
        fuel: 80,
        imagefile: 'hydrogen_thruster.png'
    },
    largeAtmospheric: {
        name: "Large Atmospheric Thruster",
        weight: 2948,
        thrust: 576000,
        power: 2400,
        fuel: null,
        imagefile: 'large_atmospheric_thruster.png'
    },
    smallAtmospheric: {
        name: "Atmospheric Thruster",
        weight: 699,
        thrust: 96000,
        power: 600,
        fuel: null,
        imagefile: 'atmospheric_thruster.png'
    },
}


const largeShipThrusters = {
    largeIon: {
        name: "Large Ion Thruster",
        weight: 43200,
        thrust: 4320000,
        power: 33600,
        fuel: null,
        imagefile: 'large_ion_thruster.png'
    },
    smallIon: {
        name: "Ion Thruster",
        weight: 4380,
        thrust: 345600,
        power: 3360,
        fuel: null,
        imagefile: 'ion_thruster.png'
    },
    largeHydrogen: {
        name: "Large Hydrogen Thruster",
        weight: 6940,
        thrust: 7200000,
        power: 7500,
        fuel: 4820,
        imagefile: 'large_hydrogen_thruster.png'
    },
    smallHydrogen: {
        name: "Hydrogen Thruster",
        weight: 1420,
        thrust: 1080000,
        power: 1250,
        fuel: 803,
        imagefile: 'hydrogen_thruster.png'
    },
    largeAtmospheric: {
        name: "Large Atmospheric Thruster",
        weight: 32970,
        thrust: 6480000,
        power: 16800,
        fuel: null,
        imagefile: 'large_atmospheric_thruster.png'
    },
    smallAtmospheric: {
        name: "Atmospheric Thruster",
        weight: 4000,
        thrust: 648000,
        power: 2400,
        fuel: null,
        imagefile: 'atmospheric_thruster.png'
    },
}

const largeShipCargo = {
    small: {
        size: 15625
    },
    large: {
        size: 421875
    },
}
const smallShipCargo = {
    small: {
        size: 125
    },
    medium: {
        size: 3375
    },
    large: {
        size: 15625
    },
}