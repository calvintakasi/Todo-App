import PropTypes from "prop-types";

function Header() {
  return (
    <>
      <nav className="">
        <ul className=" flex gap-15 place-content-center mt-2.5">
          <li className=" font-semibold font text-2xl">Home</li>
          <li className=" font-semibold font text-2xl">About</li>
          <li className=" font-semibold font text-2xl">Support</li>
        </ul>
      </nav>
      <div className="appTitle  text-center font-bold text-5xl my-10">
        TODO REACT APP
      </div>
    </>
  );
}

export default Header;
