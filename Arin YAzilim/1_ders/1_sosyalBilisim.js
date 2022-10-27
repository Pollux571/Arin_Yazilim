/*         OBJECTS  ******                        03- video ARIN YAZILIM*/

// 1 -  property = name,surname,age, language, fullName, adress== 6 tane var

// 2 -   ama nesne ile iliskili olan fonksiyonlara yani fullName  method denir;

// 3 - nesne propertylerden olusur propertiler toplami = nesne

// 4-  objelerin(nesne) olusturma  amacimiz aslinda bir seyleri bir yere toplayarak kolay ulasimi saglamaktir. bir birine bagli seyleri. yoksa her yerde her sey olur ve daginik durur.


// const person = {
//   name: "John",
//   surname: "Doe",
//   age: 40,
//   language: ["Turkish", "English", "Spanish"],
//   fullName: function () {
//     return this.name + " " + this.surname; // this = person demek
//   },

//   address: {
//     city: "Balikesir",
//     district: "Akcay",
//   },
// };


/************************************************************************************************************************************************************ */
/* OBJECT LITERAL */
// const person1 = {
//   name: "John",
//   surname: "Doe",
//   age: 40,
//   fullName: function () {
//     return this.name + " " + this.surname; // this = person demek
//   },
// };

// console.log(person1);

// // dot notation = nokta . ile icerdeki keylere ulasilir ve bunun neticesinde keyin icindeki biz degeri(value) yazdiririz

// console.log(person1.name);
// console.log(person1.surname);
// console.log(person1.age);
// console.log(person1.fullName);
// /* OUTPUT
// ƒ () {
//     return this.name + " " + this.surname; // this = person demek
// }
// */
// // bu boyle calismaz fonkiyonun icindeki degeri gormek icin fullName(); fonksiyon cagrilir;
// console.log(person1.fullName()); // JOHN DOE

// //// person icine veri gonderme

// person1.job = "Student";

// console.log(person1);
// console.log(person1.job);

// // bracket Notation = []

// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["fullName"]()); // ['fullName']();    boyle cagirilir syntax boyle .
// console.log(person["na" + "me"]); //>> name // 'na'+'me' boyle yazdirsakda olur ama gerek yok sadece ornekti.


/*************************************************************************************************************************************************************** */

// // yeni bir nesne olusturarak yukardaki person nesnesine ekliyoruz.
// const person2 = {
//   name: "John",
//   surname: "Doe",
//   age: 40,
//   fullName: function () {
//     return this.name + " " + this.surname; // this = person demek
//   },
// };


// person2.address = {}; //obje olusturuludu ve person2 objesinin icine gonderildi

// console.log(person2);
// person2.address.city = "Istanbul"; // adres objesine city keyi verildi ve degeri istanbul olan nesne gonderildi
// console.log(person2);
