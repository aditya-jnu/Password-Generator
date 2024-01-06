class passGen{
    constructor(){
     }
    generatePassword(complexity) {
        const lowcase='abcdefghijklmnopqrstuvwxyz';
        const upcase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const num='0123456789';
        const specia='!@#$%^&*-+';
        let randomPass="";

        if(complexity=='weak'){
            console.log("Weak selected")
            randomPass=weakPass();
        }
        else if(complexity=='moderate'){
            console.log("moderate selected")           
            randomPass=modPass();
        }
        else if(complexity=='strong'){
           console.log("strong selected")
           randomPass=strongPass();
        }

        function weakPass(){
           const targetweak=lowcase+num;
           let weakans="";
           for(let i=0;i<8;i++){
              const randomIndexW=Math.floor(Math.random()*targetweak.length)
              weakans+=targetweak.charAt(randomIndexW)
           }
           return weakans;
        }
        function modPass(){
            const targetmoderate=lowcase+upcase+num;
            let moderateans="";
            for(let i=0;i<12;i++){
                const randomIndexM=Math.floor(Math.random()*targetmoderate.length)
                moderateans+=targetmoderate.charAt(randomIndexM)
            }
            return moderateans;
        }
        function strongPass(){
            const targetstrong=lowcase+upcase+num+specia;
            let strongans="";
            for(let i=0;i<15;i++){
              const randomIndexS=Math.floor(Math.random()*targetstrong.length)
              strongans+=targetstrong.charAt(randomIndexS);
            }
            return strongans;
        }

        document.getElementsByClassName("pass")[0].innerHTML=randomPass;
    }    
}

let generator=new passGen();// CREATING AN OBJECT NAMED generator using the class passGen

 document.getElementById("btn1").addEventListener('click',()=>{
    generator.generatePassword('weak')
})
document.getElementById("btn2").addEventListener('click',()=>{
    generator.generatePassword('moderate')
})
document.getElementById("btn3").addEventListener('click',()=>{
    generator.generatePassword('strong')
})