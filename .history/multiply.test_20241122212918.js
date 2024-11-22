const multiply = require('./multiply');

describe('test multiply positive scenarios', () => {
    test('multiply 3*2 should equal to 6', () => {
        expect(multiply(3, 2)).toBe(6);
    });
    
})

describe ('example toEqual test', () => {
    test('object assignment', () => {
        const data = {one: 1};
        data['two'] = 2;
        // console.log(data);
        expect(data).toEqual({one: 1, two: 2});
    });


});