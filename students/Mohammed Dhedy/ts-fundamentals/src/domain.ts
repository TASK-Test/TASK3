type Priority = "LOW"|"MEDIUM"|"HIGH";
type Role = "USER"|"ADMIN";

interface User{
    id:number;
    username:string;
    email:string;
    displayName?:string;
    role?:Role;
    createdAt:string;
}
interface Status{
    id:number;
    name:string;
    position:number;
    color?:string;
}
interface Task{
    id:number;
    title:string;
    description?:string;
    status:Status;
    createdBy:User;
    priority:Priority;
    targetDate:string;
    createdAt:string;
    updatedAt:string;
}