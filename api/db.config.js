const mongo = require("mongoose");


// the url must route to the used database inside mongo connection
const DB_NAME = "login_with_mongo";
const ATLAS = {
  user: "william-mongo123",
  pass: "BkkxpwVKNRcsI7u2",
  cluster: "william-react-project"
} 

const LOCAL_URL = `mongodb://localhost:27017/${DB_NAME}`;
const ATLAS_URL = `mongodb+srv://${ATLAS.user}:${ATLAS.pass}@${ATLAS.cluster}.dskxwck.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;


mongo.connect(ATLAS_URL);
