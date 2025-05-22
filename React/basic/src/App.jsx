// import { useState } from "react";
// import Card from "./components/Card";
// import "./index.css";

// function App() {
//   const data = [
//     {
//       name: "jatin",
//       job: "painter",
//       image:
//         "https://media.istockphoto.com/id/958064228/photo/portrait-of-happy-young-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=1bzox3frm2EJNbC2bo2EWSQYxn_SIa4ii9h5wCtlvmU=",
//       friends: false,
//     },
//     {
//       name: "setu",
//       job: "trainer",
//       image:
//         "https://media.istockphoto.com/id/1277971635/photo/portrait-of-a-smiling-man-of-indian-ethnicity.webp?a=1&b=1&s=612x612&w=0&k=20&c=WDut88fKkZMl0aqIC7s7GmZuvnv4xN9xsqdhXtYqpqE=",
//       friends: false,
//     },
//     {
//       name: "jai",
//       job: "coder",
//       image:
//         "https://media.istockphoto.com/id/1090837964/photo/handsome-man-laughing.webp?a=1&b=1&s=612x612&w=0&k=20&c=JVKjr84ZqVfPvWjsTwkFKAvsGZP47aQqpcr1lfiZQa0=",
//       friends: false,
//     },
//     {
//       name: "dhmmu",
//       job: "majdur",
//       image:
//         "https://media.istockphoto.com/id/1136413215/photo/young-man-at-street-market.webp?a=1&b=1&s=612x612&w=0&k=20&c=-e79VMWbA19l1W-8tq7-18igGSdLKsYNLkY-tWhReSE=",
//       friends: false,
//     },
//   ];

//   const [realdata, setRealData] = useState(data);
//   const handleFriendsButton = (index) => {
//     setRealData((prev) => {
//       return prev.map((item, index) => {
//         if (item === index) {
//           return { ...item, friends: !item.friends };
//         }
//       });
//     });
//   };

//   return (
//     <>
//       <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
//         {realdata.map((item, index) => (
//           <Card
//             key={index}
//             index={index}
//             data={item}
//             handleClick={handleFriendsButton}
//           />
//         ))}
//         ;
//       </div>
//     </>
//   );
// }

// export default App;
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
