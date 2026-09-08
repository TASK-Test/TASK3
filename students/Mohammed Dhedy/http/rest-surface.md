# Statuses

## 1. get all statuses

method : Get
path : /api/statuses
purpose : get a list of all statuses
request body : NONE
response : [
{
"id":1,
"name":"done",
"position":3,
"color":"#000"
}
]
status code : 200 Ok

## 2. get status by id

method : Get
path : /api/statuses/{id}
purpose : get a specific status
request body : none
response body :{
"id":1,
"name":"done",
"position":3,
"color":"#000"
}
status code : 200 Ok

## 3. create status

method :POST
path :/api/statuses
purpose :create a new status
request body : {
"name":"done",
"position":3,
"color":"#000"
}
response body :{
"id":1,
"name":"done",
"position":3,
"color":"#000"
}
status code : 201 created

## 4.update status

method :PUT
path :/api/statuses/{id}
purpose :update existed status
request body :{
"name":"In progress",
"position":3,
"color":"#000"
}
response body :{
"id":1,
"name":"In progress",
"position":3,
"color":"#000"
}
status code :200 ok

## 5.delete status

method :DELETE
path :/api/statuses/{id}
purpose :delete existed status
request body :none
response body :NONE
status code :204 no content

# Tasks

## 1.Get all tasks

method :GET
path : /api/tasks
purpose :get a list of all tasks
request body :NONE
response body :[
{"id":1,
"title":"study typescript",
"description":"study generics and interfaces in typescript",
"status":{"id":1,"name":"Done","position":3,"color":"rgb(0, 255, 17)"},
"createdBy":{"id":1,"username":"mhmd04","email":"mhmddhedy1234@gmail.com","displayName":"mohammed dhedy","role":"USER","createdAt":"2026-09-07T13:38:01.684Z"},
"priority":"HIGH",
"targetDate":"2026-09-07T13:38:06.685Z",
"createdAt":"2026-09-07T13:38:01.685Z",
"updatedAt":"2026-09-07T13:38:01.685Z"},
]
status code : 200 OK

## 2.get task by id

method :GET
path :/api/tasks/{id}
purpose : get a specific task by its id
request body :NONE
response body :{"id":1,
"title":"study typescript",
"description":"study generics and interfaces in typescript",
"status":{"id":1,"name":"Done","position":3,"color":"rgb(0, 255, 17)"},
"createdBy":{"id":1,"username":"mhmd04","email":"mhmddhedy1234@gmail.com","displayName":"mohammed dhedy","role":"USER","createdAt":"2026-09-07T13:38:01.684Z"},
"priority":"HIGH",
"targetDate":"2026-09-07T13:38:06.685Z",
"createdAt":"2026-09-07T13:38:01.685Z",
"updatedAt":"2026-09-07T13:38:01.685Z"}
status code :200 OK

## 3.create task

method :POST
path :/api/tasks
purpose : create a new task
request body :{
"title":"study typescript",
"description":"study generics and interfaces in typescript",
"statusId":1,
"createdById":1,
"priority":"HIGH",
"targetDate":"2026-09-07T13:38:06.685Z"
}
response body :{
"id":1,
"title":"study typescript",
"description":"study generics and interfaces in typescript",
"status":{"id":1,"name":"Done","position":3,"color":"rgb(0, 255, 17)"},
"createdBy":{"id":1,"username":"mhmd04","email":"mhmddhedy1234@gmail.com","displayName":"mohammed dhedy","role":"USER","createdAt":"2026-09-07T13:38:01.684Z"},
"priority":"HIGH",
"targetDate":"2026-09-07T13:38:06.685Z",
"createdAt":"2026-09-07T13:38:01.685Z",
"updatedAt":"2026-09-07T13:38:01.685Z"}
status code : 201 created

## 4.update task

method :PUT
path : /api/tasks/{id}
purpose : update an already exist task
request body :{
"title":"study typescript",
"description":"study generics and interfaces in typescript",
"statusId":1,
"createdById":1,
"priority":"HIGH",
"targetDate":"2026-09-07T13:38:06.685Z"
}
response body :{
"id":1,
"title":"study ts",
"description":"study generics and interfaces in typescript",
"status":{"id":2,"name":"In progress","position":2,"color":"rgb(0, 76, 255)"},
"createdBy":{"id":1,"username":"mhmd04","email":"mhmddhedy1234@gmail.com","displayName":"mohammed dhedy","role":"USER","createdAt":"2026-09-07T13:38:01.684Z"},
"priority":"HIGH",
"targetDate":"2026-09-07T13:38:06.685Z",
"createdAt":"2026-09-07T13:38:01.685Z",
"updatedAt":"2026-09-07T13:38:01.685Z"}
status code : 200 OK

## 5.partially update task

method :PATCH
path : /api/tasks/{id}
purpose :update part of an alreadt exist task
request body : {
"priority":"LOW"
}
response body :{
"id":1,
"title":"study ts",
"description":"study generics and interfaces in typescript",
"status":{"id":2,"name":"In progress","position":2,"color":"rgb(0, 76, 255)"},
"createdBy":{"id":1,"username":"mhmd04","email":"mhmddhedy1234@gmail.com","displayName":"mohammed dhedy","role":"USER","createdAt":"2026-09-07T13:38:01.684Z"},
"priority":"LOW",
"targetDate":"2026-09-07T13:38:06.685Z",
"createdAt":"2026-09-07T13:38:01.685Z",
"updatedAt":"2026-09-07T13:38:01.685Z"}
status code : 200 OK

## 6.delete task

method :DELETE
path :/api/tasks/{id}
purpose : delete a task by its id
request body : NONE
response body :NONE
status code : 204 no content
