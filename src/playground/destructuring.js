// const person = {
// 	name: 'Haroon',
// 	age: 21,
// 	location: {
// 		city: 'Lahore',
// 		temp: 32
// 	}
// };

// const { name, age } = person;

// console.log( `${name} is ${age}` );

// const book = {
// 	title: 'ego is the enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// if (publisherName) {
// 	console.log(publisherName);
// }

const item = [, '$2.00', '$2.50', '$2.75'];

const [coffee = 'nyc', , price] = item;

console.log(`One cup of ${coffee} costs ${price}`);