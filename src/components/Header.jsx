// import appLogo from "../assets/app-logo.png";

const Title = () => {
  return (
    <div className="m-2">
      {/* <img src={appLogo} /> */}
      <h4 className="cursor-pointer">Food Villa</h4>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <div className="flex justify-between mx-auto w-4/5 font-serif text-md">
        <Title />
        <ul className="flex m-2">
          <li className="px-4 cursor-pointer">Home</li>
          <li className="px-4 cursor-pointer">Contact Us</li>
          <li className="px-4 cursor-pointer">Login</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
