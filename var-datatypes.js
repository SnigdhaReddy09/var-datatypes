// 1
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
delete person.city;
person.country = "USA";
person.age = 31;

console.log(person);

// option 3 - { name: "Alice", age: 31, country: "USA" }

// 2
const smartphone = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 799
};
delete smartphone.model; //option 2

console.log(smartphone);

// 3
const book = {
    title: "Learn JavaScript",
    author: "John Smith",
    pages: 400
};
book.genre = "Programming"; //option 1

console.log(book);

// 4
var data = [10, 20, ["apple", "banana"], ["cat", ["dog", "elephant"], "fish"], "grape"];

console.log(data[3][2]);  //console fish

// 5
var items = [["pen", "pencil"], "notebook", [1, 2, [3, 4, ["eraser"]]], "marker"];

console.log(items[2][2][2][0]); //console eraser
