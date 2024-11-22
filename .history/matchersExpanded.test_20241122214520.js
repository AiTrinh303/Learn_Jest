
describe('example toMatch test', () => {
    test('Munich is in Germany', () => {
        expect('Munich').toMatch(/ich/); 
    });
});

test('null', ()) => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();

}