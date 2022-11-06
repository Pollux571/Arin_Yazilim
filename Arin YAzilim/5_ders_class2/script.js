// !  07 : Class Part II, Extends Subclass, Super, Extends

// todo: classlar aslinda ozel bir fonksiyonlardir

const Person = class {
  // constructor metodunun 2 gorevi var,//? 1. hafızada yeni bir obje oluşturur. const obj = new Person("...");
  // ? 2. this anahtar kelimesini o objeye bağlıyor yani ("Tashkent", "Ozbekistan", 571);
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.friends = ["Ela", "Rüzgar"];
  }

  fullName() {
    return this.name + " " + this.surname; // clasin icinde olusturulan fonksiyonlar her zaman protonun icinde yer alir
  }
};
console.log(typeof Person); // function doner

const obj = new Person("dunya", "yeryuzu", 10000); // obj person klasindan turetilen objedir yani obj personun instns sidir.
const araba = new Person("Bwm", "600", 5); // araba person klasindan turetilen objedir yani araba personun instns sidir.
console.log(obj instanceof Person); // instance // true doner
console.log(obj);

// ! burdan sonra  Class metodlarini giriyoruz
console.log(obj.fullName()); // dunya yeryuzu

// todo: asagisi burdan basliyor
// hata verir normalde benim mantigima gore yazim dogru her sey dogru. hata vermesinin sebebi burda fullname hangi person diyor belli degil diyor 1000 lerce person vardir diyor belkide objnin fullnameini istiyorsun diyor yada arabanin objesinin fullnameni diyor.
//  console.log(Person.fullName()); // ! Uncaught TypeError: Person.fullName is not a function,
// todo: yukarisi buraya kadar

// todo: STATIC metod
// todo: neden class lazim ? class ihtiyaç en temel sebebi: nesne yönelimli programlamada(oop) mümkün olduğu kadar problemleri parçalara ayırmak(ki buna modülerleştirme denir) bizim işimizi kolaylaştırır. Sonra programı geliştirirken işi kolaylaştırır. Hata yakalamayı kolaylaştırır. O classlar instance'ların yani kendilerinden türetilecek olan nesnelerin bir şablonu bir şablonu görevi görürler. Classlar nesnelerin şablonudur.
const Cars = class {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.friends = ["Ela", "Rüzgar"];
  }

  static fullName() {
    return this.name + " " + this.surname;
  }

  static showName = "Person";

  static stateMethod() {
    console.log("static metod calisti");
  }
};

console.log(Cars.showName);
console.log(Cars.stateMethod()); // static metod calisti  //? script.js:52 static  ,
// ! undefined          // ?script.js:58
// ? normalde burda her sey calisti undifend vermesinin nedeni chrome dan kaynaklanan engine problemi yoksa her sey yerli yerinde
console.log(Cars.fullName()); // calismaz cunku static tanimli degil class metodunun icindeki veriye ulasmak icin static diyerek tanimlalamiz lazim

// ! EXtends

class Person1 {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  fullName() {
    return this.name + " " + this.surname;
  }
}
const arin = new Person1("Arin", "Çekiç", 5);
class Engineer extends Person1 {} // Engineer -->Subclass (Child) Person --> Superclass (Parent)
const gurcan = new Engineer("Gürcan", "Çekiç", 40);

console.log(arin); // proto = Object
console.log(gurcan); // proto = Person1 cunku miras aliyoru person1den

console.log(arin instanceof Person1);
console.log(gurcan instanceof Engineer);
console.log(gurcan instanceof Person1); // true donmesinin sebebi engineer extends edildi person1 e.
console.log(arin instanceof Engineer); // false doner cunku bu Superclass baba clasin Person1 kendinisinin cocucugu

// ! SUPER metodu
// ! burdada engineer kendisinin ozelliginin olmasini istedik

class Person2 {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  fullName() {
    return this.name + " " + this.surname;
  }
}

class Engineer1 extends Person2 {
  constructor(name, surname, age, job) {
    // ! super metodu
    super(name, surname, age); // super demek:name,surname,age, ozelliklerini ana clasdan al demek yani Person2 den ve biz bir seye super degiskeni verdigimiz zaman icindeki ozellikleri tanimlamamiz sart lazim
    this.job = job;
  }
  getMoney() {
    console.log("Para kazan mubarek Suleyman");
  }
}

const arin1 = new Person2("arin", "cekic", 5);
const gurcan1 = new Engineer1("Gurcan", "Cekic", 6, "Enginer"); // burda name,surname,age Person2 den aliyor cunku super tanimli fakat jobu ise engineer jobdan aliyor yukarda Person2 de name,surname,age tanimlamasak eger biz burda isim soyisim ve yasi goremeyiz
console.log(arin1);
console.log(gurcan1);
// OBJ + (name,surname,age) => Person2 yi olusturuyor
// Person2 + job, getmoney() => Engineer olusturuyor
console.log(gurcan1.getMoney()); //  Para kazan mubarek Suleyman
// console.log(arin1.getMoney());   // hata verir cunku extend edilern arin1= new Person2 degil bu ana superClass getMoney Engeneer e ait

// ! simdi burda super metohodsuz ve super methodla hata ayiklama gorucez ve engeneerada propertyler tanimliyicaz farkli bi ornek

class Person3 {
  // ! constructorun ilk yaptigi is nesne olusturmak ve onu this ile baglamak
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  fullName() {
    return this.name + " " + this.surname;
  }
}

class Engineer3 extends Person3 {
  constructor(name, surname, age, job) {
    super(name, surname, age); // todo:  o yuzdende this.name,this.surname,this.age leri almak icin biz super medonu kullaniyoruz. Person3 den aliyoruz.
    //  this.name = name;
    //  this.surname = surname;  // ! burayi acarsak ve supei kaptirsak hata aliriz
    //  this.age = age;
    //  this.job = job;
  }
  getMoney() {
    console.log("Para kazan mubarek Suleyman");
  }
}

const gurcan3 = new Engineer3("Gurcan", "Cekic", 6, "Enginer"); // Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// at new Engineer3 (script.js:138:4)
// ! extend edilen subclass(yani children Engeneer3) icindeki consructor medotu obje olusturmaz her zaman boyledir subclasslarin icindeki constructorlar obje gorevini gormez.yeni nesne olusturup bizi ona baglamiyor. nesneyi persondan aliyor ve ondan bekliyor cunku subclass ve extend edilmis durumda.
// ! at script.js:148:17  hata verir cunku ikinci olusturgumuz obje yani engenner3 icindeki constructor name,surname,age bunlar aslinda obje gorevini gormez. engeener objeyi person3 den alir. person3 deki objedir
// todo:  o yuzdende this.name,this.surname,this.age leri almak icin biz super medonu kullaniyoruz.

// farkli bir ornek sadece ornek 45:00 dk

class ExtendedArray extends Array {
  // ! Array = javascriptin kendi medotu []

  shuffle() {
    this.sort(() => Math.random() * -0.5); // sort unicode gore calisir [1,2,3,4,5] doner aslinda burdaki koda calismadi videodada.
  }
}

let myArr = new ExtendedArray(1, 2, 3, 4, 5);
console.log(myArr instanceof ExtendedArray); // true
console.log(myArr instanceof Array); // true
console.log(myArr);
myArr.shuffle();
console.log(myArr);
