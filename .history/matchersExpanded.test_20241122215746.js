
describe('example toMatch test', () => {
    test('Munich is in Germany', () => {
        expect('Munich').toMatch(/ich/); 
    });
});

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();    
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

const carsStock = [
    'BMW',
    'Mercedes',
    'Audi',
    'Toyota',
    'Honda',
    'Mazda',
    'Ford',
    'Chevrolet'
]

test('that the car stock list has a Ferrari', () => {
    expect(carsStock).toContain('Ferrari');
}