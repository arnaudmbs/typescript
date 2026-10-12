import { Observable } from 'rxjs';

function myGenericJSGetObservableData$(url) {
    return new Observable(
        (observer) => {
            fetch(url)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error(`Problem. Status Code: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    observer.next(data);
                    observer.complete();
                })
                .catch((err) => {
                    console.log('Fetch Error :-S', err);
                    observer.error(err);
                })
        }
    )
}

myGenericJSGetObservableData$("https://api.spaceflightnewsapi.net/v4/articles/").subscribe({
    next: (data) => {
        console.log("Données reçues :");
        console.log(data);
    },
    error: (err) => {
        console.error("Fetch error : " + err);
    },
    complete: () => {
        console.log("Observable terminé");
    }
});