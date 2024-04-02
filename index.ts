#! /usr/bin/env node

import inquirer from "inquirer";


//array
let todos:string[] =["uzma","malahim"];
//function

async function createTodo(todos:string[])
 {
    let ans = await inquirer.prompt({
        type:"list",
        message:"select an operation",
        name:"select",
        choices:["add","update","view","delete"],
        
    })
    if(ans.select=="add"){
        let addTodo = await inquirer.prompt(
            {
                type:"input",
                message:"update items in the list",
                name:"todo",
                
        });
        todos.push(addTodo.todo);
        console.log(todos);

    }
    if(ans.select=="update"){
        let updateTodo=await inquirer.prompt(
            {
                type:"list",
                message:"update items in the list",
                name:"todo",
                choices:todos.map(item => item)
        });
        let addTodo = await inquirer.prompt(
            {
                type:"input",
                message:"update items in the list",
                name:"todo",
                
        });
        let newTodo = todos.filter(val =>val !== updateTodo.todo); 
        todos =[...newTodo,addTodo.todo]
        console.log(todos);      

    }
    if(ans.select=="view")
    {
        console.log("**** TODO ****");
        console.log(todos);
        console.log("**************");
    }
    if(ans.select=="delete")
    {
        let deleteTodo =await inquirer.prompt(
            {
                type:"list",
                message:"update items in the list",
                name:"todo",
                choices:todos.map(item => item)
        }); 
        let newTodo = todos.filter(val =>val !== deleteTodo.todo); 
        todos =[...newTodo];
        console.log(todos); 
    }

 }
 createTodo(todos);

