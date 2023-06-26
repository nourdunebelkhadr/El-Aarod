

let plateau = [
    ['T','C','F','R','K','F','C','T'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['t','c','f','k','r','f','c','t'] ];
  

  
  // On déplace le pion de deux cases en avant 2
  plateau[4][4] = plateau[6][4];
  plateau[6][4] = ' ';

  
  //أْ
 // ، ب، ت، ث، ج، ح، خ، د، ذ، ر، ز، س، ش، ص، ض، ط، ظ، ع، غ، ف، ق، ك، ل، م، ن، هـ، و، ي.
 const Button = document.querySelector('button');
 const Result=document.getElementById('result');
 const S=document.getElementById('S');
 const D=document.getElementById('D');
 const B=document.getElementById('B');
 const K=document.getElementById('K');
 const Aala=document.getElementById('aala');

 const taweel='الطويل';
 const Madid='المديد'; 
 const BAS='البسيط';
 const Waf='الوافر';
 const Kamil='الكامل';
 const Hazraj='الهزرج';
 const Rajaz='الرزج';

 const kt1='صحيحة'; const kt2='مقبوضة';const kt3='محذوفة';const Mkfofa='مكفوفة';const mkta='مقطوعة'; const mkhb='مخبونة';const Mksora='مقصورة'; const Mabtora ='مبثورة';const Mktofa= 'مقطوفة دائما'; const Maaso='معصوبة'; const AHadd='أحذ مضمر'; const Hadaa='حذاء';
 const Moda='مذيل'; const Mora='مرفل'; const MatW='(مطوي(ة'; const MakB='مخبولة';
 const ADDKhbn='  ذخله(ا)  زحاف الخبن ';
 const ADDTy='  ذخله(ا) زحاف  الخبن ';
 const ADDKbl='  ذخله(ا)  زحاف الخبن ';

 const Aila='الزحاف الذي ذخل على البيت هو :';

 const ManHo='منهوك'; const Machto='مشطور'
 const Tam='تام';  const Mj='مجزوء'; const ShihM='صحيح مذيل';

 /*العلل والزواحف */
 const Aa='الخبن'; const Ab='الطي'; const Ac='الخبل';  const Kap='القبض'; const Kaf='الكف';const Asp='العصب';
 const Edmare='الإضمار';
 //---------------------------------------------------
function send(){
  const text = document.querySelector('textarea').value;
  console.log(text);

var convertedText = text.split('');
console.log(convertedText);
var charCodeArray = [];
var mot=[];
    for (var i = 0; i < convertedText.length; i++) {
    var charCode = convertedText[i].charCodeAt(0);
    charCodeArray.push(charCode);
  }
  charCodeArray=charCodeArray.filter(item => item !== 32);
  console.log(charCodeArray);
      const chunkSize = 2; // حجم الأجزاء المراد تقسيم المصفوفة إليها
      const chunks = [];
      for (let i = 0; i < charCodeArray.length; i += chunkSize) {
      const chunk = charCodeArray.slice(i, i + chunkSize);
      chunks.push(chunk);
      console.log(chunks);
}
    // Assuming charCodeArray and convertedText are arrays of equal length
    
    chunks.forEach((element, index) => {  
      if (
        JSON.stringify(element) === JSON.stringify([1575, 1618])||
        JSON.stringify(element) === JSON.stringify([1608, 1618])||
        JSON.stringify(element) === JSON.stringify([1610, 1618])
        ) 
       {
        mot.push('0');
      }else if(JSON.stringify(element[1]) == 1618 ){
        mot.push('0');
      } else if(JSON.stringify(element[1]) >= 1614 && JSON.stringify(element[1]) < 1617){
        mot.push('|');
      }else if(JSON.stringify(element[0]) == 1575|JSON.stringify(element[0]) == 1608||JSON.stringify(element[0]) == 1610){
        mot.push('0');
      }
    })
      console.log(mot);
      S.textContent = mot.join('.');
      console.log(S.innerText);         
/*الطويل------------------------------------------------------------------*/ 
/*صحيحة */
   if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
    D.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِيلُنْ  ';
    B.textContent=taweel;
    K.textContent=kt1; 
}
  else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0'){
     D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِيلُنْ  ';
     B.textContent=taweel;
     K.textContent=kt1; 
     Aala.textContent='العلة التي ذخلت على البيت هي :'+Kap;
}
   else  if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُ مَفَاعِيلُنْ  ';
     B.textContent=taweel;
     K.textContent=kt1;
     Aala.textContent='العلة التي ذخلت على البيت هي :'+Kap;
}
   else  if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0.|.0'){
    D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُ مَفَاعِيلُنْ  ';
    B.textContent=taweel;
    K.textContent=kt1;
     Aala.textContent=Aila+Kap;
}

