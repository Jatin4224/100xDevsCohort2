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



//conditional rendering

function App() {
  return (
    <>
      <div class="App">
        <Box firstName="jatin" button />
        <Box firstName="Setu" />
      </div>
    </>
  );
}


import Image from "./Image";
import InsideBox from "./InsideBox";

const Box = ({ firstName, button }) => {
  const data = ["hello", "My name", "is"];
  return (
    <div id="box">
      <div>
        {data.map((elem, index) => (
          <h1 key={index}>{elem}</h1>
        ))}
        <h1>{firstName}</h1>
      </div>
      <div>
        <InsideBox />
      </div>
      <div>
        <Image />
      </div>
      <p>
        <button>{button ? "click me" : "not available"}</button>
      </p>
    </div>
  );
};

export default Box;


//Handling events
<button onClick={()=>{}}>
  click me
</button>

//never do this iska mtlb h function chaladiya hain.
<button onClick={{clickHandling()}}>
  click me
</button>

//apne ko click ho tab hi function chalana hain.
<button onClick={{clickHandling}}>
  click me
</button>


//State Management in React.

//state ek data hota hain,react is data ka khayaal rakhta hain ,jab bhi ye data change hota hain react page ko update karta hain
//state koi bhi data ho sakta hain, jaise ki score = 0 ek state hain
useState(0); //ab react isko change kar payega 0 se 1 .

//maan lete hain aapke game main score by default 0 se shuru hota hain and futute mein wo score badhega by 10 aur apko
// page pe show bhi karna hain jab score badhe, to us case mein aapka score vairable ek state mein rakhna jaruri hain, kyuki react isrf use hi change karta hai jo state mmein hota hain.

  const [score, setScore] = useState(0);
  // score[0] = value
  // score[1]= function jo update karta hain value.

function App() {
  const [score, setScore] = useState(0);
  console.log(score);
  return (
    <>
      <div class="App">
        <h1> {score}</h1>

        <button onClick={() => setScore(score + 1)}>onClick</button>
       
      </div>
    </>
  );
}

export default App;

//using prev [trick]

import { useRef, useState } from "react";
import Box from "./components/box";
import "./index.css";

function App() {
  const [score, setScore] = useState(0);
  console.log(score);
  return (
    <>
      <div class="App">
        <h1> {score}</h1>

        <button onClick={() => setScore((prev) => prev + 1)}>onClick</button>
       
      </div>
    </>
  );
}

export default App;

//useState Advance

import { useState } from "react";

import "./index.css";

function App() {
  const [val, setVal] = useState({ name: "jatin", isBanned: false });

  return (
    <>
      <div class="App">
        <h1>name: {val.name}</h1>
        <h2>banned:{val.isBanned.toString()}</h2>
        <button onClick={() => setVal({ ...val, isBanned: !val.isBanned })}>
          onClick
        </button>
      </div>
    </>
  );
}

export default App;


//Mastering useState()
//task1 - humara jo button h Banned ki value false hone par uska colour red hojaye.true ho tab blue color false ho tab red.
function App() {
  const [val, setVal] = useState({ name: "jatin", isBanned: false });

  return (
    <>
      <div class="App">
        <h1 className="bg-amber-300">name: {val.name}</h1>
        <h2>banned:{val.isBanned.toString()}</h2>
        <button
          className={`${val.isBanned ? "bg-amber-300" : "bg-amber-700"} `}
          onClick={() => {
            setVal({ ...val, isBanned: !val.isBanned });
          }}
        >
          click me
        </button>
      </div>
    </>
  );
}

export default App;

//task2 - aapke pas ek object hain usme name nd age field hain or aapko usme gender field or add karna hain.

//imp concet => useState state ko turant update nahi karta , vo useState ko update karta hain apne hisab se function completion ke baad to fix performance issues.
//react check karta hain useState ka state badla ya nahi.


