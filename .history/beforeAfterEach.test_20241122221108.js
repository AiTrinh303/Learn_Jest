const { default: test } = require("node:test");

const setupFirst = () => console.log('Setting up before tests run');

describe('new account creations checks', () => {
    beforeEach(()=> setupFirst());

    test('new account 1 created', () => {
        const account = 'account1';
        expect(account).toEqual('account1');
    });

    
});