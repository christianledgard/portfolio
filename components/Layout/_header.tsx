import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="flex justify-between mt-8">
        <div className="flex items-center">
          <a href="/" className="">
            home
          </a>
        </div>
        <a
          className="float-right flex items-center"
          href="mailto:christianledgard@gmail.com"
        >
          send me an email
        </a>
      </div>
    </nav>
  );
};

export default Header;
