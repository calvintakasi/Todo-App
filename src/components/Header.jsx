import PropTypes from "prop-types";

function Header() {
  return (
    <>
      <div className="appTitle  text-center font-bold text-5xl my-6  ">
        TODO APP
      </div>

      <div className="slogan font-semibold text-center text-2xl">
        Turn daily intentions into action with smart reminders
      </div>
    </>
  );
}

export default Header;
