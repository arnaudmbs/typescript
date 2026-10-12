// let promesse = new Promise((resolve,reject)=> {
//     let succes = false;

//     if(succes) {
//         resolve("Opération réussie");
//     } else {
//         reject("Une erreur est survenue");
//     }
// });

// promesse
//     .then((result) => console.log(result))
//     .catch((reason) => console.log(reason));

let stdin = process.stdin;
let stdout = process.stdout;

function ask_(question) {
    return new Promise((resolve, reject) => {
        stdin.resume();
        stdout.write(question + ":");
        stdin.once('data', (data) => {
            data = data.toString().trim();
            if(data==="fin") {
                reject ("end/reject");
            } else {
                resolve(data);
            }
        })
    });
}

let x, y;

ask_("x")
    .then((valX) => {x=Number(valX); return ask_("y");})
    .then((valY) => {y=Number(valY); console.log("x+y="+(x+y));process.exit();})
    .catch((err) => {console.log(err);process.exit();});