import Button from "./Elements/Button";
import CloudsPage from "./pages/clouds";

function App() {
  const logo = "/images/logo-text.svg";
  return (
    <div>
      <nav className="flex justify-between items-center h-20 px-10 bg-transparent sticky top-0 z-10">
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
            <a href="/login">
              <Button classname="bg-green-800 shadow-3xl">Login</Button>
            </a>
          </li>
        </ul>
      </nav>
      <CloudsPage />
    </div>
  );
}

export default App;
