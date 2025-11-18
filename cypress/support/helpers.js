class helpers
{
    // Data Members

    // Methods
    CompareText(expected, actual)
    {
        expect(expected).to.be.eq(actual);

    };
};
module.exports = new helpers();