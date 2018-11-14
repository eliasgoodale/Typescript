"use strict";
exports.__esModule = true;
/* Rules for async functions based on callbacks:
        1.) Never call a callback twice
        2.) Never throw an error

        This function violates the second because JSON.parse throws an error if passed a bad
        JSON, which avoids calling the callback and crashes the application.
*/
// const promise = new Promise((resolve, reject) => { resolve(123) })
// promise.then((res) => {
// 		throw new Error("Something bad happened");
// 	})
// 	.catch((err)=> {
// 		console.log(err.message);
// 		return 456
// 	})
// 	.then((res)=> {
// 		console.log(res);
// 	})
// /* With Timeout */
// let debouncedPromise = (): Promise<string> => {
// 	return new Promise((resolve) => {
// 		setTimeout(() => resolve("Hello world!"), 1000);
// 	})
// }
// Promise.resolve(123)
// 	.then((res) => {
// 		return debouncedPromise();
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
/* File system reads with promises */
// const readFileAsync = (filename: string): Promise<any> => {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile(filename, (err, result) => {
// 			if (err) reject(err);
// 			else resolve(result)
// 		})
// 	})
// }
// const loadJSONAsync = (filename: string): Promise<any> => {
// 	return readFileAsync(filename)
// 		.then((res) => {
// 			return JSON.parse(res);
// 		});
// }
// loadJSONAsync('example.json')
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log('File error: ', err.message);
// 	})
/* Promises.all() used to run things in parallel */
var loadItem = function (id) {
    return new Promise(function (resolve) {
        console.log('loading item', id);
        setTimeout(function () {
            resolve({ id: id });
        }, 1000);
    });
};
/* Chaining example (takes ~2 seconds) */
var item1, item2;
loadItem(1)
    .then(function (res) {
    item1 = res;
    return loadItem(2);
})
    .then(function (res) {
    item2 = res;
    console.log('done chaining');
});
/* Parellel example (takes ~1 second) */
Promise.all([loadItem(1), loadItem(2)])
    .then(function (res) {
    item1 = res[0], item2 = res[1];
    console.log('done parallel');
});
var task1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1000, 'one');
});
var task2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000, 'two');
});
Promise.race([task1, task2]).then(function (value) {
    console.log(value);
});
