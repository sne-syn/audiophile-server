const cors = require("cors");

const params = {
  origin: [
    "http://localhost:3000",
    "https://*audiophile*.*.*", // договориться, чтобы деплоили с audiophile названием сайта
    "https://*.vercel.app/", // или только из верселла.
    "*", // не особо шарю насколько это плохо, но по идее можно и так врубить,
    "https://audiophile-ui.vercel.app/" // можно и тупо линкой каждого сайт втулить, но нужно тогда вручную править.
  ], 
};

const corsWithParams = cors(params);
export default corsWithParams;
