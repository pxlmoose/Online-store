
// database.ref('items').on('value', (snapshot) => {
//     const items = [];
//     snapshot.forEach((childSnapshot) => {
//         items.push({
//            id: childSnapshot.key,
//            ...childSnapshot.val() 
//         });
//     });
//     console.log(items);
// });

// database.ref('items').once('value').then((snapshot) => {
//     const items = [];
//     snapshot.forEach((childSnapshot) => {
//         items.push({
//            id: childSnapshot.key,
//            ...childSnapshot.val() 
//         });
//     });
//     console.log(items);
// });

// database.ref('items').push({
//     name: 'cheap design',
//     description: 'it all the cheap and generic stuff'
// });

// database.ref().on('value', (snapshot) => {      //not using promises, but callback, becouse we want to keep 
//     console.log(snapshot.val());                //data updated. Promise once resolved does nothing more.    
// });

// setTimeout(() => {
//     database.ref('age').set(29)
// }, 3500)
// database.ref().once('value').then((snapshot) => {   //once fetches data one time and that's that
//     const val = snapshot.val();
//     console.log(val);
// }).catch((error) => {
//     console.log('error: ', error);
// });

// database.ref().set({        // Firebase returns a promise, so we can use then/ catch handlers
//     name: 'Jane',
//     age: 30,
//     isHot: true,
//     measures: {
//         boobs: 'big',
//         ass: 'big'
//     }
// }).then(() => {
//     console.log('data is saved')
// }).catch((error) => {
//     console.log('this failed: ', error);
// });

// database.ref().update({
//     name: 'Klaudyna',
//     age: 31,
//     'measures/boobs': 'semi-big'
// })

// database.ref('age').remove().then(() => {
//     console.log('removed age');
// }).catch((error) => {
//     console.log('error: ', error);
// });