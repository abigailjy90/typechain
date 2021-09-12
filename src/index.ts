interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "lala",
  age: 22,
  gender: "female",
};

// argument type & function type
// 'person' object has 'Human' interface
const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(person));

export {};
