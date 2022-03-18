import { deleteService, postService, putService } from './generalApiService';

describe("Page test",  () => {
    it("render",  () => {
         deleteService("/", "/")
    })
    it("render",  () => {
         postService("/", "/", {})
    })
    it("render",  () => {
         putService("/", "/", {})
    })
})