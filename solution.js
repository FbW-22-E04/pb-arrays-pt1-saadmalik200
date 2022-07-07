const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log(euroCities);
const secondCity = euroCities[1];
console.log(secondCity);

console.log(euroCities.splice(0, 1, "Berlin"));
console.log(euroCities);
console.log(euroCities.length);

console.log(euroCities.pop());
console.log(euroCities);

console.log(euroCities.push("Budapest"));

console.log("Euro Cities Latest", euroCities);

const asianCities = ["Islamabad", "Hongkong", "Dubai", "Dehli", "Lahore"];
console.log(asianCities);

const worldCities = (euroCities.join(" ") + " " + asianCities.join(" ")).split(
  " "
);

console.log("World Cities are", worldCities);
console.log("Reversed World Cities", worldCities.reverse());

console.log(euroCities.splice(2, 1));
console.log(euroCities);

const asianSelection = asianCities.slice(1, 4);
console.log(asianSelection);
console.log(worldCities.splice(2, 1, "Toronto"));
console.log(worldCities);
console.log(worldCities.splice(1, 0, "Washington"));
console.log(worldCities);

console.log(worldCities.join(" , "));

const string1 = "Hello World";
console.log(string1);
const toArray = string1.split("");
console.log(toArray);
const reverseArray = toArray.reverse();
console.log(reverseArray);
const toString = reverseArray.join("");
console.log(toString);

const character = ["john", "snow", "mark", "peter"];
console.log(character);
const names = ["Alisha", "Zain"];
console.log(names);
const combinedArray = (character.join(" ") + " " + names.join(" ")).split(" ");
console.log(combinedArray);
combinedArray.push("Parrot");
console.log(combinedArray);
console.log(combinedArray.reverse());
console.log(names[1]);
console.log((names[1] = "Malik"));
console.log(names);
