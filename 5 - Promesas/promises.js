// Creación de promesa
const buyFood = new Promise( (resolve, reject) => {

    // Ejecutor
    resolve('Aquí tienes tú comida');


    // reject(Error('Error procesando el pago'));
});

buyFood
    .then( res => console.log(res))
    .catch(error => console.log(error))
    .finally( () => console.info('Proceso finalizado'))



// Manejo de varias promesas
const payFood = new Promise( (resolve, reject) => {
    // Son acciones asíncronas
    setTimeout( () => {
        Promise.race([paypal,amex]).then(payProvider => {
            resolve( { done: true, payProvider, customerID: 3123} )
        })
    },300)
})

const getTransport = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve( { bikerID: 4321, distance: 3000 } )
      // reject('Problema con el repartidor')
    },5000)
}) 


// Proveedores de pago (Promise.race)
const paypal = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve('Paypal')
    }, 4000)
})

const amex = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve('Amex')
    },1000)
})


function deliverFood() {
    /*payFood
        .then( paymentInfo => {
            console.log(paymentInfo);
            return getTransport;
        })
        .then( riderInfo => {
            let {bikerID, distance} = riderInfo;
            console.log(`El biker ${bikerID} se encuentra a ${distance} metros.`);
        })
        .catch( error => console.error(error))
        .finally( () => console.log('Proceso de compra de comida finalizado !!'));
        */

        Promise.all([payFood, getTransport])
            .then(order => console.log(order))
            .catch( error => console.error(error))
}

deliverFood();