/*مقبوضة */
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.|.0'){
  D.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِلُنْ  ';
  B.textContent=taweel;
  K.textContent=kt2; 
}
else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.|.0'){
  D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِلُنْ  ';
  B.textContent=taweel;
  K.textContent=kt2; 
  Aala.textContent=Aila+Kap;
}
else  if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُ مَفَاعِلُنْ  ';
  B.textContent=taweel;
  K.textContent=kt2;
  Aala.textContent=Aila+Kap;
}
else  if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
 D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُ مَفَاعِلُنْ  ';
 B.textContent=taweel;
 K.textContent=kt2;
  Aala.textContent=Aila+Kap;
}

/*محذوفة*/
if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِي  ';
  B.textContent=taweel;
  K.textContent=kt3; 
  Aala.textContent=Aila+Kap;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُنْ مَفَاعِي  ';
  B.textContent=taweel;
  K.textContent=kt3; 
  Aala.textContent=Aila+Kap;
}
else  if(S.innerText==='|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'فَعُولُنْ مَفَاعِيلُنْ فَعُولُ مَفَاعِي  ';
  B.textContent=taweel;
  K.textContent=kt3;
  Aala.textContent=Aila+Kap;
}
else  if(S.innerText==='|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
 D.textContent = 'فَعُولُ مَفَاعِيلُنْ فَعُولُ مَفَاعِي  ';
 B.textContent=taweel;
 K.textContent=kt3;
  Aala.textContent=Aila+Kap;
}
      /*البسيط ------------------------------------------------------------------*/ 
       /*البسيط التام */
       /*عروضه صحيحة */
   if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=kt1;
} 
   else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلٌنْ ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=kt1;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=kt1;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=kt1;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=kt1;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=kt1;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=kt1;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=kt1;
        Aala.textContent=Aila+Aa;
} 

  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Ab;
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Ab;
}
   else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Ab;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و '+Ac;
}
  else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و '+Ac;
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Ac;
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+Ac;
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+ Aa +' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=kt1;
     Aala.textContent=Aila+ Aa +' و '+Ac;
}


 /*عروضه مخبونة */

 if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkhb;
} 
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkhb;
     Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkhb;
     Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkhb;
     Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkhb;
     Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkhb;
     Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkhb;
     Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkhb;
     Aala.textContent=Aila+Aa;
} 

else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و'+Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و'+Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و'+Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و'+Ab;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و'+Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ac;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ac;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa +' و '+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَعِلُنْ ';
  B.textContent=BAS +' '+'جاء هنا '+ Tam ;
  K.textContent=mkhb;
  Aala.textContent=Aila+ Aa +' و '+Ac;
}

