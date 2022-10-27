// 04 : Object Part II, Prototype nedir?, Inheritance, Basic Object, __proto__

const person = {
  name: "John",
  surname: "Doe",
  age: 40,
  job: "Teacher",
  fullName: function () {
    return this.name + " " + this.surname;
  },
};
// Object {} +name +surname + age +job +fullName() ->>>> person

console.log(person); // {name: 'John', surname: 'Doe', age: 40, fullName: ƒ} bunun __proto__  yada  [[Prototype]] baktigimizda asagida bir suru bu objecte ait metohdlar cikicak ve bunlari biz bu objecte uygulaya biliriz asagida bazilari ornek olrak verilmistir normalde bu objemizin prototype i  [object Object] dir
//ornekler :
console.log(person.toString()); // [object Object]
console.log(person.hasOwnProperty("name")); // true doner yani name adindan property varmi demek
console.log(person.isPrototypeOf());
console.log(person.name); // John
console.log(person.fullName()); // John Doe
/************************************************************************************************* */
let a = person.age;
console.log(typeof a); // number
let b = person.age.toString(); // objecte ait __proto__ su olan tostring metodunu kullandik ve numberi string yaptik  yani inherit yaptik. 9:20 dk
console.log(typeof b); // string

/************************************************************************************************* */

// OBJECT --> myObj aslinda myObj {} objeden turetiliyor yani protolar
const myObj = {}; // prototype yada __proto__ default var cunku objeye {} ait. bunlarin hepsi inhertinsli yani hep durmadan bir birinden miras aliyor toString(), hasOwnProperty....
console.log(myObj); // {}
console.log(myObj.toString()); // [object Object]

/************************************************************************************************* */

function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.fullName = function () {
    return this.name + " " + this.surname;
  };
}

// 🔽[Prototype]]:Object
// ▶️constructor: ƒ Person(name, surname, age)
// [[Prototype]]:Object

// OBJECT {} + name,surname,age,fullName() ---> Person ---> serson
// yani sersonun prototypi Person Personun prototypii OBject 17:00 dk
let serson = new Person();
console.log(serson);
console.log(serson.toString()); // object object doner -->>  normalde hata vermesi lazim cunku constructor methodunun boyle bir methodu yok, fakat bunu bu constructor bi onceki atasi olan Persondan personda atasi olan {} jeden inherit ediyor yani miras aliyor
console.log(person.hasOwnProperty("name")); // true normalde boyle bir methodda yok

// __proto__
console.log(serson.__proto__); // buda sersona ait prototypeleri gormemizi saglar . yine ayni objeye ait prototypler doner bi espirisi yok yani :)

let elis = new Person("Elis", "Cekic", 4);
console.log(elis);
// OBJECT {} + name,surname,age,fullName() ---> Person + job ---> elis 🔽
//OBJECT {} + name,surname,age,fullName() + job ---> Person  ---> elis
elis.job = "Child";
console.log(elis);
// burda biz prototype uzerine metod uzerine bir metod yazdik ve onu elis olarak degistirdik artik biz elis.toString() yaparasak objeect object yerine eliss doner.
elis.toString = function () {
  return "eliss";
};
console.log(elis.toString());

/********************************************************************************************************* */

// prototype kulanimi, olusturulmasi ve kullanilmasi  33:00 dk

function Humanity(name, age) {
  // ozel prototype yazili surname icin artik her defasinda ayri bir sey vermeye gerek yok

  this.name = name;
  // this.surname = surname; biz bunu burdan cikardik ve buna ozel bir prototype yazdik. 87 satir
  this.age = age;
}
//surname ozel prototype yazdik
Humanity.prototype.surname = "Cekic";

const human = new Humanity("Elis", 4); // surname icin bir parametre gondermedik cunku ona ozel prototype yazili default olarak artik humanity objenin icinde prototype olarak var. VE artik her hangi bir parametre gonderdigimizde onun surname protosu CEKIC olucak tekrar tekrar yazmaya gerek yok )))
// 🔽[Prototype]]:Object
//     surname:"Cekic"
const human1 = new Humanity("Arin", 6);
const human2 = new Humanity("Fehmi", 8);
const human3 = new Humanity("Prototurk", 10);

console.log(human);
console.log(human1);
console.log(human2);
console.log(human3);

/************************************************************************************************************* */

// inheritance = miras alma   36:00
// tanim --> bir nesnenin ozelliklerinin baska bir nesne tarafindan kullanilmasina inheritance denir ES5 bunu prototype inheritance olarak kullaniyoru yani ozelligi yada metodu kendi prototypedan aliyor javascriptin ES5 sinde.
// baska dillerde ise bu inheritance clasdan clasa degis tokus icin kullanilir

const Human = {
  name: "XXXXXXXX",
  surname: "XXXXX",
  age: 0,
  fullName: function () {
    return this.name + " " + this.surname;
  },
};

let star = Object.create(Human); // star diye obje actik humandan miras alarak
console.log(star); // {} humandan miras aldik ve prototype acip bakarsak butun ozelliker orda olur. artik star objesindede bunu kullana biliriz.
console.log(star.name); // XXXXXXXX  asilnda bu humandan geliyor fakat biz mirasci oldugumuz icin bunu kulana biliyoruz.

star.name = "ALFA"; // bu sadece star.name icin gecerli degisiklik olur xxxxxxx den ALFA olarak degisir yani humandan name miras aldigimiz icin humanin name:"xxxxx" degismez sadece kendisi icin gecerli olur.

console.log(star); // {name:ALFA}
console.log(star.name); //ALFA
console.log(Human); // {name: 'XXXXXXXX', surname: 'XXXXX', age: 0, fullName: ƒ}
console.log(Human.name); // XXXXXXXX

console.log(star.age); // 0 doner cunku kendine ait starin bir yasi yok suanlik onu miras aliyor humandan
star.age = 4;
console.log(star); // {name: 'ALFA', age: 4}
console.log(star.age); // 4 doner artik kendine ait yasi var oluyor

// burdada gelin kontrol edelim stara kendisine ait age,name,surname kendinin propertisi varmi diye;
console.log(star.hasOwnProperty("name")); // true  doner kendine ait propertisi var yukarda tanimladik
console.log(star.hasOwnProperty("surname")); //false doner kendine ait surname adinda propertisi yok cunku Humandan miras aliyor
console.log(star.hasOwnProperty("age")); // true doner kendine ait var propertisi yukarda tanimladik

console.log("surname" in star); // true doner kendine ait propertisi olmasada miras almasi yeterlidir cunku ownproperti demiyoruz.
