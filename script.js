// დავალება 13


// 1. შევქმნათ ყველა მარტივი ტიპის ცვლადი რაც ვისწავლეთ


var person = "Zura"
let condition = "Healthy"
const nationality = "Georgian"


// 2. არითმეტიკული ოპერაციები მიმატება, გამოკლება, გაყოფა, გამრავლება ყველაფერი რაც ვისწავლეთ


  const getSum = (a, b) => {
  let sum = a + b;
  console.log(sum);
};

  getSum(8, 10);


  const minus = (a, b) => {
  let difference = a - b;
  console.log(difference);
};

  minus(87, 25);


  const divide = (a, b) => {
  let division = a / b;
  console.log(division);
};

divide(80, 20);


  const multiply = (a, b) => {
  let mult = a * b;
  console.log(mult);
};

multiply(95, 76);


// 3. სტრინგების კონკატენაცია + ით და სტრინგების კონკატენაცია `ბექტიკებით`


let citizens = "fit";
let region = "Samachablo";
console.log("We sent information about people who is " + citizens + " for military service in this region: " + region + " ");
console.log(`We sent information about people who is ${citizens} for military service in this region: ${region} `);


// 4. მოცემულა მართკუთხედი სიგრძე ცვლადი = 7 და სიგანე = 5 (შექმენით 2 ცვლადი) გამოთვალეთ მართკუთხედის ფართობი ამ 2 ცვლადის გამოყენებით


let length = 7;
let width = 5;
let area = length * width;
console.log(area)


// დავალება 14


// 1.შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი, console.log გამოიტანეთ ამ მასივის ყველა ელემენტის ჯამი


  const numbers = [98, 76, 92, 63, 12];
  let numbersSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    numbersSum += numbers[i];
  } 

  console.log(numbersSum);


// 2.შექმენით 3 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი რომელსაც აქვს შემდეგი ველები (properties): name, age, address.


  const persons = [
    {
      name: "Dato",
      age: 38,
      address: "Eristavi St.",
    },
    {
      name: "Natia",
      age: 25,
      address: "Chargali St.",
    },
    {
      name: "Zura",
      age: 45,
      address: "Garejeli St.",
    },
  ];


// 3. console.log ში გამოიტანეთ 3 სტრინგი "My name is (#2 დავალების 0 ინდექსზე მყოფი ობიექტის ველი name ის მნიშვნელობა)", My age is (#2 დავალების 0 ინდექსზე მყოფი   ობიექტის ველი age ის მნიშვნელობა)", "My address is (#2 დავალების 0 ინდექსზე მყოფი  ობიექტის ველი address ის მნიშვნელობა)"


  console.log(`My name is ${persons[0].name}`);
  console.log(`My age is ${persons[0].age}`);
  console.log(`My address is ${persons[0].address}`)


// 4. დაწერეთ if / else statement სადაც შეამოწმებთ #2 დავალებაში  1 ინდექსზე მყოფი ობიექტში არსებულ age ველის მნიშვნელობას თუ ნაკლებია 19 ზე console.log ში დაბეჭდეთ "I am a teenager" დანარჩენ შემთხვევაში დაბეჭდეთ "I am an adult"


  if (persons[1].age < 19) {
    console.log("I am teenager");
  } else {
    console.log("I am an adult");
  };


// 5.  შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი,და შეეცადეთ console.log-ში გამოიტანოთ ამ მასივის ყველა ელემენტი . გამოიყენეთ ეს რესურსი


  const numbersAray = [17, 82, 198, 29, 36];
  for (let i = 0; i < numbersAray.length; i++) {
    console.log(numbersAray[i]);
  };


// 6. const currentDay = new Date().getDay(); currentDay ცვლადი გვაძლევს კვირის დღეს რიცხვითი სახით ,0 არის კვირა ,1 არის ორშაბათი და ასე შემდეგ, 0-6 მდე რიცხვს აბრუნებს სადაც 6 არის შაბათი 


// დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას კვირას 1 ის შემთხვევაში ორშაბათს და ასე შემდეგ 6მდე. (სურვილის შემთხვევაში შეგიძლიათ დაამატოთ სხვა პირობებიც სადაც და, ან  || && ლოგიკურ ოპერატორებს გამოიყენებთ)


switch (new Date().getDay()) {
  case 0:
    currentDay = "Sunday";
    break;
  case 1:
    currentDay = "Monday";
    break;
  case 2:
     currentDay = "Tuesday";
    break;
  case 3:
    currentDay = "Wednesday";
    break;
  case 4:
    currentDay = "Thursday";
    break;
  case 5:
    currentDay = "Friday";
    break;
  case 6:
    currentDay = "Saturday";
};
console.log(currentDay)


// დავალება 15


// 1. დაწერეთ for ციკლი 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i


for (let i = 0; i < 100; i++) {
  console.log(i)
}


// 2. დაწერეთ while ციკლი 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i


let i = 1;
while (i < 50) {
  console.log(i);
  i += 1;
}


// 3.შექმენით 5 ელემენტიანი  მასივი, სადაც დაამატებთ სახელებს, გამოიყენეთ pop,shift,unshift,push მეთოდები და განახორციელეთ სხვადასხვა სახელების წაშლა/დამატება. დალოგეთ თითოეული ქმედების შემდგომ  მასივის მნიშვნელობა. ისე როგორც ლექციაზე გავაკეთეთ.