//task3 - array ko update karna hain.
function App() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <>
      <div>
        {val.map((item) => (
          <h1>{item}</h1>
        ))}
        <button
          onClick={() =>
            setVal(() => val.filter((item, index) => index != val.length - 1))
          }
        >
          click me to update the array
        </button>
      </div>
    </>
  );
}

export default App;

//array mese remove.
//task4- remove number three from the array
function App() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <>
      <div>
        {val.map((item) => (
          <h1>{item}</h1>
        ))}
        <button
          onClick={() => setVal(() => val.filter((item, index) => index != 2))}
        >click me</button>
      </div>
    </>
  );
}

export default App;

//task5 - button k click par sab numbers remove jo 2 ki table m aate hain.
function App() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <>
      <div>
        {val.map((item) => (
          <h1>{item}</h1>
        ))}
        <button
          onClick={() =>
            setVal(() => val.filter((item, index) => item % 2 !== 0))
          }
        >
          click me
        </button>
      </div>
    </>
  );
}

export default App;


//task 6- array addition
function App() {
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <>
      <div>
        {val.map((item) => (
          <h1>{item}</h1>
        ))}
        <button onClick={() => setVal([...val, 7])}>click me</button>
      </div>
    </>
  );
}

export default App;

//task 7 - array ke andar objects hain print the whole data.
// [{name:"jatin",age:24},{name:"kohli",age:25},{name:"sachin",age:42},]
function App() {
  const [val, setVal] = useState([
    { name: "jatin", age: 24 },
    { name: "kohli", age: 25 },
    { name: "sachin", age: 42 },
  ]);
  return (
    <>
      <div>
        {val.map((item) => (
          <div>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
          </div>
        ))}
        <button onClick={() => setVal([...val, 7])}>click me</button>
      </div>
    </>
  );
}

export default App;

//task8- sachine ki age badhado.button click karne par.
function App() {
  const [val, setVal] = useState([
    { name: "jatin", age: 24 },
    { name: "kohli", age: 25 },
    { name: "sachin", age: 42 },
  ]);
  return (
    <>
      <div>
        {val.map((item) => (
          <div>
            <h1>{item.name}</h1>
            <h1>{item.age}</h1>
          </div>
        ))}
        <button
          onClick={() =>
            setVal(() =>
              val.map((item) =>
                item.name === "sachin" ? { name: "sachin", age: 50 } : item
              )
            )
          }
        >
          click me
        </button>
      </div>
    </>
  );
}

export default App;

//useState in component.
//example-01
import { useState } from "react";

const Card = () => {
  const [val, setVal] = useState(false);
  return (
    <div>
      <h1>{val === false ? "BAAHAR JAAO" : "MAT JAAO"}</h1>
      <button onClick={() => setVal(true)}>click me</button>
    </div>
  );
};

export default Card;

//good code
const Card = () => {
  const [val, setVal] = useState(false);
  return (
    <div>
      <h1>{val === false ? "BAAHAR JAAO" : "MAT JAAO"}</h1>
      <button onClick={() => setVal(() => !val)}>click me</button>
    </div>
  );
};

export default Card;

//example-02-making a cool image slider component
// ui
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
const Card = () => {
  const [val, setVal] = useState(false);
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="w-60 h-32 bg-zinc-500 rounded relative flex gap-2 overflow-hidden">
        <img
          className="shrink-0 -translate-x-[0%] w-full h-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1747674293429-88fb225ce220?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
        />{" "}
        <img
          className="shrink-0  -translate-x-[0%] w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1747641067114-1778b0f75567?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
        />
        <span

          className="w-10 h-10 absolute bottom-0 flex items-center justify-center bg-[#9b82828b] rounded-full  left-1/2 -translate-x-[30%] -translate-y-[85%]"
        >
          <GoArrowRight size={".7em"} />
        </span>
      </div>
    </div>
  );
};

export default Card;

