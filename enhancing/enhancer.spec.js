//const enhancer = require('./enhancer.js');
const { repair, succeed, fail } = require('./enhancer');

// test away!

describe('testing the repair function', () => {
    describe('testing durability', () => {
        // arrange
        it('updates to 100', () => {
            const equipped = {
                name: 'Zoltan',
                durability: 200,
                enhancement: 20
            }

            const received = {
                name: 'Zoltan',
                durability: 100,
                enhancement: 20
            }
            
            // act
            const itemRepair = repair(equipped)
            
            // assess
            expect(itemRepair).toEqual(received);
            
        })
    })     
})

describe('testing the succeed function', () => {
    describe('testing enhancement unchanged', () => {
        // arrange
        it('remains at 20', () => {
            const enhanceStayed = {
                name: 'Minotaur',
                durability: 50,
                enhancement: 20
            }

            const enhanceResult = {
                name: 'Minotaur',
                durability: 50,
                enhancement: 20
            }
            
            // act
            const itemSucceeded = succeed(enhanceStayed)
            
            // assess
            expect(itemSucceeded).toEqual(enhanceResult);
        })
    })     
})

describe('testing the succeed function', () => {
    describe('testing enhancement update', () => {
        // arrange
        it('increased by 1', () => {
            const enhanceChanged = {
                name: 'Minotaur',
                durability: 50,
                enhancement: 10
            }

            const enhanceResult = {
                name: 'Minotaur',
                durability: 50,
                enhancement: 11
            }
            
            // act
            const itemSucceeded = succeed(enhanceChanged)
            
            // assess
            expect(itemSucceeded).toEqual(enhanceResult);
        })
    })     
})

describe('testing the fail function', () => {
    describe('testing durability update when enhancement < 15', () => {
        // arrange
        it('decreased by 5', () => {
            const durabilityChanged = {
                name: 'Minotaur',
                durability: 50,
                enhancement: 14
            }

            const durabilityResult = {
                name: 'Minotaur',
                durability: 45,
                enhancement: 14
            }
            
            // act
            const itemFailed = fail(durabilityChanged)
            
            // assess
            expect(itemFailed).toEqual(durabilityResult);
        })
    })     
})

describe('testing the fail function', () => {
    describe('testing durability update when enhancement > 15 && < 16', () => {
        // arrange
        it('decreased by 10', () => {
            const durabilityChanged = {
                name: 'Minotaur',
                durability: 50,
                enhancement: 15.5
            }

            const durabilityResult = {
                name: 'Minotaur',
                durability: 40,
                enhancement: 15.5
            }
            
            // act
            const itemFailed = fail(durabilityChanged)
            
            // assess
            expect(itemFailed).toEqual(durabilityResult);
        })
    })     
})

describe('testing the fail function', () => {
    describe('testing enhancement update when enhancement > 16', () => {
        // arrange
        it('decreased by 1', () => {
            const enhancementChanged = {
                name: 'Minotaur',
                durability: 50,
                enhancement: 18
            }

            const enhancementResult = {
                name: 'Minotaur',
                durability: 50,
                enhancement: 17
            }
            
            // act
            const itemFailed = fail(enhancementChanged)
            
            // assess
            expect(itemFailed).toEqual(enhancementResult);
        })
    })     
})
