import './navbar.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-left'>
            <a href="#aboutus">ABOUT US</a>
            <a href="#newbook">NEW BOOK</a>
        </div>
        <div className='navbar-logo'>
            <img src="https://i.postimg.cc/Wb1J8y5n/Screenshot-2024-11-05-at-9-19-04-PM-removebg.png" alt="logo" className='logo'/>
        </div>
        <div className='navbar-right'>
            <a href="#signup">SIGN UP</a>
            <a href="#contactus">CONTACT US</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
