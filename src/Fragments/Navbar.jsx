const Navbar = () => {
  const logo = "/images/logo-text.svg";
  return (
    <nav className="flex justify-between items-center px-10 py-2">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="flex items-center gap-10">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="">Tentang</a>
        </li>
        <li>
          <a href="#">Tata Cara</a>
        </li>
        <li>
          <a href="#">Laporan Anda</a>
        </li>
        <li>
          <a href="#">Hubungi</a>
        </li>
        <li>
          <a href="#"><img src="/images/user.svg" alt="user" /></a>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
