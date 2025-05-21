//immutable and mutable
//primitive nd refference
var arr = [1, 2, 3, 4];
var arr2 = arr;
arr2.pop();
//output m arr2 nd arr dono ki value 123 hojayegi par haumne to child ki value pop kara hain to parent ka bhi hora hain.yh problem hain.
//to react js mein apko ek state naam ki cheej milegi us bande ko aap mutate nahi kar saktey mtlb direcltly aap uski value change nahi kar saktey.
var state = [1, 2, 3];
state.pop();
//this is not allowed in react state.

//state ko immutable way m kaise update karein -> direclty update nahi kar rahein hain .
//ky allowed hain aap state ko new array dedo.
var state = [1, 2, 3, 4];
state = [1, 2];

// arrays
// [1,2,3,4]
//[1,2,3,"apple"]- baaki languages m alag values nahi rakh saktey par js m rakh sktye hain kyuki arrays dynamic hote hain js m .
//ek se jada elements rakh sakta hain ek aysa data structure hain.

//1)SPREAD OP.

//example
var state = [1, 2, 3];
var copy = state;
copy.pop();
//yh nahi kar saktey isme state ka value bhi change hojayega

//using arrray dest
var state = [1, 2, 3];
var copy = [...state]; //spead operator
copy.pop(); //ab sirf copy ka value change hoga state ka nahi.

// example2
var state = { name: "jatin", age: 24 };
// state.age = 34; //yh nahi karna hain
var copy = { ...state };
copy.name = "harshit";
state = copy; //copy ka value state m daldya to state change krdya

// 2) ARRAY DESTRUCTURING
var obj = { name: "jatin", age: 25, email: "jai@gmail.com" };
const { age, email } = obj;

//example 2
var obj = {
  name: "string",
  socials: {
    facebook: {
      first: "haah",
      sec: "jai",
    },
  },
};

const { sec } = obj.socials.facebook;

//example 3
var arr = [12, function () {}];
var [first, secc] = arr;
console.log(first); //12

//example 4
var arr = [12, function () {}, 13];
var [firstNumber, , secondNumber] = arr;

//import // Export

//hum log component banaate hain, ab dikkat yh aati hain har hissa alag alag component hain or components ko hum alag alag files m rakhtein hain or inko last m jodne k liye use hota hain import nd export.

//method 1 - default
function Cart() {}
export default cart;

//
import Cart from "./script2";

//method 2 -named export import

export function Cart() {}

export function Cart2() {}

//Arrow Functions

const abcd = () => {
  console.log("abcd");
};

//with one parameter
const def = (val) => {
  console.log(val);
};

def(12);
//u can also write wihtout brackets if only have one parameter
const def2 = (val) => {
  console.log(val);
};

//arrow function with implicit return
const jef = () => 12;

jef(); //op-12

console.log(jef() + 1); //op-13

//important
const fef = () => {
  name: "jatin";
};

fef(); //undefined kyuki yh body hain na ki object
// for object
const fef2 = () => ({ name: "abcd", age: 12 });
console.log(fef2());

// map filter

//dono hi array par chalte hain dono ka kaam hain array par kuch perform karna and ek naaya array return karna and "ek naya array return karna"

var arr = [1, 2, 3, 4];
//map k andar aata hain function function k andar aati hain value.
//map - har element par kuch karo nd naye array mein rakho
//map k andar return karna imp hain tab hi elements naye array m place hote hain.
const newArray = arr.map((val) => {
  return val * 2;
});

//state ek array hain usmein numbers hai and apko har number ko +1 karna hain.
var state = [1, 2, 3];
const updateState = state.map((elem) => elem + 1);
state = updateState;

console.log(state);

//ek array hain saate numbers jo greater than 5 hain usme add 5 nd baaki return same
var state2 = [1, 2, 3, 6, 7, 8];

var newState2 = state2.map((elem) => (elem > 5 ? elem + 5 : elem)); //ternery operator
console.log(newState2);
//op- 1 ,2 ,3,11, 12,13

//map saare bande lautadeta hain.jaha original array ka size kam na hona ho udhar map use hota hain.
//filter bando ko kam kar sakta hain.jaha orgiinal array ka size kam karna ho udahr filter use hota hain.

//ek array mein sabhi jum jo 5 se bade hain un sabme add 10;
var arr = [1, 2, 3, 5, 6];
// filter((elem) => true);
var newArr = arr.filter((elem) => elem > 4);
console.log(newArr);

//filter out male candidates
var arr2 = [
  { name: "jatin", gender: "male" },
  { name: "setu", gender: "male" },
  { name: "kushi", gender: "female" },
];

const ans = arr2.filter((elem) => elem.gender === "male"); //iska ans aaya true to yh uss array m hjyga add.
console.log(ans);

//key prop warning
//map m function m do chize accept karte ho ek value nd ek index
//using map in component
const Box = () => {
  const data = ["hello", "My name", "is", "Jatin"];
  return (
    <div id="box">
      <div>
        {data.map((elem, index) => (
          <h1 key={index}>{elem}</h1>
        ))}
      </div>
      <InsideBox/>
    </div>
  );
};

export default Box;


