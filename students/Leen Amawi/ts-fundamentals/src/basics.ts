let studentName: string = "Leen Amawi";
let studentAge: number = 22;
let isRegistered: boolean = true;
let drades: number[] = [90, 100, 92, 95];
let studentInfo: [string, number, boolean] = ["Leen",22,true];  //tuple
type Priority = "LOW" | "MEDIUM" | "HIGH";
let taskPriority: Priority = "HIGH";
function formatTask(title: string, priority: Priority) : string {
return `${title} - ${priority}`;
}
console.log(formatTask("Complete assignment", "HIGH"));
console.log(formatTask("Read chapter", "LOW"));
//let studentAge: number = "twenty";
