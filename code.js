var myName = "Liam"

myName = 8

// console.log(myName)

//================= Declaration and Assignment====================
var a;
var b = 2;

a = 7

b = a ;

// console.log(a);

//================= "adding" variabes to ones that are undeclared/ declared ====================

var d = 6;

var e = 9;

var f = "This is a ";

// operations of variables

d = d + 2;

e = e - 3;

f = f + "link of words"

//console.log(f)

//================= Finding the length using: .length====================

var calcOfFirstName ;
var firstName = "Liam" ;

calcOfFirstName = firstName.length

// console.log(calcOfFirstName)

//================= Finding the first value of ......====================

var firstLetterOfName; 
var FiirstName = "Johnny";

firstLetterOfName = FiirstName [3];


// console.log(firstLetterOfName)

//================= Finding the last value of ......====================

var firstLetterOfName; 
var FiirstName = "Johnny";

firstLetterOfName = FiirstName [FiirstName.length - 1];


// console.log(firstLetterOfName)

//================= (function) Wordblanks ......====================

function wordGame( aProNoun, anAdjective, aVerb, anAdverb) {

    var result = "";
    result += "the" + " " + anAdjective + " " + aProNoun + " " +  aVerb  + " " + anAdverb  + " " +"pass the old man";

    return result;

}



// console.log(wordGame("cat" , "fat", "skated", "swiftly" ) ) ;
// console.log(wordGame("dog" , "skinny", "walked", "smoothly" ) ) ;

//================= example of an Array====================

var myArray = ["Liam", 18]

//================= example of an Nested Array====================

var myArrieay = [["Liam", 18] , ["Keagan" , 19]]

//================= example of how to modify an Array====================

var ourArray = [70 , 45 , 30]
ourArray[2] = 12

// console.log(ourArray)

//================= example of how to select multidimentionsl  Array's====================
var ourArray2 = [[1,2,3] , [4,5,6] , [7,8,9] [[10,11,12] , 13 , 14 ]] ;

var dispArray = ourArray2[2];
// console.log(dispArray);

//================= example of .push -Array-====================

var ourArray3 = [["Indigo" , 1629], ["OVO" , 89]];
var removedArray = ourArray3.pop();

// console.log(removedArray)

//================= example of .push -Array-====================

var ourArray3 = [["Indigo" , 1629], ["OVO" , 89]];
var removedArray = ourArray3.shift();

// console.log(removedArray)

//================= example of .push -Array-====================

var ourArray3 = [["Indigo" , 1629], ["OVO" , 89]];
ourArray3.shift();

ourArray3.unshift(["happy J" , 29]);

// console.log(ourArray3)


//================= example function====================

function myVeryFirstFunction() {
    // console.log("EverythingBoz")
}

myVeryFirstFunction();

/*
function my2ndFunction() {
    console.log("Trippie")
}
my2ndFunction();
*/

//================= example function passing values with arguments====================

function ourFunctionWIthArgus( a, b) {
    // console.log(a - b)
};

ourFunctionWIthArgus(10, 5)


//================= example of LocalScope ===================

function myLocalScope() {
    let myVar= 5;
    console.log(myVar);
}

// myLocalScope();

//=================  LocalScope vs GlobalScope ===================

var Drip = "Sneakers"

function Swag() {
    var Drip = "Hoodie"

    return Drip;
}

// console.log(Swag()); //Local Scope

// console.log(Drip);   //Globa; Scope

//=================  Example of Return in Function ===================


function aRandomNumb(numb) {

    return numb - 9
};

// console.log(aRandomNumb(10)) ;

//================= Example of Boolean ===================

function Boolean(maybe) {
    if (maybe) {
    return "yes, it is a maybe";
}
    return "no, its not a maybe"
}
    
function trueOrFalse(WasThatTrue) {
    if(WasThatTrue){
        return "yes, it was true"
    }

    return "no, that was false"
}

//console.log(Boolean(true));


//================= Example of Boolean Equality Operaors===================

function testingOfEquality(val) {
    if (val === 15) {
        return "Equal";
    }
    return "Does not equal";
} 


// console.log(testingOfEquality('15'))

//=================  Example of Boolean Stict Equality Operaors===================
/*
function testingOfEquality(val) {
    if (val === 15) {
        return "Equal";
    }
    return "Does not equal";
} 


console.log(testingOfEquality(65))

*/

//=================  Example of Inequaility Operator===================

