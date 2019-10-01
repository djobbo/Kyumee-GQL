module.exports = {
    connection: (_, { page, perPage, sortType, /*filters*/ }) => {
        console.log('Connection!');
    }
}