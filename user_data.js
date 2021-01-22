require("dotenv").config();
const request = require("request");


//Funcion - Obtener Credeciales de Acceso al Api de Twitch
const getToken = (url_token,cliente_id, client_secret, callback) => {

    const auth_data_at = {
        url: url_token,
        json: true,
        body: {
            client_id: cliente_id,
            client_secret: client_secret,
            grant_type: "client_credentials"

        }
    };

    request.post(auth_data_at, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log("Statis: $(res.statusCode)");
        console.log(body);
        callback(res);
    });
};

//Llamada - Obtener Credeciales de Acceso al Api de Twitch
var AT = "";
getToken(process.env.GET_TOKEN, process.env.CLIENT_ID, process.env.CLIENT_SECRET, (res) => {
    AT = res.body.access_token;
    //aqui se deberia tener el otro codigo?? anidar requests?
    return AT;
   
})
setTimeout(()=>{console.log(AT);},1500);



//obtener id del user
