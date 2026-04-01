function showMessage(){

    alert("This massage is inside the function");

}

showMessage()


function sum(number1, number2){

    return number1 + number2;

}


console.log(sum(25,5));


function tocelsius(f){

    return (5/9) * (f-32);

}

console.log("54 fahrenheit is equal to " + tocelsius(54) + " celsius");


function dsFunction(){

    var localVar = "Digital School";

    alert(localVar);

}

dsFunction()


function minsec(min, sec){

    return min * sec;

}

console.log(minsec(60,60));


var car = {name:"Mustang",

           color:"black",

           year: 1999,

           kilometers: 15739,

           startEngine : function(){

            alert("Vrooom vrooom!!!")

           },

           get getKilometers(){

            return this.kilometers;
           
           },

           set setKilometers(km){

            this.kilometers = km;
           
           }

        };

alert(car.name);

car.startEngine();

console.log(car.getKilometers);

car.setKilometers = 100;

console.log(car.getKilometers);


var computer = new Object();

computer.name = "Lenovo";

computer.CPU = "Intel core i7";

computer.RAM = "16GB";

computer.GPU = "GeForce GT730 2GB Dual DP HP";


computer.type = function(){

    return this.name + ", " + this.CPU + ", " + this.RAM + ", " + this.GPU;

};


alert(computer.GPU);

alert(computer.type());

delete computer.GPU;

alert(computer.GPU);


var computer = new Object();


computer.name = "Lenovo";
computer.CPU = "Intel core i7";
computer.RAM = "16GB";
computer.GPU = "GeForce GT730 2GB Dual DP HP";


computer.type = function(){

    return this.name + ", " + this.CPU + ", " + this.RAM + ", " + this.GPU;

};


alert(computer.GPU);

alert(computer.type());

delete computer.GPU;

alert(computer.GPU);