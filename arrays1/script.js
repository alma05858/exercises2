const people = ["Harry", "Ron", "Hermione"];
let result;

result = people.push("Draco");
console.log("push Draco - result:", result);
console.log("people:", people);

result = people.pop();
console.log("pop - result:", result);
console.log("people:", people);

result = people.push("Neville");
console.log("push Neville - result:", result);
console.log("people:", people);

result = people.push("Luna");
console.log("push Luna - result:", result);
console.log("people:", people);

result = people.slice(0, 3);
console.log("slice(0,3) - result:", result);
console.log("people:", people);

result = people.splice(1, 0, "Cho");
console.log("splice(1,0,'Cho') - result:", result);
console.log("people:", people);

people[1] = "Ginny";
console.log("people[1] = 'Ginny'");
console.log("people:", people);

result = people.push("Fred", "George");
console.log("push Fred, George - result:", result);
console.log("people:", people);

result = people.indexOf("Fred");
console.log("indexOf 'Fred' - result:", result);
console.log("people:", people);

result = people.splice(result, 1);
console.log("splice(result,1) - result:", result);
console.log("people:", people);
