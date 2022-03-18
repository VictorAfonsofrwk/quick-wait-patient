import { getRoute, getAddressV2, getPlaces, getDirections } from './mapboxService';

describe("Page test",  () => {
    it("render",  () => {
        getRoute(1,1,1,1)
    })
    it("render 2",  () => {
        getAddressV2("São Paulo")
    })
    it("render 3",  () => {
        getPlaces({lng: 10,lat: 10},10)
    })
    it("render 4", () => {
        getDirections({type:"driving"}, {lng: 10,lat: 10}, {lng: 10,lat: 10})
    })
})