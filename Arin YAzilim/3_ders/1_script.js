// ! JavaScript Karmaşasi : 05 : Object Part III, Destructuring, Spread, Rest, Yeni Söz Dizimleri

// ?  new Object syntax

/************************   1 shorthand properties   *******************/

let name = "EbuBakr", age = 3;

const myObj = {
  name: name,
  age: age,
};

console.log(myObj.name); //Ebubakr
console.log(myObj.age); // 3
console.log(name); // EbuBakr
console.log(age); //3

//eger boyle tek property yani key value degismiyeck obje olucaksa name:name yada age:age yazma yerine bunlari tek tek name,age yazsakda olur.

const myObj1 = {
  name, // ! shorthand properties
  age,
};

console.log(myObj1.name); // Ebubakr
console.log(myObj1.age); // 3

/***************************************************************************************** */

/************************************* 2-Computed Property Name  ****************************/

// Eski usul objeye propertyi(key) atama;
let prop1 = "name";
let myObj2 = {}; // ilk obje olusturululdu sonra icin key:value atanirdi  atanairdi

myObj2[prop1] = "suleyman"; // bracet []  kullaniyoruz property atamak icin
console.log(myObj2); //  {name: 'suleyman'}

// Yeni usul ES6 ise
// obje olusturdugumuzda artik direk icin key:value ataya biliyoruz

let prop2 = "name";
let myObj3 = {
  [prop2]: "Umar",
};

console.log(myObj3); //  {name: 'Umar'}

/************************************************************************************************ */

/********************************** 3-Short Method Syntax    ***************************************/

const myObj4 = {
  name: "Meryem",
  surname: "Doe",
  age: 0,
  fullName: function () {
    //bu bir method aslinda hepsi bir metod () shunada invok denir
    return this.name + " " + this.surname + " " + this.age;
  },
};
console.log(myObj4);
console.log(myObj4.fullName());

const myObj5 = {
  name: "Meryem",
  surname: "Doe",
  age: 0,
  // aslinda yukardaki fullName metodunu soylede yazabiiriz ve kolayda property(key) vermeden
  fullName() {
    return this.name + " " + this.surname + " " + this.age;
  },
};
console.log(myObj5);
console.log(myObj5.fullName());

/************************************************************************************************ */


                                 // ! 4 -  Object Destructuring - Nesne parcalama

// bir nesnenin icindeki degerleri degiskenlere atamak  icin kullaniriz. ve farkli yerlerde bunlari cagiririz
// Destructuring ilk once array ler icin kulanildi sonrada objeler icin kulanilmaya baslandi !

const person = {
    name1: "Usman",
    surname1 : "Usmanov",
    age1: 3,
    function(){
        this.name +" "+ this.surname
    }
}
// eski usul atama
// eger key value 50 tane olsa boyle tek tek atamak cok zor ve dogru olmaz
let myVar = person.name1;
let myVar1 = person.surname1;
console.log(myVar);
console.log(myVar1);

// yeni nesil atama
// let {property:degisken, property:degisken} = objemizin ismi
// let {name: myVar2, age:myVar3} = person;  // tek satirda degerleri farkli degiskenlere atadik
// console.log(myVar2); // Usman
// console.log(myVar3); // 3
// daha duzgun ve kisa yazim sekli aslinda soyledir
// let {name1:name1, age1:age1} = person
let { name1, age1 } = person;   // kisa sekli
console.log(name1);
console.log(age1);

// ornek

