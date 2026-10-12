async function myGenericJSGetFetchData(url) {
    try {
        const response = await fetch(url);

        if (response.status !== 200) {
            throw new Error(`Problem. Status Code: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.log(`Fetch error : ${error}`);
    }
}

let myResponseData = await myGenericJSGetFetchData("https://api.spaceflightnewsapi.net/v4/articles/");

console.log(myResponseData);