#!/usr/bin/env node

const request=require('request');
const fs=require('fs');
const sha256File = require('sha256-file');

request.put("https://api.github.com/repos/lendle1028/PhysicalSingalAnalyzerCollectors/contents/index.js?access_token=99b00c1d964b26c27a1f9d899612cf9d575c6314", 
    {
        body: JSON.stringify({
            content: fs.readFileSync("index.js").toString("base64"),
            message: "commit",
            sha: sha256File("index.js"),
            "committer": {
                "name": "lendle",
                "email": "lendle_tseng@seed.net.tw"
            },
        }),
        headers: {
            "User-Agent": "chrome",
            "Authorization": "token 99b00c1d964b26c27a1f9d899612cf9d575c6314"
        }
    },
    function(error, response, body){
        console.log(body);
    }
);