const names = ["Dato", "Giorgi", "Levani", "Nino", "Nika"];
console.log(names);
names.push("Tika");
console.log(names);
names.unshift("Lado");
console.log(names);
names.pop();
console.log(names);
names.shift();
console.log(names);


// 4. შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 10000 - მდე ამ ,მასივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე (i * i) მასივში ჩაწერა ხდება push მეთოდის საშუალებით ლექციის ფაილში გვიწერია


let emptyArrey = [];
let count = 1;
while (count < 10000) {
  count += 1;
  emptyArrey.push(i * i);
};


// 5.შექმენით 5 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი და for ცილის გამოყენებით დათვალეთ ჯამი


const numbersCount = [45, 87, 745, 726, 12];
let arraySum = 0;
for (let i = 0; i < numbersCount.length; i++) {
  arraySum += numbersCount[i];
};

console.log(arraySum);


// 6. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის კენტი ან false -ს თუ რიცხვი არის ლუწი.


evenOrOdd = (number) => (number % 2 === 0) ? "false" : "true";


console.log(evenOrOdd(13));
console.log(evenOrOdd(14));


// 7.დაწერეთ ფუნქცია, რომელიც მიიღებს UpperCase სტრინგს მაგ (MY NAME IS JOHN) და დააბრუნებს LowerCase (my name is john) სტრინგს


text = (letterCase) => letterCase.toLowerCase();


console.log(text("MY NAME IS JOHN"));


// 8. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება


oddNumbers = (odd) => odd.filter(odd => odd % 2 === 0);


const odd = [9, 12, 56, 3, 13];
console.log(oddNumbers(odd))


// დავალება 16


// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი  არის 3ის ჯერადი , ხოლო თუ არაა მაშნ false-ს


const numberDivideTree = (num) => (num % 3 === 0) ? "true" : "false";

console.log(numberDivideTree(9));
console.log(numberDivideTree(16));


// 2. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს კოდი.


function getCurrencySymbolFromCode(currency) {
  switch(currency) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GEL":
      return "ლ";
    default:
      return getCurrencySymbolFromCode;
   }
};


console.log(getCurrencySymbolFromCode("USD"));
console.log(getCurrencySymbolFromCode("EUR"));
console.log(getCurrencySymbolFromCode("GEL"));
console.log(getCurrencySymbolFromCode("%"));


// 3. დაწერეთ ფუნქცია, რომელიც მიიღებს lowerCase სტრინგს მაგ (my name is joe) და დააბრუნებს UpperCase (MY NAME IS JOE) სტრინგს.


const caseChange = (text) => text.toUpperCase();

console.log(caseChange("my name is joe"));


// 4.  დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს გასაყიდ და ასაღებ ფასს, დათვლის მოგებას  და დააბრუნებს გასაყიდი ფასის რა პროცენტს შეადგენს მოგება.


const profit = (sellPrice, buyPrice) => ((sellPrice - buyPrice) / buyPrice) * 100;

console.log(profit(450, 350));


// 5. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება.


const oddNumbersArray = (filteredNumbers) => filteredNumbers.filter(filteredNumbers => filteredNumbers % 2 === 0);

const oddArray = [5, 12, 89, 24, 39]
console.log(oddNumbersArray(oddArray));


// 6. დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს (ობიექტს უნდა ქონდეს ველი name) და მეორე პარამეტრად მიიღებს სტრინგს და ამ მასივში .find ით მოვძებნოთ ობიექტის name === ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი.


const infos = [
  {
    name: "Nino",
    age: 40,
  },
  {
    name: "Dato",
    age: 20,
  },
];


const findObjectsName = (objects, name) => objects.find(objects => objects.name === name);

const findName = findObjectsName(infos, "Nino");
console.log(findName);


// დამატებითი დავალება 4

  // შექმნით div;
  // div ტეგის შიგნითაც დაამატეთ p ტეგი;
  // p ტეგს დამაატეთ კლასი text;
  // p ტეგის შიგნით დაამატეთ ტექსტი "hello world"

//   საბოლოოდ  html-ში ასეთი სტრუქტურა უნდა მიიღოთ
// <div>
// <p class="text">hello world</p>
// </div>


  const newDiv = document.createElement("div");

  const newP = document.createElement("p");

  newP.classList.add("text");

  newP.textContent = "hello world";

  newDiv.appendChild(newP);

  document.body.appendChild(newDiv);


//   დამატებითი დავალება 5


// შექმენით 5 ელემენტიანი მასივი, რომელსაც ჯავასკრიპტით  li ტეგების შიგნით დაარენდერებთ:

// საბოლოოდ  html-ში ასეთი სტრუქტურა უნდა მიიღოთ
// <ul>
// <li>მასივის ელემენტი</li>
// <li>მასივის ელემენტი</li>
// <li>მასივის ელემენტი</li>
// <li>მასივის ელემენტი</li>
// <li>მასივის ელემენტი</li>
// </ul>


const pageMenu = ["Home", "Service", "About", "Product", "Contact"];



