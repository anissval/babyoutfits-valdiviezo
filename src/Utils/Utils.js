export const processDataFromDB = (querySnapshot) => {
    if (querySnapshot.size === 0) {
        console.log('Sin resultados');
    } else {
        const productsWithID = querySnapshot.docs.map((doc) => {
            const id = doc.id;
            const data = doc.data();
            return  {id: id, ...data};
        });
        return productsWithID;
    }
};

export const processProductFromDB = (doc) => {
    if (!doc.exists) {
        console.log('Item does not exist!');
    } else {
        let productsWithID = [];
        const id = doc.id;
        const data = doc.data();
        const productWithID = {id: id, ...data};
        productsWithID = [...productsWithID, productWithID];
        return productsWithID;
    }
};

