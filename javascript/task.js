// console.log("Hey akshita");
const fs=require('fs')
const args = process.argv
const add = () =>{
    const p=args[3];
    const todo=args[4];
    fs.appendFile('.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

}
const help = () => {
    const info=`Usage :-
    $ ./task add 2 hello world    # Add a new item with priority 2 and text "hello world" to the list
    $ ./task ls                   # Show incomplete priority list items sorted by priority in ascending order
    $ ./task del INDEX            # Delete the incomplete item with the given index
    $ ./task done INDEX           # Mark the incomplete item with the given index as complete
    $ ./task help                 # Show usage
    $ ./task report               # Statistics`;
    console.log(info);
}

switch(args[2]){
    case 'add':
        add();
        break;
    case 'help':
        help();
        break;
    default:
       help();
        break;
}