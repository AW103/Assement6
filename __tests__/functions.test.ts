const {shuffleArray} = require('../utils')
const {bots} = require("../data")

describe('shuffleArray should', () => {
    it("should return an array", () => {
        let arr = shuffleArray(bots)
        expect(typeof arr).toEqual("object")
    })
    it("should check that length of return and argument match", () => {
        let results = shuffleArray(bots)
        expect(bots.length).toEqual(results.length)
    })
})

