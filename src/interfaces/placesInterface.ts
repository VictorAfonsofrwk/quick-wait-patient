export interface IFeature {
    id: string,
    bbox: []
    center: []
    context: []
    geometry: {
        type: string,
        coordinates: [
            number,
            number,
        ],
    }
    place_name: string
    properties: {}
    relevance: number
    text: string
    type: string
}
