// function fulname() {
//   console.log("hellow world");
// }
// fulname();

// const fulname1 = () => ({
//   name: "helo world21",
// console.log();  // console.log burda calismiyor arrow object functionda
// });

// fulname1();
// console.log(fulname1().name);
// console.log(typeof fulname1());

// !          09 : ARROW Function - "OK Fonksiyonu"

// ! 1 -  tek satirsa fonksyion return lazim degildir
// ! 2 - (parametre) => {}
// ! 3 - arrow fonksiyonun kulanmanin en temel sebebi this kavramiyla ilgilidir normal fonksiyonlar iligi oldugu objeden thisi alir ama arrow fonskiyonun thisi olmadigi icin disardan windowdan alir
// ! 4 - Arrow fonksiyonu constructor fonksiyon olarak kullanamayiz cunku kendine ait bir thisi yok constructor fonksiyon ise this ister icindeki thisler bir sey ifade etmez arrow funktion olursa.

// Arrow function daima function expression olarak yazilir
// const square = function(num){retunr (num * num)};
// const square = (num) => {return num * num};
const square = (num) => num * num; // ! bir bir arrowa dondurduk fonksiyonu
console.log(square(3));

const square1 = (num) => {
  return num * num; // ! burda eger return vermezsek fonksiyon undifeind verir
  // ! object icinde return alir object fonksiyon
  // ! eger ()=> ({}) boyle ( icinde {}) obje varsa burdada return almaz
};
console.log(square1(4));
console.log(typeof square1);

// ! this le ilgili ornekler

// todo: 1 ci ornek
// window.name = 'arin';
// function tellName(){          // ! +-+-
//     console.log(this);
//     console.log(this.name);
// }
// tellName();

// const person = {
//     name:"elis",
//     tellName:function(){
//         console.log(this); // ? +-+-  personu aliyoru
//         console.log(this.name);
//     }
// }
// person.tellName();

// todo: 2 ci ornek yukardakinin aynisi fakat aradaki fark ikinci obj fonksiyonda icindeki fonksiyon callback
// const tellName1 = () => {
//   console.log(this);
//   console.log(this.name); // ! +-+-
// };
// tellName1();

// const person = {
//   name: "elis",
//   tellName: () => {
//     console.log(this); // ? +-+- window nesnesini aldi person almak yerine
//     console.log(this.name);
//   },
// };
// person.tellName();

/************************************************************************************************** */

// ! 1- baska ayri bi ornek
window.name = "Istanbul";
const person1 = {
  name: "Fatih",
  tellName: function () {
    console.log(this);
    console.log(this.name);

    setTimeout(function () {
      //  setTimeout icinde function kendi basina calisan anonim bir fonksiyon ayri bi fonksiyon olmasindan dolayi ve bu artik global yani windowdan alir this degerini.
      console.log(this);
      console.log(this.name);
    });
  },
};

person1.tellName();

// ! 2 -  yukardaki fonksiyonuda simdi ok seklinde yazicaz.

const person2 = {
  name: "Mehmet",
  tellName: () => {
    // arrow fonksiyonun kendine ait thisi olmadigandan dolayi window nesnesinden this alir eger burda normal function() yazsaydik ()=> yerine kendine ait thisi oldugundan dolayi setTime out burdaki thisi kulanarak elis degerini dondururdu
    console.log(this);
    console.log(this.name);

    setTimeout(() => {
      // settime out kendi basina zaten burda anonim fonksiyon kendide ait fonksiyon bide ustune aroow sekilde yazilmis aroowundan kendine ait  thisi yok buda window nesnesindna alicak thisi.
      console.log(this);
      console.log(this.name);
    });
  },
};

person2.tellName();

// ! 3 - yukardaki fonksiyonun aynisi aradaki fark telname normal yapicaz ve settimeoutu arrow sekilde birakara thisi telnameden almasini sagliyicaz ve genneliklede boyle durumlarda kullanilirmis ok fonksiyonlar

const person3 = {
  name: "Ahmed",
  tellName: function () {
    console.log(this);
    console.log(this.name);

    setTimeout(() => {
      // settime out kendi basina zaten burda anonim fonksiyon kendide ait fonksiyon bide ustune aroow sekilde yazilmis aroowundan kendine ait  thisi yok buda window nesnesindna alicak thisi. fakat yukarda tellName kendine ait thisi oldugundan dolayi. thisi ordan alicak. eger burda setTime out normal fonksiyon olarak tanimli olsaydi window nesnesinden alirdi degeri ornek 1
      console.log(this);
      console.log(this.name);
    });
  },
};
person3.tellName();

/****************************************************************************** */

// ! ayri bir ornek daha
window.year = 2025;
const myObj = {
  year: 2020,
  showYear: function () {
    console.log(this.year, this);
  },
  showYear1: () => {
    console.log(this.year, this); // windowdan alir
  },
};

myObj.showYear();
myObj.showYear1();

// ! baska bir ornek

// CALL

window.name = "gurcan";
window.grade = 100;

const student = {
  examResult: () => {
    // burasai normal fonksyion olsaydi function() o zaman callari kulanirdi call oldugundan dolayi degeri windowdan alir
    return this.name + " " + this.grade;
  },
};

const student1 = {
  name: "arin",
  grade: 80,
};

const student2 = {
  name: "elis",
  grade: 77,
};

console.log(student.examResult.call(student1));
console.log(student.examResult.call(student2));