const books = [
    {
      title: "Kirmizi Pazartesi",
      author: "Haruki Murakami",
      pageNum: 296,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0000000064101-1.jpg",
      topic: "1968-1970 yillari arasinda geçen olaylar, o günün toplumsal gerçeklerini de satirlara taşiyor. Ama romanin odağinda bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgâriyla hareketlenen İmkânsizin Şarkisini ölümle erken karşilaşan gençlerin hayati yönlendiriyor. Hiçbir şeyin önem taşimadiği, amaçsizliğin ağir bastiği, özgür seksin kol gezdiği bir öğrenci hayati... Ama diğer yanda da yoğun duygular var... İmkânsiz aşklar, imkânsiz şarkilar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dişinda da çok kişi tarafindan sahipleniliyor."
    },
    {
      title: "Şeker Portakali",
      author: "Jose Muro de Vasconselos",
      pageNum: 200,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0000000064031-1.jpg",
      topic: "İrlandali yazar Bram Stoker'in, iki taraf arasindaki bu irade ve güç çatişmasini işlediği ve korku edebiyatinin başyapitlarindan biri sayilan Dracula, yayimlanmasinin üzerinden yüz yili aşkin süre geçmesine karşin, bugün de ayni ilgiyle okunuyor."
    },
    {
      title: "En Uzun Yüzyil",
      author: "İlber Ortayli",
      pageNum: 296,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001744876001-1.jpg",
      topic: "1968-1970 yillari arasinda geçen olaylar, o günün toplumsal gerçeklerini de satirlara taşiyor. Ama romanin odağinda bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgâriyla hareketlenen İmkânsizin Şarkisini ölümle erken karşilaşan gençlerin hayati yönlendiriyor. Hiçbir şeyin önem taşimadiği, amaçsizliğin ağir bastiği, özgür seksin kol gezdiği bir öğrenci hayati... Ama diğer yanda da yoğun duygular var... İmkânsiz aşklar, imkânsiz şarkilar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dişinda da çok kişi tarafindan sahipleniliyor."
    },
    {
      title: "Dracula",
      author: "Bram Stoker",
      pageNum: 200,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001828853001-1.jpg",
      topic: "İrlandali yazar Bram Stoker'in, iki taraf arasindaki bu irade ve güç çatişmasini işlediği ve korku edebiyatinin başyapitlarindan biri sayilan Dracula, yayimlanmasinin üzerinden yüz yili aşkin süre geçmesine karşin, bugün de ayni ilgiyle okunuyor."
    },
    {
      title: "Karamazov Kardeşler",
      author: "Fyodor Mihayloviç Dostoyevski",
      pageNum: 200,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001803800001-1.jpg",
      topic: "İrlandali yazar Bram Stoker'in, iki taraf arasindaki bu irade ve güç çatişmasini işlediği ve korku edebiyatinin başyapitlarindan biri sayilan Dracula, yayimlanmasinin üzerinden yüz yili aşkin süre geçmesine karşin, bugün de ayni ilgiyle okunuyor."
    },
    {
      title: "Sultanin Korsanlari",
      author: "Emrah Safa Gürcan",
      pageNum: 296,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001780787001-1.jpg",
      topic: "1968-1970 yillari arasinda geçen olaylar, o günün toplumsal gerçeklerini de satirlara taşiyor. Ama romanin odağinda bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgâriyla hareketlenen İmkânsizin Şarkisini ölümle erken karşilaşan gençlerin hayati yönlendiriyor. Hiçbir şeyin önem taşimadiği, amaçsizliğin ağir bastiği, özgür seksin kol gezdiği bir öğrenci hayati... Ama diğer yanda da yoğun duygular var... İmkânsiz aşklar, imkânsiz şarkilar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dişinda da çok kişi tarafindan sahipleniliyor."
    }
    ]

    // destructing kullandik objeye ait title ve autorhor bilgilerini aldik yani objeyi parcaladik
    for(const {title, author,pageNum} of books){
        console.log( title, author,pageNum);
        console.log("Kitap Ismi:"+ " " + title + ": Yazar " + author + ": Sayfa " + pageNum);
    }


                             // ! 5 - Spread operatoru = uc nokta (...)
// spread operatorunu biz var bir ozzeligi kopyalamada yada var olan nesneleri birlestirmede

 const rayon = {
    name: "TTZ-2",
    city: "Tashkent",
    age: 27,
    fullName(){
             this.name + " " + this.city + " " + this.age
    }
}
console.log(rayon)

let rayon1 = {...rayon}; // {name: 'TTZ-2', city: 'Tashkent', age: 27, fullName: ƒ}
console.log(rayon1); //   {name: 'TTZ-2', city: 'Tashkent', age: 27, fullName: ƒ}

// nesneleri birlestirme ornegi
// var olan nesnelerden yeni nesneler olusturmak

const nesne1 = {
    name: "EbuBakr",
    surname:"Basir",
    age: 3
}

const nesne2 = {
    job: "Oyun Oynamak",
    gender:"Erkeklerin Erkegi"
}

const  birlestir = {...nesne1, ...nesne2};  //{name: 'EbuBakr', surname: 'Basir', age: 3, job: 'Oyun Oynamak', gender: 'Erkeklerin Erkegi'}
const  birlestir1 = {...nesne1, nesne2};  // hata verir cunku spread koymadik nesne2 onune sadece nesne1 doner {name: 'EbuBakr', surname: 'Basir', age: 3, nesne2: {…}}
console.log(birlestir);
console.log(birlestir1);

// kendimizde nesneye key:value ekeleye biliriz istersek soyle bir bicimde
const birlestir3 = {...nesne1, okul:"Hayat okulu" , ...nesne2};
console.log(birlestir3);

/************************************************************************************************ */



                               // ! 6 -  Rest Operator in Object Literals
 // bu normal hali
  const cars = {
        carName:"Mercedes-Benz",
        seria:"MyBach",
        year:2022,
        function(){
            this.name + " " + this.seria + " " + this.year
        }
  }

  console.log(cars);
//   const {carName ,seria,year} = cars


// simdide rest operatoru ile yapicaz
 const {carName, ...rest} = cars  // restin yerine hergangi bir isim verebiliriz
 console.log(carName);
 console.log(rest);
 console.log(carName,rest);
/******************************************************************************************** */

                             // !7 - Object Values - Object Entries

 const person32 = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName() {
        return this.name + " " + this.surname
    }
}
console.log(Object.keys(person32));
console.log(Object.values(person32));
console.log(Object.entries(person32));

