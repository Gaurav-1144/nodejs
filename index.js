const app = require('./app'); // called outside js file;
console.log(app);
console.log(app.x);
console.log(app.y);
console.log(app.z());

/**
 * Filter Function
 */
var arr = [10,20,30,40,50,69];
var array_value = arr.filter((item)=>{
return item > 20;
});
console.log(array_value);