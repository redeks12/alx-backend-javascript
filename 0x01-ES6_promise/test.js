import handleResponseFromAPI from "./2-then.js";

const promise = Promise.reject();
const min = handleResponseFromAPI(promise);
console.log(min);
