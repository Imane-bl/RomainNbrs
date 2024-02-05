function convertToRoman(num) {
    let symbols = { 
      M	:1000,
    CM:	900,
    D	:500,
    CD	:400,
    C	:100,
    XC:	90,
    L	:50,
    XL:	40,
    X:	10,
    IX:	9,
    V:	5,
    IV:	4,
    I	:1
    }
    let res="";
    
    for (let  i in symbols){
     // console.log(i);
    
      while(num >= symbols[i]){
        res+=i;
        num-=symbols[i];
        console.log(res);
        console.log(num);
      }
    }
    
    
     return res;
    }
    
    convertToRoman(36);