// let country = "bangladesh";
// let divition = `Newkhele`;
// let thana = new String("Pirgachha");
// console.log(thana);
// let upozila = "pirg accha";
// console.log(upozila.length);
// console.log(upozila[2]);
// upozila[2] = "M"; //not work this code becouse string value not change its immutable
// console.log(upozila);
// let number = [56, 34, 23, 12, 23];
// console.log(number.length);
// console.log(number[2]);
// number[1] = 12;
// console.log(number);

// lowercase and uppar case
// let school = "Mydul School and Collage";
// console.log(school.toUpperCase());

// let subject = "physics";
// let book = " Physics";
// if (subject.toLowerCase().trim() === book.toLowerCase().trim()) {
//   console.log("khali khob hbe");
// } else {
//   console.log("khali muri khai");
// }
// // slice use to the problem
// let address = "Rangpur";
// let homeTown = address.slice(0, 3);
// console.log(homeTown);
// // split er maddhome vag kora hoy
// let sentence = "I am a Good boy";
// let boy = sentence.split(" ");
// console.log(boy);

// let name = "miran, mydul, mim, moon";
// let friend = name.split(" ");
// console.log(friend.join("|"));
// console.log(friend.join("-"));
// console.log(friend.concat(" ").concat(boy));

// // simple vabe o concat korte pari
// let firstName = "Mydul";
// let lastName = "Islam";
// fullName = firstName + " " + lastName;
// console.log(fullName);
// console.log(fullName.includes("M"));
// reverse in the sentence mane ulta dik a suru hbe
let sentence = "I am a Learning web devloper";
let reverse = " ";
for (let letter of sentence) {
  // console.log(letter);
  reverse = letter + reverse;
}
console.log(reverse);
