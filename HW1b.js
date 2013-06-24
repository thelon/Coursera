var fs = require('fs');
var outfile = "HW1b.txt";
var i;
var j;
var res=new Array();
for( i=1;i<=100;i++){
  res[i]=1;	
}

for( i=2;i<=10;i++){
  for( j=i*2;j<=100;j=j+i){
      res[j]=0;
  }
}

var out = "2";
for ( i=3;i<101;i++);{
  if (res[i]>0){
     out = out+","+i;
  }
}

var out = "";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);