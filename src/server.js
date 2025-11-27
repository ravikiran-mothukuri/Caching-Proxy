import http from "http";
import fetch from "node-fetch";
import { getCache,setCache } from "./cache.js";

export function startServer(port,origin){
  const server= http.createServer(async(req,res)=>{
    const cacheKey= req.url;

    const cached= getCache(cacheKey);
    if(cached){
      res.writeHead(200,{
        "content-type": "application/json",
        "X-Cache": "HIT"
      });

      
      
      return res.end(cached);

    }

    try{
      const response= await fetch(origin + req.url);
      const body= await response.text();
      setCache(cacheKey,body);
      res.writeHead(200,{
        "Content-Type": "application/json",
        "X-Cache": "MISS"
      });

      res.end(body);
    }catch(error){
      res.writeHead(500,{ "Content-Type": "application/json" });
      res.end(JSON.stringify({error: error.message}));
    }


  });
    server.listen(port,()=>{
    console.log(`🚀 Proxy running at http://localhost:${port}`);
  });
}