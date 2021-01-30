require("dotenv").config();
const request = require("request");

//Funcion Obtener token de autentificacion
const getToken = (url_token,cliente_id, client_secret) => {
    return new Promise ((resolve, reject)=> {

        const auth_data_at = {
            url: url_token,
            json: true,
            body: {
                client_id: cliente_id,
                client_secret: client_secret,
                grant_type: "client_credentials"
    
            }
        };


        request.post(auth_data_at, (err, res) => {
         
            if (err) { reject(); }
            resolve (res.body);
        
        });
    } 
    )};



 
//--------------------------------


//Funcion Obtener el ID de usuario

const getUserID = (user_url, accessToken) => {
    return new Promise ((resolve, reject)=> {

        const options4= {
            url: user_url,
            method: "Get",
            headers: {
            "Authorization": "Bearer " + accessToken,
                    "Client-Id": process.env.CLIENT_ID }
                  
         
            };
          
    request.get(options4,   (err, res)  => {
        console.log(options4);
        if (err) { reject(); }
        console.log(res.body)
        const userinfo= JSON.parse(res.body);
        console.log(userinfo.data[0].id);
        resolve (res.body);
    });
} 
)};
  
//--------------------------------


//Llamada a ambas funciones

getToken(process.env.GET_TOKEN, process.env.CLIENT_ID, process.env.CLIENT_SECRET)
.then((datos) => {
    AT=datos.access_token;
    console.log("Llave de ingreso");
    console.log(AT); 
    getUserID(process.env.GET_USER_DATA, AT);
    
 } );
