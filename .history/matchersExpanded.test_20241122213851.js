
describe('example toMatch test', () => {
    test('Munich is in Germany', () => {
        expect('Munich').toMatch(/Germany/);
    });