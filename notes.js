/*



******* Here will be notes that will be important references while building your tests *******


- A test structure looks like:

test('title', () => {
    // Arrange

    // Act

    // Assert
});


- Throw logging the submit of your forms 
throw new Error(JSON.stringify({newPost}, null, 2));

- Flush promises 
const flushPromises = () => {
    return new Promise(resolve => {
        setTimeout(resolve, 0);
    });
};





*/
