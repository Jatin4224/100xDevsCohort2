import Image from "./Image";
import InsideBox from "./InsideBox";

const Box = ({ firstName }) => {
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
    </div>
  );
};

export default Box;
