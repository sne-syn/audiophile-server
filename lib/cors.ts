const cors = require("cors");

const params = {
  origin: "http://localhost:3000",
};

const corsWithParams = cors(params);
export default corsWithParams;
