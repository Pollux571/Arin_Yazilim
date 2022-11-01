// !   06 : Class Part I, Neden Class?, Constructor Metodu

//constructor function

class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        // this.fullName = fullName;  // prototype actiysak buna gerek kalmiyor
    }
}

// function fullName(){
//     return this.name + " " + this.surname; prototype actiysak buna gerek kalmiyor
// }

Person.prototype.fullName = function () {
    // bunun yapmamizin sebebi her defasinda fonksiyonu calistirmadan bilgisayara agirlik vermeden protaya atip ordan alip kullanmak
    return this.name + " " + this.surname;
};

const ebuBekir = new Person("Ebubekir", "Basir", 3);
const osman = new Person("Osman", "Mushurov", 11);

console.log(ebuBekir);
console.log(osman);

// burda friends ozzeligi prototype dan gelidigi icin ikisininde arkadaslari aynidir
Person.prototype.friends = ["Ebubekir", "Osman"];
console.log(ebuBekir.fullName());
console.log(osman.fullName());
console.log(ebuBekir.friends);
console.log(osman.friends);
// ebubekire arkadas gonderilim normalde ebubekire arkadas eklenmesi lazim ama osmanada eklenicek cunku aldigi key:value leri prototypedan geliyor her ikisininde
ebuBekir.friends.push("Polat");
console.log(ebuBekir.friends); //['Ebubekir', 'Osman', 'Polat']
console.log(osman.friends); // ['Ebubekir', 'Osman', 'Polat'] normalde >>> olmasi lazim ['Ebubekir', 'Osman'] iste prototypein sikintisi
// iste boyle karmasik seylerin onunu almak icin devreye classlar giriyor


/********************************************************************************** */

// todo: class olusturma - CLASS DECLARATION
// class aslinda kendi kendine bir medotdur bir fonksiyondur
// en duzgun sekli bu boyle class olusturmak lazim metodlari ayri ayri yazmak lazim

class Person1 {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.friends = ["Ela", "Rüzgar"];
    }
    fullName() {
        return this.name + " " + this.surname;      // diger metodlarida ayri ayri yazmamiz lazim ve bunlar gennelikle protoya gider orda yerlesir
    }
}

const ebuBekir1 = new Person1("Ebubekir", "Basir", 3);
const osman1 = new Person1("Osman", "Mushurov", 11);

console.log(ebuBekir1);
console.log(osman1);
console.log(ebuBekir1.fullName());
console.log(osman1.fullName());

ebuBekir1.friends.push('Polat');
console.log(ebuBekir1.friends);  // ['Ela', 'Rüzgar', 'Polat']
console.log(osman1.friends);  // ['Ela', 'Rüzgar']  iste bu yuzden class kulanmak lazim her sey yerli yerinde calisir, ve prototype acmaya gerek kalmaz

console.log(Person1)

console.log(typeof Person1);


// todo: class expression    eger basinda let veya const yada var varsa bu expressiondur sadece function(){} yada class olarak olusturulduysa metodlar bunlarda declarationdur

const Person2 = class {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.friends = ["Ela", "Rüzgar"]
    }

    fullName() {
        return this.name + " " + this.surname
    }
}