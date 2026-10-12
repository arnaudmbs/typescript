function myGenericJSGetFetchData(url) {
    return new Promise((resolveWithJsData, reject) => {
        fetch(url)
            .then((response) => {
                if (response.status !== 200) {
                    let errString = `Problem. Status Code: ${response.status}`;
                    console.log(errString);
                    reject(errString)
                } else {
                    response.json().then(
                        (data) => resolveWithJsData(data)
                    );
                }
            })
            .catch((err) => reject(err));
    });
}

myGenericJSGetFetchData("https://api.spaceflightnewsapi.net/v4/articles/")
    .then((data) => console.log(data))
    .catch((err) => console.error("Fetch error : " + err))
    .finally(() => console.log("Dernière action une fois la requête et la réponse traitée"));