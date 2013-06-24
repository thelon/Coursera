var fs = require('fs');
var outfile = "HW1b.txt";
var i;
var i2;
var i3;
var j;
var j2=2;
var res=new Array();
for( i=1;i<=10000;i++){
  res[i]=1;	
}

for( i2=2;i2<=100;i2++){
  if(res[i2]==0){
    continue;
  }

  for( j=i2*2;j<=10000;j=j+i2){
      res[j]=0;
  }
}

var out = "2";

for ( i3=3;i3<10001;i3++){
  if (res[i3]>0){
     console.log("RES "+j2+"="+i3);
     out = out+","+i3;
     j2=j2+1;
  }
  if (j2>100){
     break;
  }
  console.log("3 "+i3+"="+res[i3]);
}

fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);