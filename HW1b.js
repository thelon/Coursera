var fs = require('fs');
var outfile = "HW1b.txt";
var i;
var i2;
var i3;
var j;
var res=new Array();
for( i=1;i<=100;i++){
  res[i]=1;	
}

for( i2=2;i<=10;i++){
  for( j=i2*2;j<=100;j=j+i2){
      res[j]=0;
  }
}

var out = "2";

for ( i3=3;i3<101;i3++){
  if (res[i3]>0){
     out = out+","+i3;
  }
  console.log(i3+"="+res[i3]);
}

fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);