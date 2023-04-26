import { useState, useEffect } from "react";
import '../css/Memos.css';
const Memos = ({ contract, account, provider }) => {
  const [memos, setMemos] = useState([]);
  //const { contract } = state;
console.log("Hi")
  useEffect(() => {
    console.log("Hii")
    const memosMessage = async () => {
      console.log("Hiii")
      const memos = await contract.getMemos();
      setMemos(memos);
      console.log(memos)
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <center>
       <div className="top">
        <h5 id="msg">Messages</h5>
        {memos.map((memo) => {
        return (
          <div
            className="container-fluid"
            key={Math.random()}
          >
            <table border={1}>
              <tbody>
                <tr>
                  <td id="data">
                    {memo.name}
                  </td>
                  <td id="data">
                    {new Date(memo.timestamp * 1000).toLocaleString()}
                  </td>
                  <td id="data">
                    {memo.message}
                  </td>
                  {/* <td>
                    {memo.from}
                  </td> */}
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
       </div>
    </center>
    // <>
    //   <p style={{ textAlign: "center", marginTop: "20px" }}>Messages</p>
      // {memos.map((memo) => {
      //   return (
      //     <div
      //       className="container-fluid"
      //       style={{ width: "100%" }}
      //       key={Math.random()}
      //     >
      //       <table
      //         style={{
      //           marginBottom: "10px",
      //         }}
      //       >
      //         <tbody>
      //           <tr>
      //             <td
      //               style={{
      //                 backgroundColor: "#96D4D4",
      //                 border: "1px solid white",
      //                 borderCollapse: "collapse",
      //                 padding: "7px",
      //                 width: "100px",
      //               }}
      //             >
      //               {memo.name}
      //             </td>
      //             <td
      //               style={{
      //                 backgroundColor: "#96D4D4",
      //                 border: "1px solid white",
      //                 borderCollapse: "collapse",
      //                 padding: "7px",
      //                 width: "800px",
      //               }}
      //             >
      //               {new Date(memo.timestamp * 1000).toLocaleString()}
      //             </td>
      //             <td
      //               style={{
      //                 backgroundColor: "#96D4D4",
      //                 border: "1px solid white",
      //                 borderCollapse: "collapse",
      //                 padding: "7px",
      //                 width: "300px",
      //               }}
      //             >
      //               {memo.message}
      //             </td>
      //             <td
      //               style={{
      //                 backgroundColor: "#96D4D4",
      //                 border: "1px solid white",
      //                 borderCollapse: "collapse",
      //                 padding: "7px",
      //                 width: "400px",
      //               }}
      //             >
      //               {memo.from}
      //             </td>
      //           </tr>
      //         </tbody>
      //       </table>
      //     </div>
      //   );
      // })}
    // </>
  );
};
export default Memos;