//functionality using useState()
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
const Card = () => {
  const [val, setVal] = useState(false);
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="w-60 h-32 bg-zinc-500 rounded relative flex gap-2 overflow-hidden">
        <img
          className={`shrink-0 ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } w-full h-full object-cover`}
          src="https://plus.unsplash.com/premium_photo-1747674293429-88fb225ce220?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
        />{" "}
        <img
          className={`shrink-0 ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } w-full h-full object-cover`}
          src="https://images.unsplash.com/photo-1747641067114-1778b0f75567?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
        />
        <span
          onClick={() => setVal(() => !val)}
          className="w-10 h-10 absolute bottom-0 flex items-center justify-center bg-[#9b82828b] rounded-full  left-1/2 -translate-x-[30%] -translate-y-[85%]"
        >
          <GoArrowRight size={".7em"} />
        </span>
      </div>
    </div>
  );
};

export default Card;

//props
//Props use hote hain aapke components ko reusable banane ke liye.
// Maan lijiye aapke paas ek button component hai, aur aapko uss button ko alag-alag apps ya jagah pe use karna hai.
// Toh aap uske data ko hardcode karne ke bajaye, parent component se props ke through bhej sakte hain, aur child component mein un props ka use kar sakte hain.

// basic example
import Card from "./components/Card";
import "./index.css";

function App() {
  return (
    <>
      <div>
        <Card buttonName="know more" color="bg-blue-600" />
        <Card buttonName="click me" color="bg-blue-200" />
      </div>
    </>
  );
}

export default App;


const Card = ({ buttonName, color }) => {
  return (
    <button
      className={`"px-3 py-1 ${color} text-zinc-100 text-xs rounded m-2">`}
    >
      {buttonName}
    </button>
  );
};

export default Card;

//prop drilling usage
//task-humara data main app component m hoga hum usko props k through pass karenge cards m har card par ek add friend button hoga or humko add friend button par click hone par alert dena hain.
import Card from "./components/Card";
import "./index.css";

function App() {
  const data = [
    {
      name: "jatin",
      job: "painter",
      image:
        "https://media.istockphoto.com/id/958064228/photo/portrait-of-happy-young-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=1bzox3frm2EJNbC2bo2EWSQYxn_SIa4ii9h5wCtlvmU=",
    },
    {
      name: "setu",
      job: "trainer",
      image:
        "https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.webp?a=1&b=1&s=612x612&w=0&k=20&c=WDut88fKkZMl0aqIC7s7GmZuvnv4xN9xsqdhXtYqpqE=",
    },
    {
      name: "jai",
      job: "coder",
      image:
        "https://media.istockphoto.com/id/1090837964/photo/handsome-man-laughing.webp?a=1&b=1&s=612x612&w=0&k=20&c=JVKjr84ZqVfPvWjsTwkFKAvsGZP47aQqpcr1lfiZQa0=",
    },
    {
      name: "dhmmu",
      job: "majdur",
      image:
        "https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.webp?a=1&b=1&s=612x612&w=0&k=20&c=-e79VMWbA19l1W-8tq7-18igGSdLKsYNLkY-tWhReSE=",
    },
  ];

  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
        {data.map((item, index) => (
          <Card data={item} />
        ))}
        ;
      </div>
    </>
  );
}

export default App;



const Card = ({ data }) => {
  const { name, job, image } = data;
  return (
    <div className="w-60 h-70  bg-white rounded-md overflow-hidden shadow-lg">
      <div className="w-full h-32 bg-sky-200">
        <img classroom="w-full h-full object-cover " src={image} />
      </div>
      <div className="w-full p-3 object-cover">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h5>{job}</h5>

        <button
          onClick={() => alert("adding as a friend")}
          className="h-6 w-20 px-6 py-2 text-xs text-white bg-blue-500 font-semibold rounded-sm"
        >
          Add Friend
        </button>
      </div>
    </div>
  );
};

export default Card;


//prop drilling event handling
//ab agar hum add friend button par clcik karey to vo green color ka hojaye or friends text show karey.
//imp note- state jahan banti hain vahi modified kari jaa sakti hain.
// src/App.jsx
import { useState } from "react";
import Card from "./components/Card";
import "./index.css";

