// this opertor 
 // this creates current context 
  //it will be used to accees the elemets inside this scope

const user = {
    username : "Rudra",
    price: 999 ,

    welcomeMassage : function(){
        console.log(`${this.username} , wlcome to our website`);
        
    }
}