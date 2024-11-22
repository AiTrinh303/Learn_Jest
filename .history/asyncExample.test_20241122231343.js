const fetchDataOverApi = require('./fetchData');

test('the user data for user 1', async() => {
    const data = await fetchDataOverApi();
    expect(data).toBe('AiTrinh');
})