import Button from "./Elements/Button";

function App() {
  const logo = "/images/logo-text.svg";
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="flex justify-between items-center h-20 px-10">
        <img width={184} src={logo} alt="logo" />
        <ul className="flex gap-10 items-center">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#">Tentang</a>
          </li>
          <li>
            <a href="#">Tata Cara</a>
          </li>
          <li>
            <a href="#">Hubungi</a>
          </li>
          <li>
            <Button classname="bg-green-800 shadow-3xl">Login</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
