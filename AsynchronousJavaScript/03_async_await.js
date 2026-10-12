let stdin = process.stdin;
let stdout = process.stdout;

function ask_(question) {
    return new Promise((resolve, reject) => {
        stdin.resume();
        stdout.write(question + ":");
        stdin.once('data', (data) => {
            data = data.toString().trim();
            if (data === "fin") {
                reject("end/reject");
            } else {
                resolve(data);
            }
        })
    });
}

async function ask_x_plus_y() {
    try {
        let x, y;
        const valX = await ask_("x");
        x = Number(valX);
        const valY = await ask_("y");
        y = Number(valY);
        let xPlusY = x + y;
        console.log("(x+y)=" + xPlusY);
        return xPlusY;

    } catch (error) {
        console.log(error);
    }
}

async function main() {
    let res = await ask_x_plus_y()
    console.log(res);
    console.log("Fin du fichier");
}

main()