const app = require("./app");

const HOST = "localhost";
const PORT_NO = 3030;


app.listen(PORT_NO,function(){
    console.log(`server started http://${HOST}:${PORT_NO}`)
})