let stdin = process.stdin;
let stdout = process.stdout;

function ask(question, callback){
    stdin.resume();
    stdout.write(question + ":");
    stdin.once('data', (data) =>{
        data = data.toString().trim();
        callback(data);
    })
}
 
ask("x",(valX) => {
    console.log("Déclenchement de la fonction de callback avec valX: "+ valX);
    let x = Number(valX);

        ask("y",(valY)  => {
        console.log("Déclenchement de la fonction de callback avec valY: "+ valY);
        let res = x + Number(valY);
        console.log("res=(x+Y)="+res);
        
        process.exit();
    });
});

// console.log("En attendant la réponse, l'interpétation du fichier se termine");

