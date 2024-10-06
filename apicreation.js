var http=require("http")

var server=http.createServer((req,res)=>{

if(req.method=="GET"){
    res.statuscode=200
    res.write("get")
}
 else if(req.method=="POST"){
res.write("post")
}
 else if(req.method=="PUT"){
   res.write("put") 
}
 else if(req.method=="PATCH"){
   res.write("patch") 
}
else{
res.write("nithin")
}

    res.end()
})
var port=3000;
server.listen(port,()=>{
    console.log("started servsr at"+port)
})