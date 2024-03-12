const http=require('http');
const fs=require('fs');
const path=require('path');

var homeData='';
var aboutData='';

fs.readFile('static/home.html','utf8',(err,data)=>{
	if(err){
		console.error(`Error reading file :${err.message}`);
	}else{
		homeData=data;
	}
});
fs.readFile('static/about.html','utf8',(err,data)=>{
	if(err){
		console.error(`Error reading file :${err.message}`);
	}else{
		aboutData=data;
	}
});

const server=http.createServer((req,res)=>{
	if(req.url=='/about'){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.end(aboutData);
	}else if(req.url=='/home'){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.end(homeData);
	}else{
		res.writeHead(404,{'Content-Type':'text/html'});
		res.end('<h1><a href="http://localhost:3000/home">Home </a><br><a href="http://localhost:3000/about">About</a><br></h1>');
	}
});
const PORT=process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});

