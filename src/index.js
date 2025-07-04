const express=require("express");
const {serverConfig}=require("./config");
const apiRoutes=require("./routes")

const app=express();

app.use("/api",apiRoutes);


app.listen(serverConfig.PORT,()=>{
    console.log("Server is Running on port ",serverConfig.PORT);
  
})

