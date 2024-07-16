// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
function Data() {
  const data = useLoaderData();
  console.log(data);
  // const [data, setData] = useState([]);

  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   const api = "https://dummyjson.com/products/search?q=phone";
  //   const fetcher = async (api) => {
  //     try {
  //       const res = await fetch(api);
  //       if (!res.ok) {
  //         throw new Error("Network response not ok!");
  //       }
  //       const toJson = await res.json();
  //       setData(toJson.products);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };
  //   fetcher(api);
  // }, []);

  // if (Loading) {
  //   return (
  //     <div
  //       style={{
  //         height: "100%",
  //         width: "100%",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <p className="text-orange-700" style={{ fontSize: "100px" }}>
  //         Loading...
  //       </p>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <p
  //       className="text-red-700"
  //       style={{
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         height: "50px",
  //       }}
  //     >
  //       Error : {error}
  //     </p>
  //   );
  // }

  // if data state have something in it then it console

  return (
    <div
      className="flex-1 text-center mb-4 h-36 pt-14 font-medium text-orange-500"
      style={{ borderBottom: "1px solid gray" }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {data.products.map((d, index) => {
          return (
            <div
              className="image_block"
              key={index}
              style={{
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid gray",
              }}
            >
              <p>{d.title}</p>
              <img src={d.images[0]} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Data;

export const dataLoader = async () => {
  const res = await fetch("https://dummyjson.com/products/search?q=phone");
  return res.json();
};
