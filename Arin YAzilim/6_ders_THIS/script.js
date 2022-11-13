// obj.func() -->this obj
// this --> global object --> window (global)

// console.log(this);
// console.log(this.location);
// console.log(this.location.href);
// console.log(window.location.href);

// console.log(this === window);

const name = "Arin";
// const age  = 3;

console.log(name); // Arin doner
console.log(this.name); // Gurcan doner func1 derden alir cunku this = window ve function declaration oldugu icinde degiskenler tanimlanmis olur otomatik
console.log(this); // window doner

// Function Declaration
function func1() {
  this.name = "Gurcan";
  //   console.log(this);
  //   console.log(this.location);
  //   console.log(this.location.href); //  globale referance veriyor her iki fonksiyonda
  //   console.log(this.age);   // bu undifeind doner cunku asagida function expresion tanimli yani hoested yapmaz yani degiskenleri olusturmaz. bu iki fonksiyonun yerini degistirirsek ikisinide yazdirir hem name hem surname
}

// Function Expression
const func2 = function () {
  this.age = 40;
  //   console.log(this);
  //   console.log(this.location);
  //   console.log(this.location.href); // globale referance veriyor her iki fonksiyonda
  //   console.log(this.name);  // bunu yazdirir cunku yukardaki global fonksiyonda tanimli ve function declaration hoested yapar degiskenleri once olusturma ozelligi vardir cagirilmasa bile. function expresinonda yoktur bu ozzelik
};

func1(); //  globale referance veriyor her iki fonksiyonda
func2(); //  globale referance veriyor her iki fonksiyonda

console.log(name); // Arin doner yukardan alir eger this ile olsaydi gurcan donerdi normalde burasi benim mantigima gore ters calismaz fakat this global windowa verdigi icin calisir
console.log(age); // yukarda age tanimli olmadigi icin veriyi otomatik windowdan alir yani func2 tanimlanmis oldugu yerden
console.log(this.name); //  burassi benim mantigima gore biraz yakin ama yinede calisiyor cunku this=window
console.log(this.age);

// ! Constructor Function

function Person(name, surname, age) {
  const obj = {};
  console.log(obj);
  obj.name = name;
  console.log(obj);
  obj.surname = surname;
  console.log(obj);
  obj.age = age;
  obj.fullName = function () {
    return obj.name + " " + obj.surname;
  };
}

// function Person2(name, surname, age) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
//   this.fullName = function () {
//     return this.name + " " + this.surname;
//   };
// }

// ! NOT=>  hocam functionlarda constructor( olusturmuyor) class metodlarda constructor(olusturuyor)
class Person1 {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    console.log(this); // == Person1{arin,gurcan objeleri};
  }
  fullName = function () {
    return this.name + " " + this.surname;
  };
}

const arin = new Person1("Arin", "Çekiç", 5);
const gurcan = new Person1("Gürcan", "Çekiç", 40);
console.log(arin);
console.log(gurcan);

const arin1 = {
  name: "Arin",
  age: 5,
  surname: "Çekiç",
  fullName: function () {
    console.log(this);
    console.log(this === arin1); // true
    return this.name + " " + this.surname;
  },

  mother: {
    // ! burasida bir obje
    name: "Gamze",
    age: 40,
    surname: "Çekiç",
    fullName: function () {
      console.log(this);
      console.log(this === arin1.mother); // true
      return this.name + " " + this.surname;
    },
  },
};
console.log(arin1.fullName());
console.log(arin1.name + " " + arin1.surname);
console.log(arin1.mother.fullName());
console.log(arin1.mother.name + " " + arin1.mother.surname);

// ! farki bir ornek onemli bir ornek thisin windowa yada  object  ait oldugunu gosteren

const elis = {
  name: "Elis",
  funcy: function () {
    console.log(this === elis); // true
    setTimeout(function () {
      console.log(this === elis); // false doner
      console.log(this === window); // true

    }, 2000);
  },
};

console.log(elis.funcy());

// ! yukarda 119 satirda false donemesinin sebebi artik setTimeout icinde function kendi basina calisan anonim bir fonksiyon ayri bi fonksiyon olmasindan dolayi ve bu artik global yani window.  funcy:function ise this olarak arinin metodu o yuzdende 118 satirda true doner.
