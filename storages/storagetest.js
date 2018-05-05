/**
 * Created by bianyanran on 2018/5/5.
 */

const localforage = require('localforage');

localforage.getItem('somekey').then(function(value) {
    // This code runs once the value has been loaded
    // from the offline store.
    console.log(value);
}).catch(function(err) {
    // This code runs if there were any errors
    console.log(err);
});