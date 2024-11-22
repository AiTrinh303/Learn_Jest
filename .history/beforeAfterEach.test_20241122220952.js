const { default: test } = require("node:test");

const setupFirst = () => console.log('Setting up before tests run');

describe('new account creations checks', () => {
    beforeEach(()=> setupFirst());

    test
});