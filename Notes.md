## Info van Strava

### Alle info van Strava markeren met "strava"

strava_activity_id
strava_distance_m
strava_activity_date
strava_activity_type
strava_gear_id
strava_latest_update

### Info van tool

user_id
activity_id
created_at
updated_at
bike_id
chain_id
activity_type_override
excluded

---

const bikes = [
{bike1: {
type: mtb,
maxChainDistance: maximale afstand voor elke ketting
maxRotationDistance: maximale afstand voor de wax
activityTypes:
chains: [
{chain1: {
chainId: uniqueId,
chainDistance: waxDistance,
chainLifetime: totalDistance,
rotations: amountOfRotations
}
},
{chain2: {
chainId: uniqueId,
chainDistance: waxDistance,
chainLifetime: totalDistance,
rotations: amountOfRotations
}
},
{chain3: {
chainId: uniqueId,
chainDistance: waxDistance,
chainLifetime: totalDistance,
rotations: amountOfRotations
}
}
]
}}
]
