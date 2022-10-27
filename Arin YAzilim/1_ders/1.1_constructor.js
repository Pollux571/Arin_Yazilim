// Constructor = method yapici olusturan

/****************************************************************************************************************************************************************************************** */
// 1- Person bizim bir tane method objedir
// 2- icinde bir obj degiskenine bir obje olusturduk ve oraya degerleri attik
// 3- bu degerlerde veri atmak icin asagidan person adi altinda new  PERSON actik ve degerleri atadik new Person yapmadan calismadi!! ve durmaadan yeni nesnler olusturarak buraya atarak dondure biliriz

// function Person(name, surname, age) {
//   const obj = {};
//   obj.name = name;
//   obj.surname = surname;
//   obj.age = age;
//   obj.fullName = function () {
//     return obj.name + " " + obj.surname;
//   };
//   return obj;
// }

// // normalde bunlarin hepsine ayri bir obje classi  acarak yazdirmak lazim ama constructor method bize sadece yeni bir veri turunu olusturarak onu obje classa  gondererek dondurmemizi sagliyor
// const person = new Person("Umar", "Basir", 55); //persona ait obje
// const person1 = new Person("Suleyman", "Bashirov", 45); //  yeni olusturulmus obje
// const person2 = new Person("Abdullah", "Qosimov", 35); //  yeni olusturulmus obje
// const person3 = new Person("Ziyodilla", "Jumabaev", 25); // yeni olusturulmus obje

// // ve boyle sonsuza kadar olusturarak gondere biliriz
// console.log(person);
// console.log(person1);
// console.log(person2);
// console.log(person3);

/****************************************************************************************************************************************************************************************** */
// 1- yol***
// 1- Huamam  =  function constructor class bu yazimda olur fakat asagida oldugu gibi Human class daha dogru yazimdir

function Humam(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.fullName = function () {
    return this.name + " " + this.surname + " " + this.age;
  };
}
// 2 - yol***
// 2- Human   =  class construtor   bu daha dogru yazimli classdir.
class Human {
  constructor(name, surname, age) {
    console.log(this); // burda sadece veriler alindiktan sonra ne olduguna bakiyoruz this ne anlama geldigin anlamak icin

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function () {
      return this.name + " " + this.surname + " " + this.age;
    };
    console.log(this); // butun veriler aldiktan sonra thisin ne dondurdugu ve ne anlama geldigini goruyoruz.
  }
}

// 1_ dersde 72 satirda  yeni obje eklemek icin degiskene yeni obje yazip onu iceri gonderiyorduk. fakat artik bunu new ile hizli bi sekilde yaparak gondere biliyoruz.
// 2-new demek yeni bir bos constructo obje olustur demek , eskiden bunu elle yaziyorduk 1_ders 72 satirda ornek var
const human = new Human("EbuBekir", "Basir", 2.5);
const human1 = new Human("Osman", "buyukDayi", 12);
console.log(human);
console.log(human1);

// 3-yol***
// yeni nesil object olustruma ama yukardaki en guzel en duzgun en mantiklisi ve en anlasilir olani bunu sadece bilgi olsun diye yaziyorum
const yeniNesil = new Object();
yeniNesil.name = "Suleyman";
yeniNesil.surname = "Basir";
yeniNesil.age = 28;
yeniNesil.fullName = function () {
  console.log(this);
  return this.name + " " + this.surname;
};

console.log(yeniNesil.name);
console.log(yeniNesil.surname);
console.log(yeniNesil.fullName()); // eger burda () olmadan sadece fullName olarak yazsaydik bize sadece butun function yazilimini cikarirdi asagida ornek var
console.log(yeniNesil.fullName);

// 4-yol***
// Object.create() method ile yeni nesne olusturma
// yeni bir nesne olusturarak eski nesneyi kullaniyoruz.
const car = {
  name: "Mercedes-Benz",
  seria: "MyBach_680",
  year: 2022,
  fullCarName: function () {
    return this.name + " " + this.seria;
  },
};
console.log(car);

// burda biz car objesini cektir simdi icindeki name,seria,year verilerini kullanarak yeni bir obje olusturucaz. normalde biz bu car objesinin icine parametre atsaydik calismazdi ayni seyler tekrar tekrar cikardi ama yeni obje acarak carin icindeki propertyleri kullaniyorz.
const newCar = Object.create(car);
newCar.name = "BMW";
newCar.seria = "E450";
newCar.year = 2025;
// newCar.fullCarName = function () {
//   return this.name + " " + this.seria;  // bu fullCarName fonksiyonunu yazdirmadan asagida sadece cagirsaydik 111 satirda oldugu gibi yine cikti alirdik.
// };

console.log(newCar);
// console.log(newCar.name);
// console.log(newCar.seria);
// console.log(newCar.year);
console.log(newCar.fullCarName());

s;
