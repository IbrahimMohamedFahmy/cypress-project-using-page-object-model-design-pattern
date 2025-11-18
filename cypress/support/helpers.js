class helpers
{
    // Data Members

    // Methods
    CompareValues(expected, actual)
    {
        expect(expected).to.be.eq(actual);

    };
};
module.exports = new helpers();