function InequailityOpp(gal) {
    if (gal != 33) {
        return "Not equal"
    };

    return "does Equal";
};

//  console.log( InequailityOpp(33)) ;

 //=================  Example of logical Operator (just play around with the >greater than and <less than)===================


 function greaterThanOrLessThan(kal) {
    if (kal > 200) {
        return "greater than 2klip"
    };
    return "less than 2klip";
 };

//  console.log(greaterThanOrLessThan(150))



  //=================  Example of logical Operator with and function===================

  function greaterThanOrLessThan(kal) {
    if (kal > 200 && kal< 300) {
        return "Yes"
    };
    return "No";
 };

//  console.log(greaterThanOrLessThan(250))

  //=================  Example of logical Operators with Or statement===================

  function testingOfOrStatements(pal) {
    if( pal >10 ||  pal < 0) {
        return "outside";
    }

    return "inside";
  }

  //console.log(testingOfOrStatements(3)) ;

    //=================  Example of Else statements===================

    function testOfElse(hal) {
        var remote = ""

        if( hal > 5){
            remote = "Bigger than 5";
        }
        else {
            remote = "5 or less";
        }

        return remote;
    }

   // console.log(testOfElse(9));

  //=================  Example of Else If statements===================

       function testOfElseIf( ual) {
        if (ual  > 10) {
            return "greater than 10";
        }
        else if ( ual < 5 ) {
            return "smaller than 5"
        }
        else {
            return "Between 5 and 10"
        }
       
        
       }

      // console.log( testOfElseIf( 6))

 //=================  Example of Switch Statement // So instead of using a long string of If Else statements===================

 function egCaseStatement( ans) {
    var name = "" ;
    switch(ans) {
        case 1 :
            name="Numb1"
            break;

        case 2 :
            name="Numb2"
             break;

         case 3 :
            name="Numb3"
             break;
    }

    return name;
 }

 //console.log(egCaseStatement( 3))

   //=================  Example of Switch Statement (default value )===================

   function egDefaultStatement( answer) {
    var names = "" ;
    switch(answer) {
        case 1 :
            names="Numb1"
            break;

        case 2 :
            names="Numb2"
             break;

         case 3 :
            names="Numb3"
             break;

        default:
            names = "the value besides 1,2 or 3 ";
            break;
    }

    return names;
 }

 //console.log(egDefaultStatement(3))

 //=================  Example of Switch Statement (multiples values with the same output)===================

 function multipleCaese (oal) {
    var height = "" ;
    switch( oal) {
        case 1 :
        case 2 :
        case 3 :
            height = "low"
            break;

        case 4 :
        case 5 :
        case 6 :
            height = "Medium"
            break;
        

        case 7 :
        case 8 :
        case 9 :
            height = "High"
            break;
    }

    return height;
 }

 //console.log(multipleCaese (8))


  //=================  Objects ===================

  var myCar ={
    "type" : "BMW",
    "tyre" : 4,
    "colour":"silver",
    "petrol" : ["a lot"]
  }



//=================  Objects ( Dot Notation)===================

    var myCar ={
    "type" : "BMW",
    "tyre" : 4,
    "colour":"silver",
    "petrol" : ["a lot"]
 }

 var carProp = myCar.colour

 //console.log(carProp)


//=================  Objects (Bracket Notation)===================

var myCar ={
    "type" : "BMW",
    "tyre" : 4,
    "colour":"silver",
    "petrol" : ["a lot"]
 }

 var carProp = myCar[ 'petrol']

 //================getting objects properties using variables======================

 var testOfObj ={

    "liam" : "Engel",
    "Johnny": "Bravo",
    "Harry" : "Kane"
 };

 var playerSurname = "liam";
 var surname = testOfObj[playerSurname]

// console.log(surname)

  //================Updating objects properties ======================

  var myGames ={
    "name" : "God Of War",
    "type" : "Action, Adventure",
    "length" : "2 hrs"
  };

  // NTS* You can basically update using the dot notaion
  myGames.name = "NFS";

 // console.log(myGames["name"])

//================Adding new properties to an objects======================


  var myGames ={
    "name" : "God Of War",
    "type" : "Action, Adventure",
    "length" : "2 hrs"
  };

  myGames['release date'] = '18 April 2020';

//  console.log(myGames)

//================Deleting properties from objects======================

var myGames ={
    "name" : "God Of War",
    "type" : "Action, Adventure",
    "length" : "2 hrs"
  };

  delete myGames["name"];

 // console.log(myGames)

