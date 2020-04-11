const getTest = (id, name, theArray) => {
    let test = {
        id,
        name
    }

    theArray.push(test)
}

const delTest = (id, testArray) => {
    let index = testArray.findIndex(test => test.id === Number(id))
    console.log(index)

    if (index > -1) {
        testArray.splice(index, 1)
    }
}

exports.getTest = getTest
exports.delTest = delTest