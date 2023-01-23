import React, { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";

const ApiTask = () => {
    const [meme, setMeme] =useState([]);

const fetchClick= async()=>{
    await Axios.get("https://api.imgflip.com/get_memes").then((res)=>{
        console.log(res.data.data.memes[2]);
        setMeme(res.data.data.memes)

    })
}
  return (
    <div>
      <button onClick={fetchClick}>Fetc</button>
      <div>{meme.map((val,ind)=>{
        return <h3 key={ind}>{val.width}</h3>
      })} </div>
    </div>
  )
}
export default ApiTask

//   const [allData, setAllData] = useState([]);

//   useEffect(()=> {
//     try {
//       Axios.get("https://api.imgflip.com/get_memes").then((res) => {
//         setAllData(res.data.data.memes);
//         //   console.log(res.data.data.memes);
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   }, []);
//   return (
//     <>
//       <h1>
//         {allData.map((e, i) => {
//           return <h1 key={i}>{e.name}</h1>;
//         })}
//       </h1>
//     </>
//   );
// };
// export default ApiTask;
// const [meme, setMeme] =useState([]);
// const fetchClick= async()=>{
//     await Axios.get("https://api.imgflip.com/get_memes").then((res)=>{
//         console.log(res.data);
//         setMeme(res.data.memes[0])
//         console.log(meme);
//     })
// }
//   return (
//     <div>
//       <button onClick={fetchClick}>Fetc</button>

//     </div>
//   )
// }
