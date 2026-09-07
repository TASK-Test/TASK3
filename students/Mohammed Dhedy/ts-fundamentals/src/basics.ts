let name: string = "Mohammed dhedy";
let age: number = 22;
let smart: boolean = true;
let monthlyIncomes: number[] = [200, 500, 800];
let generalInfo: [string, number, boolean] = ["", 0.0, true];
generalInfo[0] = "kind";
generalInfo[1] = 171.5;
generalInfo[2] = false;
type Priority = "LOW" | "MEDIUM" | "HIGH";

let formatTask = (title: string, priority: Priority): string => {
  return `Task title is : ${title} \n 
Task priority is : ${priority}\n
-----------------------------`;
};

console.log(formatTask("study ts", "HIGH"));
console.log(formatTask("have fun", "MEDIUM"));
console.log(formatTask("live", "LOW"));
// name="hhh";
// generalInfo[0]=5;ERROR : Type 'number' is not assignable to type 'string'
