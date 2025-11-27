
const cacheStore= new Map();

export function setCache(key,value){
  cacheStore.set(key,value);
}

export function getCache(key){
  return cacheStore.get(key);
}

export function clearCache(){
  cacheStore.clear();
  console.log("Cache Cleared.");
}