/*عروضه مقطوعة */
 if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
        D.textContent = '  مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=mkta;
} 
   else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=mkta;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
        D.textContent = 'مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=mkta;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=mkta;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
        D.textContent = ' مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=mkta;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=mkta;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0'){
        D.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=mkta;
        Aala.textContent=Aila+Aa;
}
   else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0'){
        D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
        B.textContent=BAS +' '+'جاء هنا '+ Tam ;
        K.textContent=mkta;
        Aala.textContent=Aila+Aa;
} 

  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Ab;
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Ab;
}
   else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Ab;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و '+Ac;
}
  else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُتَفْعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و '+Ac;
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Aa+' و '+Ab+' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Ac;
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+Ac;
}
  else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.|.|.0.|.0.|.0'){
     D.textContent = ' مُسْتَفْعِلُنْ فَعِلُنْ مُتَعِلُنْ فَاعِلْ  ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+ Aa +' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
     D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  فَاعِلْ ';
     B.textContent=BAS +' '+'جاء هنا '+ Tam ;
     K.textContent=mkta;
     Aala.textContent=Aila+ Aa +' و '+Ac;
}
/*البسيط  المجزوء*/
  /*  1 عروضه صحيحة */
  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ  ';
    B.textContent=BAS +' '+'جاء هنا '+ Mj ;
    K.textContent=kt1;
}  
  else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = 'مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  ';
    B.textContent=BAS +' '+'جاء هنا '+ Mj ;
    K.textContent=kt1;
    Aala.textContent=Aila+Aa;
}
  else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  ';
    B.textContent=BAS +' '+'جاء هنا '+ Mj ;
    K.textContent=kt1;
    Aala.textContent=Aila+Aa;
}
  else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0'){
    D.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ  ';
    B.textContent=BAS +' '+'جاء هنا '+ Mj ;
    K.textContent=kt1;
    Aala.textContent=Aila+Aa;
}
  else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  ';
    B.textContent=BAS +' '+'جاء هنا '+ Mj ;
    K.textContent=kt1;
    Aala.textContent=Aila+Aa+' و'+Ab;
}
  else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){ 
    D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ  ';
    B.textContent=BAS +' '+'جاء هنا '+ Mj ;
    K.textContent=kt1;
    Aala.textContent=Aila+Ab;
}
  else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلُنْ  ';
    B.textContent=BAS +' '+'جاء هنا '+ Mj ;
    K.textContent=kt1;
    Aala.textContent=Aila+Aa+' و '+Ac;
}
  else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
    D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلُنْ  ';
    B.textContent=BAS +' '+'جاء هنا '+ Mj ;
    K.textContent=kt1;
    Aala.textContent=Aila+Ac;
}
 /*  عروضه صحيحة  مذيل */
 if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلَانْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=ShihM;
}  
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = 'مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلَانْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=ShihM;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = 'مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلَانْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=ShihM;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.|.0.0'){
  D.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلَانْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=ShihM;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلَانْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=ShihM;
  Aala.textContent=Aila+Aa+' و'+Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){ 
  D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلَانْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=ShihM;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلَانْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=ShihM;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.|.0.0'){
  D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلَانْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=ShihM;
  Aala.textContent=Aila+Ac;
}
/*   عروضه مقطوعة  */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=mkta;
}  
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ فَعِلُنْ مُسْتَفْعِلْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ مُسْتَفْعِلْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ مُسْتَفْعِلْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa+' و'+Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.0.|.0.|.0'){ 
  D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ مُسْتَفْعِلْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ فَاعِلُنْ مُسْتَفْعِلْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=mkta;
  Aala.textContent=Aila+Ac;
}
/*  مخلع البسيط */
const MkB='مخلع البسيط'
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ فَاعِلُنْ فَعُولُنْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=MkB;
}  
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ فَعِلُنْ فَعُولُنْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=MkB;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ فَعِلُنْ فَعُولُنْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=MkB;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ فَاعِلُنْ فَعُولُنْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=MkB;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = ' مُسْتَعِلُنْ فَعِلُنْ فَعُولُنْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=MkB;
  Aala.textContent=Aila+Aa+' و'+Ab;
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.0.|.|.0.|.0'){ 
  D.textContent = ' مُسْتَعِلُنْ فَاعِلُنْ فَعُولُنْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=MkB;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ فَعِلُنْ فَعُولُنْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=MkB;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.0.|.|.0.|.0'){
  D.textContent = ' مُتَعِلُنْ فَاعِلُنْ فَعُولُنْ  ';
  B.textContent=BAS +' '+'جاء هنا '+ Mj ;
  K.textContent=MkB;
  Aala.textContent=Aila+Ac;
}
/*المديد------------------------------------------------------------------ */
/*صحيح  */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَاعِلُنْ فَاعِلَاتُنْ   ';
  B.textContent=Madid;
  K.textContent=kt1;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَاعِلُنْ فَاعِلَاتُنْ   ';
  B.textContent=Madid;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَعِلُنْ فَاعِلَاتُنْ   ';
  B.textContent=Madid;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ فَاعِلُنْ فَاعِلَاتُنْ   ';
  B.textContent=Madid;
  K.textContent=kt1;
  Aala.textContent=Aila+Kaf;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُ فَعِلُنْ فَاعِلَاتُنْ   ';
  B.textContent=Madid;
  K.textContent=kt1;
  Aala.textContent=Aila+Kaf+' و '+Aa;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَعِلُنْ فَاعِلَاتُنْ   ';
  B.textContent=Madid;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa;
}
/*محذوفة */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَاعِلُنْ فَاعِلٌنْ   ';
  B.textContent=Madid;
  K.textContent=kt3;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَاعِلُنْ فَاعِلٌنْ   ';
  B.textContent=Madid;
  K.textContent=kt3;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَعِلُنْ فَاعِلٌنْ   ';
  B.textContent=Madid;
  K.textContent=kt3;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُ فَاعِلُنْ فَاعِلٌنْ   ';
  B.textContent=Madid;
  K.textContent=kt3;
  Aala.textContent=Aila+Kaf;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُ فَعِلُنْ فَاعِلٌنْ   ';
  B.textContent=Madid;
  K.textContent=kt3;
  Aala.textContent=Aila+Kaf+' و '+Aa;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَعِلُنْ فَاعِلٌنْ   ';
  B.textContent=Madid;
  K.textContent=kt3;
  Aala.textContent=Aila+Aa;
}
/*مقصورة  */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = 'فَاعِلَاتُنْ فَاعِلُنْ فَاعِلَاتْ   ';
  B.textContent=Madid;
  K.textContent=Mksora;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' فَعِلَاتُنْ فَاعِلُنْ فَاعِلَاتْ   ';
  B.textContent=Madid;
  K.textContent=Mksora;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' فَعِلَاتُنْ فَعِلُنْ فَاعِلَاتْ   ';
  B.textContent=Madid;
  K.textContent=Mksora;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' فَاعِلَاتُ فَاعِلُنْ فَاعِلَاتْ   ';
  B.textContent=Madid;
  K.textContent=Mksora;
  Aala.textContent=Aila+Kaf;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' فَاعِلَاتُ فَعِلُنْ فَاعِلَاتْ   ';
  B.textContent=Madid;
  K.textContent=Mksora;
  Aala.textContent=Aila+Kaf+' و '+Aa;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.0.0'){
  D.textContent = ' فَاعِلَاتُنْ فَعِلُنْ فَاعِلَاتْ   ';
  B.textContent=Madid;
  K.textContent=Mksora;
  Aala.textContent=Aila+Aa;
}
/*مبثورة */
if(S.innerText==='|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'فَاعِلَاتُنْ فَاعِلُنْ فَعِلُنْ   ';
  B.textContent=Madid;
  K.textContent=Mabtora;
}
else if(S.innerText==='|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَاعِلُنْ فَعِلُنْ   ';
  B.textContent=Madid;
  K.textContent=Mabtora;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' فَعِلَاتُنْ فَعِلُنْ فَعِلُنْ   ';
  B.textContent=Madid;
  K.textContent=Mabtora;
  Aala.textContent=Aila+Aa;
}
else if(S.innerText==='|.0.|.|.0.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُ فَاعِلُنْ فَعِلُنْ   ';
  B.textContent=Madid;
  K.textContent=Mabtora;
  Aala.textContent=Aila+Kaf;
}
else if(S.innerText==='|.0.|.|.0.|.|.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُ فَعِلُنْ فَعِلُنْ   ';
  B.textContent=Madid;
  K.textContent=Mabtora;
  Aala.textContent=Aila+Kaf+' و '+Aa;
}
else if(S.innerText==='|.0.|.|.0.|.0.|.|.|.0.|.|.|.0'){
  D.textContent = ' فَاعِلَاتُنْ فَعِلُنْ فَعِلُنْ   ';
  B.textContent=Madid;
  K.textContent=Mabtora;
  Aala.textContent=Aila+Aa;
}
/*الوافر------------------------------------------------------------------ */
/*تام */
if(S.innerText==='|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = ' مُفَاعَلَتُنْ مُفَاعَلَتُنْ فَعُولُنْ  ';
  B.textContent=Waf+' '+Tam;
  K.textContent=Mktofa;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' مُفَاعَلْتُنْ مُفَاعَلَتُنْ فَعُولُنْ  ';
  B.textContent=Waf+' '+Tam;
  K.textContent=Mktofa;
  Aala.textContent=Aila+Asp;
}
else if(S.innerText==='|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' مُفَاعَلْتُنْ مُفَاعَلْتُنْ فَعُولُنْ  ';
  B.textContent=Waf+' '+Tam;
  K.textContent=Mktofa;
  Aala.textContent=Aila+Asp;
}
else if(S.innerText==='|.|.0.|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0'){
  D.textContent = ' مُفَاعَلَتُنْ مُفَاعَلْتُنْ فَعُولُنْ  ';
  B.textContent=Waf+' '+Tam;
  K.textContent=Mktofa;
  Aala.textContent=Aila+Asp;
}
/*مجزوء */
/*صحيحة  */
if(S.innerText==='|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُفَاعَلَتُنْ مُفَاعَلَتُنْ   ';
  B.textContent=Waf+' '+Mj;
  K.textContent=kt1;
}
else if(S.innerText==='|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = ' مُفَاعَلْتُنْ مُفَاعَلَتُنْ   ';
  B.textContent=Waf+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+Asp;
}
/*معصوبة */
if(S.innerText==='|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُفَاعَلَتُنْ مُفَاعَلْتُنْ   ';
  B.textContent=Waf+' '+Mj;
  K.textContent=Maaso;
}
else if(S.innerText==='|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = ' مُفَاعَلْتُنْ مُفَاعَلْتُنْ   ';
  B.textContent=Waf+' '+Mj;
  K.textContent=Maaso;
  Aala.textContent=Aila+Asp;
}
/*الكامل------------------------------------------------------------------ */
  /*التام */
    /*عروضه صحيحة */
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab+' و '+Edmare;
}
else if(S.innerText==='|.|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلُنْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab+' و '+Edmare;
}
 /*-------- الضرب مقطوع -----*/
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab+' و '+Edmare;
}
else if(S.innerText==='|.|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتْفَاعِلُنْ مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab+' و '+Edmare;
}
  /*-------- الضرب  أحذ مضمر -----*/
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتْفَاعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.0.|.|.0.|.|.|.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.|.0.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
  Aala.textContent=Aila+Ab+' و '+Edmare;
}
else if(S.innerText==='|.|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتْفَاعِلُنْ مُتْفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=AHadd;
  Aala.textContent=Aila+Ab+' و '+Edmare;
}
/*-------- حذاء  -----*/
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتْفَاعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
  Aala.textContent=Aila+Edmare;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.|.0.|.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
  Aala.textContent=Aila+Ab+' و '+Edmare;
}
else if(S.innerText==='|.|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتْفَاعِلُنْ مُتَفَا   ';
  B.textContent=Kamil+' '+Tam;
  K.textContent=Hadaa;
  Aala.textContent=Aila+Ab+' و '+Edmare;
}
/*مجزوء  الكامل  */
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلُنْ    ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=kt1;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتْفَاعِلُنْ    ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+Edmare;
}

