import '../footer/Footer.css';

function Navbar() {
  return (
    <div>
      <div className='container'>
        <ul className='nav justify-content-center'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#abt'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
