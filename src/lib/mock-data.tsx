export const bikes = [
  {
    id: "b1",
    name: "mtb",
    maxChainDistance: 8000, // totale maximale afstand
    maxRotationDistance: 400, // maximale afstand tot "rewax"
    activityType: ["mtb", "gravel"], // mogelijkheid om ritten meteen te filteren
    activeChainId: "mtb1",
    chains: [
      {
        id: "mtb1",
        name: "Chain 1",
        totalDistance: 2400.75,
        rotationDistance: 345.253,
        rotations: 3,
      },
      {
        id: "mtb2",
        name: "Chain 2",
        totalDistance: 2800.37,
        rotationDistance: 0,
        rotations: 4,
      },
      {
        id: "mtb3",
        name: "Chain 3",
        totalDistance: 2196.23,
        rotationDistance: 0,
        rotations: 3,
      },
    ],
  },
  {
    id: "b2",
    name: "roadbike",
    maxChainDistance: 10000, // totale maximale afstand
    maxRotationDistance: 500, // maximale afstand tot "rewax"
    activityType: ["road", "virtual"], // mogelijkheid om ritten meteen te filteren
    activeChainId: "rb2",
    chains: [
      {
        id: "rb1",
        name: "Chain 1",
        totalDistance: 8746.25,
        rotationDistance: 0,
        rotations: 8,
      },
      {
        id: "rb2",
        name: "Chain 2",
        totalDistance: 8206.734,
        rotationDistance: 457.21,
        rotations: 8,
      },
    ],
  },
];

export const rides = [
  {
    id: 1,
    date: "2026-05-09", // jaar maand dag
    distanceM: 12352,
    bikeId: "b1",
  },
  {
    id: 2,
    date: "2026-05-12",
    distanceM: 44582,
    bikeId: "b2",
  },
  {
    id: 3,
    date: "2026-05-13",
    distanceM: 91857,
    bikeId: "b2",
  },
  {
    id: 4,
    date: "2026-05-15",
    distanceM: 12450,
    bikeId: "b1",
  },
];
