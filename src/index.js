import {createConnection} from "typeorm";
import {Post} from "./entity/Post";


// connection settings are in the "ormconfig.json" file
createConnection().then(async connection => {

    
    connection.getRepository(Post).delete(6);
    connection.getRepository(Post).save(post);

}).catch(error => console.log("Error: ", error));