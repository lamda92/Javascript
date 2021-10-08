//prompt for new item to list
//prompt to list all items 
//prompt to delete an item from list
//prompt to quit

// create array variable
//if entry = new then add to list to array (push), display message saying item was added
//if entry = list then loop through array and print out list
// if entry = delete then use splice to delete the item, display msg saying that item was deleted
// if entry - quit then break and exit loop, print out "OK, YOU QUIT"

// function dispatch(cmd) {
//     switch (cmd) {
//         case list:
//         case show:
//             listTodo();
//             break;
//         case 'delete':
//             deleteItem();
//             break;
               

//     }

// }

const todoList = [];


while(true){
    let command = prompt("What would you like to do?");

    if(command === "quit"){
        console.log("OK, YOU QUIT")
        break;
    }
    
    if(command !== "quit"){

        if(command === "new"){
            let newTodo = prompt("Enter new todo");
            if(newTodo === ""){  

            } else { 
                if(newTodo === "quit") {
                    console.log("OK, YOU QUIT")
                    break;
                } else {
                    todoList.push(newTodo);
                    console.log(`${newTodo} added to list`)
                }
            }
        }

        if(command === "list"){
            for(i = 0; i < todoList.length; i++){
                console.log(`${i}: ${todoList[i]}`)
            }           
        }

        if(command === "delete"){
            let deleteTodo = prompt("Enter index of todo to delete");
            if(deleteTodo === ""){

            } else {
                if(deleteTodo === "quit"){
                    console.log("OK, YOU QUIT")
                    break;
                } else{
                    if(deleteTodo <= todoList.length - 1){
                        todoList.splice(deleteTodo, 1);
                        console.log("Todo Removed")
                    } else{
                        
                    }

                }
            }
        }
    }

}



