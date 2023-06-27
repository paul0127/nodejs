require('dotenv').config()
const mysql = require('mysql');
const db_config = {
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database,
    port:3306,
    connectionLimit:10,
    useConnectionPooling:true
}
let connect = mysql.createConnection(db_config)

connect.connect((err)=>{
    if (err) {
        console.log('connecting error');
        // connect = reconnect(connect)
    }
    console.log('connecting success');
});

// function reconnect(connection){
//     //console.log("\n New connection tentative...");
//     //- Destroy the current connection variable
//     if(connection) connection.destroy();
//     //- Create a new one
//     var connection = mysql.createConnection(db_config);
//     //- Try to reconnect
//     connection.connect(function(err){
//         if(err) {
//             //- Try to connect every 2 seconds.
//             setTimeout(reconnect, 2000);
//         }else {
//             console.log("\n\t *** New connection established with the database. ***")
//             return connection;
//         }
//     });
// }

// connect.on('error', function(err) {
//     //- The server close the connection.
//     if(err.code === "PROTOCOL_CONNECTION_LOST"){    
//         console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
//         connect = reconnect(connect);
//     }

//     //- Connection in closing
//     else if(err.code === "PROTOCOL_ENQUEUE_AFTER_QUIT"){
//         console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
//         connect = reconnect(connect);
//     }

//     //- Fatal error : connection variable must be recreated
//     else if(err.code === "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR"){
//         console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
//         connect = reconnect(connect);
//     }

//     //- Error because a connection is already being established
//     else if(err.code === "PROTOCOL_ENQUEUE_HANDSHAKE_TWICE"){
//         console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
//     }

//     //- Anything else
//     else{
//         console.log("/!\\ Cannot establish a connection with the database. /!\\ ("+err.code+")");
//         connect = reconnect(connect);
//     }

// })

module.exports = connect