//================Check if object has a property using (.hasOwnPropert)======================

var CheckProp = {
    "example 1" : "green",
    "example 2" : "red",
    "example 3" : "blue"
};

function Checking(IfItHas){

    if (CheckProp.hasOwnProperty(IfItHas)){
        return CheckProp[IfItHas];
    }
    else {
        return "It Does Not Exist"
    }
};

//console.log(Checking("example 9"))

//================Accessing nested Objects======================

var myStorage = {
    "car" : {
        "inside" : {
            "glove Box" : "maps",
            "passenger seat": "crumbs"
        },
        "outside" : {
            "trunk" : "jack"
        }
        }
    };

    var AccessMyStorage = myStorage.car.inside["passenger seat"];

 //   console.log(AccessMyStorage)


//================Accessing nested Arrays======================

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list : [
            "tall tree",
            "small tree",
            "A lekka tree"
        ]
    }
];

var PickingItOut = myPlants[1]. list[2];

//console.log(PickingItOut);


//================While Loop==========================================

var myArray = [];

var i = 0;
while (i < 5) /* i is less than 5*/{
    myArray.push(i) ;
    i++;
}

//console.log(myArray);

//================For Loops============================================

var AnArray = [] ;

// first the initialization, then the condition and then incrimentation
for( var w = 5; w < 10; w++ ){
    AnArray.push(w)
}

//console.log(AnArray)

//================For Loops with odd or even values '+='============================================

var AnArray = [] ;

for( var w = 0; w < 10; w += 3 ){
    AnArray.push(w)
}


// console.log(AnArray)

//==================Counting backwards using Loops============================================

var AnArray = [] ;

for( var w = 10; w > 0; w -= 2 ){
    AnArray.push(w)
}

//console.log(AnArray)

//==================Adding an Array using For Loops============================================

var ourArr = [1 , 2, 3, 4];
var ArrTotal= 0 ;

for (var p = 0; p <ourArr.length; p++) {
    ArrTotal += ourArr[p]
};

//console.log(ArrTotal);


//================== Factory function ============================================



function personDetails(name, surname, age) {
    return {
        name,
        surname,
        age,
        display: ()=> {
            console.log(`
            Name: ${name}
            Surname: ${surname}
            Age: ${age}`);
        }
    }
}


 let person1 = personDetails('Peter', 'Henk', 20);
 let person2 = personDetails('Lerato', 'Mayer', 30);
// person1.display();
 console.log(person1);
 console.log(person2);


// person2.display();
// console.log("==============");
// let person2 = personDetails('Lerato', 'James', 25);
// Object.prototype.greeting = function() {
//     console.log(`Hello there, my name is ${person2.name}`);
// }
// console.log(person2);
// console.log(Object.prototype === person2.__proto__);
// constructor function
// function PersonDetails(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
// }
// PersonDetails.prototype.display = function () {
//     console.log(`
//     Name: ${this.name}
//     Surname: ${this.surname}
//     Age: ${this.age}`);
// }
// let person1 = new PersonDetails('Lerato', 'Mike', 30);
// let person2 = new PersonDetails('Tebogo', 'James', 29);
// console.log(person1);
// console.log(person2);
// person1.display();
// person2.display();

//=========================== Constructor Function ============================================================

// Class Person

class Person{
    // Attribute declaration
    #name;
    #surname;
    #age;
    constructor(name, surname, age) {
        this.#name = name;
        this.#surname = surname;
        this.#age = age
    }
    display() {
        console.log(`
        Name: ${this.#name}
        Surname: ${this.#surname}
        Age: ${this.#age}`);
    }
}
//let person1 = new Person('Peter', 'Henk', 20);
person1.display();


//================== Error Function ============================================





//================== For Each ====================================================

const forEachEXample = [1, 2, 3, 4, 5, 6];

function funcForEachEg( item, index, arr) {
    console.log( 'a [' + index + ']=' + item);
};

forEachEXample.forEach((item, index, arr))

//================== Array Constructor ============================================
//Array constructor
let numbers = new Array( 8, 4, 'Green', true, 98.6);
//Maps
/*console.log( numbers.map( (item) => {
    return item * item;
}));
*/
//==============================  Reduce  ==============================================

//console.log(numbers.reduce( (c , n ));

// ==============================join===============================================

//console.log( numbers.join(','));




