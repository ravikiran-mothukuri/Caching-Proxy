
export function parseArgs(args){
  const flags={};
  
  args.forEach((arg,i) => {
    if(arg.startsWith("--")){
      const key= arg.slice(2);
      const value= args[i+1];

      flags[key]= value && !value.startsWith("--")?value:true;
    }
  });
  
  return flags;
}