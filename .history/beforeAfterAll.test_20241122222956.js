const setup = () => console.log('Setting up before tests run');

const tearDow = () => console.log('Finish up after tests run');


describe('new account creations checks', () => {
    beforeAll(()=> setup());

    afterAll(() => tearDow());

    test('new account 1 created', () => {
        const account = 'account1';
        expect(account).toEqual('account1');
    });

    test('new account 2 created', () => {
        const account = 'account2';
        expect(account).toEqual('account2');
    });
}