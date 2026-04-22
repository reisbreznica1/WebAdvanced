var programminglanguages = ['JavaScript', 'PHP', 'Python'];

console.log(programminglanguages);

console.log(programminglanguages[0]);

programminglanguages.push ('Java');

console.log(programminglanguages);

programminglanguages.pop ();

console.log(programminglanguages);

programminglanguages.unshift ('c#');

console.log(programminglanguages);

programminglanguages.shift ();

console.log(programminglanguages);

programminglanguages.slice (0,2,'Ruby');

console.log(programminglanguages);

console.log(Math.random()*5);

console.log(Math.floor(Math.random()*5));

var students = ['Reis', 'Nehar'];

var [s1,s2] = students;

console.log(s1);

console.log(s2);

var places = ["Tiran","Prishtine","Durres","Podojeve"];

var [fistPlace, secondPlace] = places;

console.log(secondPlace);

var number = [1,2,3,4,5,6,7,8,9,10];

var[first, second, ...otherNumber] = number;

console.log(first);
console.log(second);
    console.log(otherNumber.toString());