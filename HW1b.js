var fs = require('fs');
var outfile = "HW1b.txt";
var i=1;
var res;
for(int i=1;i<=100;i++){
  res[i]=1;	
}

for(int i=2;i<=10;i++){
  for(int j=i*2;j<=100;j=j+i){
      res[j]=0;
  }
}

var out = "2";
for (int i=3;i<101;i++);{
  if (res[i]>0){
     out = out+","+i;
  }
}

var out = "";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);