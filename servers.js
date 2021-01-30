require("dotenv").config();
const request = require("request");

const getToken = (url, callback) => {

    const options = {
        url: process.env.GET_TOKEN,
        json: true,
        body: {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: "client_credentials"

        }
    };

    request.post(options, (err, res, body) => {
        if (err) { return console.log(err); }
        // console.log("Statis: $(res.statusCode)");
        // console.log(body);
        callback(res);
    });
};

var AT = "";
getToken(process.env.GET_TOKEN, (res) => {
    AT = res.body.access_token;
    return AT;
})
// setTimeout(()=>{console.log(AT);},2000)
const getGames = (url, accessToken, callback) => {
    const gameOptions = {
        url: process.env.GET_GAMES,
        method: "Get",
        headers: {
            "Client-ID": process.env.CLIENT_ID,
            "Authorization": "Bearer " + accessToken
        }
    };

    request.get(gameOptions, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log("Status: res.status");
        console.log(JSON.parse(body));
    });
};

setTimeout(() => { getGames(process.env.GET_GAMES, AT, (response) => { }) }, 1500);

//-------------------

// const getUserData = (url, accessToken, callback) => {
//     const gameOptions2 = {
//         url: process.env.GET_USER_DATA,
//         method: "Get",
//         headers: {
//             "Client-ID": process.env.CLIENT_ID,
//             "Authorization": "Bearer " + accessToken
//         }
//     };
//    var id = "";
//     request.get(gameOptions2, (err, res, body, callback) => {
//         if (err) {
//             return console.log(err);

//         }
//         console.log("Status: res.status");
//         var data_user = JSON.parse(body);
//         console.log(data_user);
//         var id = data_user.data[0].id;
//         console.log("user id "+id);
        
//     });
    
// };


// setTimeout(() => { getUserData(process.env.GET_USER_DATA, AT, (response) => { }) }, 1500);
//-------------------
//-------------------
//-------------------

const getUserID = (user_url, accessToken) => {

    const options4 = {
        url: user_url,
                method: "Get",
                headers: {
                    "Client-ID": process.env.CLIENT_ID,
                    "Authorization": "Bearer " + accessToken
                }
            };
          
    request.post(options4,  (err, body)  => {
        if (err) { return console.log(err); }
        console.log("USER BODY----------");
        console.log(body);
        // var id = data_user.data[0].id;
        // console.log("user id "+id);
       // callback(res);
    });
};

var USER_ID = "";

setTimeout(() => { getUserID(process.env.GET_USER_DATA, AT) }, 2000);

// => {
//     USER_ID = res.body.access_token;
//     return USER_ID;
// })



//-------------------
//-------------------
//-------------------

const getUserFollows = (url, accessToken, callback) => {
    const gameOptions3 = {
        url: process.env.GET_USER_FOLLOWS,
        method: "Get",
        headers: {
            "Client-ID": process.env.CLIENT_ID,
            "Authorization": "Bearer " + accessToken
        }
    };

    request.get(gameOptions3, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log("Status: res.status");
        console.log(JSON.parse(body));
    });
};

setTimeout(() => { getUserFollows(process.env.GET_USER_FOLLOWS, AT, (response) => { }) }, 1700);

//--------------------------

