let a = 300
// this is hte example of global scope here we are using a =300 and block scope a= 10 inside if statement

if (true) {
    let a = 10
    const b = 20
    // var c = 30 // avoid var for the reson
 console.log(`${a}`);
     
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);


// nested scope

  //using function
function one() {
    const username = " Rudra"
    function two() {
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}
one()
 // nested scope 
   //using if statement 

if(true){
    const username = 'rudra'
    if(username == 'rudra'){
        const website = 'youtube'
        console.log(username + website);
        
    }

}

//* A mini project to convert a stings first charter  to capital
// and if  the chacters 1st and total  character are num then terminated 

function F_char_upper(str) {
    if(typeof str !== "string" || str.length === 0  ) return "";
//// Check if the whole string OR the first character is a number
 if(!isNaN(str) || !isNaN(str.charAt(0))) return "";

    return str.charAt(0).toUpperCase() + str.slice(1);

}

console.log(F_char_upper("ewwwwwwww!"));