else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلُنْ    ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab;
}
/*---الضرب مقطوع--- */
 if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ  مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=mkta;
}
else if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ  مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ  مُتَفَاعِلْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=mkta;
  Aala.textContent=Aila+Edmare;
}
/*---الضرب مذيل--- */
 if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلَانْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=Moda;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلَانْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=Moda;
  Aala.textContent=Aila+Edmare;
}
if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلَانْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=Moda;
  Aala.textContent=Aila+Ab;
}
/*----الضرب مرفل--- */
if(S.innerText==='|.|.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتَفَاعِلُنْ مُتَفَاعِلَاتُنْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=Mora;
}
else if(S.innerText==='|.0.|.0.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتْفَاعِلُنْ مُتَفَاعِلَاتُنْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=Mora;
  Aala.textContent=Aila+Edmare
}
if(S.innerText==='|.|.|.|.|.0.|.|.|.0.|.|.0.|.0'){
  D.textContent = 'مُتَفَعِلُنْ مُتَفَاعِلَاتُنْ   ';
  B.textContent=Kamil+' '+Mj;
  K.textContent=Mora;
  Aala.textContent=Aila+Ab;
}
/*الهزرج-------------------------------------*/
if(S.innerText==='|.|.0.|.0.|.0.|.|.0.|.0.|.0'){
  D.textContent = 'مَفَاعِيلُنْ مَفَاعِيلُنْ   ';
  B.textContent=Hazraj+' '+Mj;
  K.textContent=kt1;
}
else if(S.innerText==='|.|.0.|.0.|.|.|.0.|.0.|.0'){
  D.textContent = 'مَفَاعِيلُ مَفَاعِيلُنْ   ';
  B.textContent=Hazraj+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+Kaf;
}
/*------*/
if(S.innerText==='|.|.0.|.0.|.0.|.|.0.|.0'){
  D.textContent = 'مَفَاعِيلُنْ مَفَاعِي   ';
  B.textContent=Hazraj+' '+Mj;
  K.textContent=kt1;
}
else if(S.innerText==='|.|.0.|.0.|.|.|.0.|.0'){
  D.textContent = 'مَفَاعِيلُ مَفَاعِي   ';
  B.textContent=Hazraj+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+Kaf;
}
/*الرزج------------------------------------------------------------------------------*/
/*العروض  صحيحة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
/*العروض  أو الضرب ذخلهما زحاف من زحافات الحشو */
/*الخبن */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُتَفْعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُتَفْعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
/*الطي */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MatW;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
/*الخبل */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُتَعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُتَعِلُنْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُتَعِلُنْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=MakB;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
/*مقطوعة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ مُسْتَفْعِلْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Ab+' و '+Ac;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa+' و '+Ab;
}
else  if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ مُسْتَفْعِلْ   ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
else  if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0.|.0.|.0.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ مُسْتَفْعِلْ ';
  B.textContent=Rajaz+' '+Tam;
  K.textContent=mkta;
  Aala.textContent=Aila+Aa+' و '+Ac;
}
/*المجزوء  */
/*صحيحة */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَفْعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=kt1;
  Aala.textContent='  ';
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَفْعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَفْعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+Ac;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَفْعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=kt1;
  Aala.textContent=Aila+Aa;
}
/*مخبونة */
if(S.innerText==='|.0.|.0.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَفْعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=mkhb;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَفْعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُتَفْعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=mkhb;
  Aala.textContent=Aila+Ac;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.0.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُتَفْعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=mkhb;
  Aala.textContent=Aila+Aa;
}
/*مطوية */
if(S.innerText==='|.0.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُسْتَعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=MatW;
  Aala.textContent='  ';
}
else if(S.innerText==='|.0.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُسْتَعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=MatW;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُسْتَعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=MatW;
  Aala.textContent=Aila+Ac;
}
else if(S.innerText==='|.|.0.|.|.0.|.0.|.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُسْتَعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=MatW;
  Aala.textContent=Aila+Aa;
}
/*مخبولة */
if(S.innerText==='|.0.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ مُتَعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=MakB;
}
else if(S.innerText==='|.0.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُسْتَعِلُنْ مُتَعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=MakB;
  Aala.textContent=Aila+Ab;
}
else if(S.innerText==='|.|.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَعِلُنْ مُتَعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=MakB;
  Aala.textContent=Aila+Ac;
}
else if(S.innerText==='|.|.0.|.|.0.|.|.|.|.0'){
  D.textContent = 'مُتَفْعِلُنْ مُتَعِلُنْ    ';
  B.textContent=Rajaz+' '+Mj;
  K.textContent=MakB;
  Aala.textContent=Aila+Aa;
}
/*منهوك الرزج */
if(S.innerText==='|.0.|.0.|.|.0'){
  D.textContent = 'مُسْتَفْعِلُنْ     ';
  B.textContent=Rajaz+' '+ManHo;
  K.textContent=kt1;
}
/*الرمل -------------------------------------------------------------- */
  /*تام */
    /*العروض صحيحة */
    
  }
Button.addEventListener('click',send)









