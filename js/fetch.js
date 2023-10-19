"use strict";

const ghOptions = {
    method: "GET",
    headers: {
        "Authorization": "token " + GITHUB_API_KEY
    }
}

fetch("https://api.github.com/users", ghOptions)
    .then(response => response.json())
    .then(data => console.log(data));
