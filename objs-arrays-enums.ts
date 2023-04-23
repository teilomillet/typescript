
enum Role { ADMIN, READ_ONLY, AUTHOR}

/* const person : {
    name: string;
    age: number;
} = { */
const person = {
    name:'Teïlo',
    age: 25,
    hobbies: ['Gaming', 'Coding', 'Sports'],
    role: Role.ADMIN
}

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
}