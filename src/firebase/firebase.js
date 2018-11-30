import * as firebase from 'firebase'; // * as takes all named exports from firebase and dumps them into firebase veriable here

// Firebase originally doesn't have one default export

const config = {
    apiKey: "AIzaSyAYIsEbLZXC4i96NIAPjvBsFgthrTr9kZY",
    authDomain: "pxlrnnr-store.firebaseapp.com",
    databaseURL: "https://pxlrnnr-store.firebaseio.com",
    projectId: "pxlrnnr-store",
    storageBucket: "pxlrnnr-store.appspot.com",
    messagingSenderId: "818474385149"
};

firebase.initializeApp(config);       

const database = firebase.database();

// database.ref('items').push({
//     name: 'cheap design',
//     description: 'it all the cheap and generic stuff',
//     price: 40000
// });

// database.ref('items').push({
//     name: 'fancy design',
//     description: 'all fancy and flashy stuff',
//     price: 2220000
// });

// database.ref('items').push({
//     name: 'lazy design',
//     description: 'done 1 minute before dead-line',
//     price: 500
// });

export { firebase, database as default };




