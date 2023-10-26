async function getTo80(num) {
    console.log("Making a promise to get 80 WPM ...");
    return new Promise((resolve, reject) => {
        if(num >= 80){
            setTimeout(() => {
                    resolve("I practiced every day", 2000);
            }
            );
        }
        else{
            // reject(new Error ("I slept"));
            setTimeout(() => {
                console.log("waiting...");
                reject(new Error ("I slept"));
        }
        );
        }
        
    });
} 

let val = 70;
getTo80(val)
    .then(() => {
        console.log("I reached my goal!");
    })
    .catch((error) => console.error("I failed.", error.message));
