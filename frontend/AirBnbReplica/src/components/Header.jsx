import React from "react";
import airbnbLogo from "../assets/img/airbnb2.png";

const Header = () => {
  return (
    <div className="shadow-xl">
      <div className="mx-auto flex items-center justify-between px-40 py-4">
        <div className="">
          <img src={airbnbLogo} alt="AirBnbLogo" className="h-10" />
        </div>
        <div className="flex items-center rounded-full border border-gray-300 px-4 py-2 shadow-sm">
          <p className="border-r border-r-gray-300 pr-2">Qualquer lugar</p>
          <p className="border-r border-r-gray-300 pr-2 pl-2">
            Qualquer semana
          </p>
          <p className="flex items-center gap-2 pl-2">
            Hóspedes?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="bg-search size-6 justify-center rounded-full border-0 p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </p>
        </div>
        <div className="flex items-end gap-2 rounded-full border border-gray-300 px-4 py-2 shadow-sm">
          <p>Perfil</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
