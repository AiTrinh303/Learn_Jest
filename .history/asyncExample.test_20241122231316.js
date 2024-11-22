const fetchDataOverApi = require('./fetchData');

test('the user data for user 1', asy() => {
    const data = fetchDataOverApi();
    expect(data).toBe('AiTrinh');
})