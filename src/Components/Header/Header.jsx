import {} from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div
      className="h-14 pl-14 w-[100] flex items-center   justify-between "
      style={{ borderBottom: "1px solid gray" }}
    >
      <div className=" text-orange-700">
        <NavLink
          to={""}
          className=""
          style={{
            listStyle: "none",
            fontFamily: "monospace",
            fontWeight: "bolder",
            fontSize: "23px",
          }}
        >
          Devendra
        </NavLink>
      </div>
      <nav>
        <ul className="flex gap-4 pr-14">
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-orange-700" : ""} hover:text-orange-700`
              }
              to={"contact"}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-700" : "text-gray-700"
                } hover:text-orange-700`
              }
              to={"about"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-700" : "text-gray-700"
                } hover:text-orange-700`
              }
              to={"project"}
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "text-orange-700" : "text-gray-700"
                } hover:text-orange-700`
              }
              to={"apicall"}
            >
              Api Call
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
