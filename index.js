const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"),
  massive = require("massive");
require("dotenv").config();
const controller = require('./controller')

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(dbInstance=>{
      app.set('db',dbInstance);

      // dbInstance.new_planes()
      // .then(planes=>console.log(planes))
      // .catch(err=>console.log(err))
      // dbInstance.get_planes()
      // .then(planes=>console.log(planes))
      // .catch(err=>console.log(planes))
});
app.get('/api/planes/', controller.getPlanes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