function App() {
  const data = [
    {
      name: "jatin",
      job: "painter",
      image:
        "https://media.istockphoto.com/id/958064228/photo/portrait-of-happy-young-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=1bzox3frm2EJNbC2bo2EWSQYxn_SIa4ii9h5wCtlvmU=",
      friends: false,
    },
    {
      name: "setu",
      job: "trainer",
      image:
        "https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.webp?a=1&b=1&s=612x612&w=0&k=20&c=WDut88fKkZMl0aqIC7s7GmZuvnv4xN9xsqdhXtYqpqE=",
      friends: false,
    },
    {
      name: "jai",
      job: "coder",
      image:
        "https://media.istockphoto.com/id/1090837964/photo/handsome-man-laughing.webp?a=1&b=1&s=612x612&w=0&k=20&c=JVKjr84ZqVfPvWjsTwkFKAvsGZP47aQqpcr1lfiZQa0=",
      friends: false,
    },
    {
      name: "dhmmu",
      job: "majdur",
      image:
        "https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.webp?a=1&b=1&s=612x612&w=0&k=20&c=-e79VMWbA19l1W-8tq7-18igGSdLKsYNLkY-tWhReSE=",
      friends: false,
    },
  ];

  const [realdata, setRealData] = useState(data);

  const handleFriendsButton = (index) => {
    setRealData((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, friends: !item.friends } : item
      )
    );
  };

  return (
    <div className="w-full min-h-screen bg-zinc-300 flex flex-wrap gap-6 p-8 items-start justify-center">
      {realdata.map((item, index) => (
        <Card
          key={index}
          index={index}
          data={item}
          handleClick={handleFriendsButton}
        />
      ))}
    </div>
  );
}

export default App;

// src/components/Card.jsx
import React from "react";

const Card = ({ data, handleClick, index }) => {
  const { name, job, image, friends } = data;

  return (
    <div className="w-60 bg-white rounded-md overflow-hidden shadow-lg">
      <div className="w-full h-32 bg-sky-200">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={name}
        />
      </div>
      <div className="w-full p-4">
        <h3 className="text-xl font-semibold capitalize">{name}</h3>
        <h5 className="text-sm text-gray-600 capitalize">{job}</h5>
        <button
          onClick={() => handleClick(index)}
          className={`mt-4 px-4 py-1 text-xs font-semibold rounded-sm ${
            friends ? "bg-green-500 text-white" : "bg-blue-500 text-white"
          }`}
        >
          {friends ? "Friends" : "Add Friend"}
        </button>
      </div>
    </div>
  );
};

export default Card;


//props nd state pratice exercise
//Form handling 
//form k sath sabse badi problem hain ki jab bhi hum usko submit karte hain vo pura page refresh kardeta hain.react ko yh pasand nahi.
//isko solve karne k humare pass three ways hain.
// 1) useRef
// 2)controlled components
// 3)react hook form - most used


// 1)useRef
//isme hum har input ko select karlete hain or unki value tab nikalte hain jab form submit hota hain.


function App() {
  const name = useRef(null);
  const age = useRef(null);
  const email = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name.current.value, age.current.value, email.current.value);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input ref={name} type="text" placeholder="name" />
        <input ref={age} type="text" placeholder="age" />
        <input ref={email} type="text" placeholder="email" />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;


//preventDefault()-> submit hone par page ko referesh hone se rokhta hain.
//useREF SE LINK BANTA H DONO K BICH.

//2) Form Handling Controlled Components.
//aap jab bhi kuch likhe  useState k through data real time m update kardein.
function App() {
  const [val, setVal] = useState({ name: "" ,email:""});
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(val);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={(event) => setVal({ ...val, name: event.target.value })}
          type="text"
          placeholder="name"
        />
         <input
          onChange={(event) => setVal({ ...val, emails: event.target.value })}
          type="text"
          placeholder="email"
        />

        <button type="submit">submit</button>
      </form>
    </>
  );
}

