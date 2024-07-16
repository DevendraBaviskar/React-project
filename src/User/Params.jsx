import {} from "react";
import { useParams } from "react-router-dom";

function Params() {
  const { username } = useParams();
  return (
    <div
      className="flex-1 text-center mb-4 h-36 pt-14 font-medium text-red-500"
      style={{ borderBottom: "1px solid gray" }}
    >
      <h1>Users {username}</h1>
    </div>
  );
}

export default Params;
