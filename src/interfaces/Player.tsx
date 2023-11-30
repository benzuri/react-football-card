export default interface Player {
    id?: number
    name: string
    team?: string
    link?: string
    shirtNumber: number
    foot: string

    imageURL: string,
    age: number,
    height: string,
    marketValue: string,
    club: {
        id: number
        name: string
    },
    placeOfBirth: {
        country: string
    }
}