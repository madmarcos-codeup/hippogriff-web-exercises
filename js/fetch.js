"use strict";

const ghOptions = {
    method: "GET",
    headers: {
        "Authorization": "token " + GITHUB_API_KEY
    }
}

// fetch("https://api.github.com/users", ghOptions)
//     .then(response => response.json())
//     .then(data => console.log(data));

function getGHUserLastCommitDate(userName) {
    return fetch(`https://api.github.com/users/${userName}/events/public`, ghOptions)
        .then(response => response.json())

}

getGHUserLastCommitDate("madmarcos-codeup")
    .then(data => {
            // console.log(data)
            // 1. iterate through the event array
            for (let i = 0; i < data.length; i++) {
                // console.log(data[i]);
                // 2. when we find the first PushEvent, return that created_at
                if(data[i].type === "PushEvent") {
                    console.log("last commit " + data[i].created_at);
                    break;
                }
            }
            // 3. if we got here, did not find a pushevent
            // so return undefined
            console.log("user must be lazy");
    });
console.log(getGHUserLastCommitDate("mojombo"));
