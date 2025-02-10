// // task-1
// let country = "Bangladesh";
// console.log(country.indexOf("a"));
// console.log(country.length);
// console.log(country[3]);
// // task-2
// let bangladesh = "a";
// console.log(bangladesh.toUpperCase());
// // vowel ber korar program
// let vowel = ["a", "e", "i", "o", "u"];
// // console.log(vowel.includes("i"));
// if (vowel.includes("i")) {
//   console.log("this is vowel");
// } else {
//   console.log("This is constant");
// }
// task-5
// let city = "bangladesh is a country of a big";
// console.log(city.split(" "));
// for(city.split(" ").toUpperCase()){
//   console.log(city)
// }

// // task-4
// let country = "bypzx";
// let count = country.replace("y", "x");
// console.log(count);

// break

// for (let i = 0; i < 150; i++) {
//   console.log(i);
//   if (i >= 5) {
//     break;
//   }
// }

let sentence = "hello world from javascript";

sentence = sentence
  .split(" ") // Split into words
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
  .join(" "); // Join back into a string

console.log(sentence); // "Hello World From Javascript"
