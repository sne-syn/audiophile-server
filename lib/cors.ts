const cors = require("cors");

const params = {
  origin: [
    "http://localhost:3000",
    "https://*audiophile*.*.*",
    "https://*.vercel.app/",
    "*",
    "https://audiophile-ui.vercel.app/",
  ],
};

const corsWithParams = cors(params);

export default corsWithParams;
