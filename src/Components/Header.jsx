
import './Header.css';
function Header() {
  return (
    <>

    <div className="upper_box">
      <div className='header-right-group'>
        <div className="social-links">
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
           <img src="/assets/WhatsApp.png" alt="WhatsApp" className="social-icon_whatsapp" /> 
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/Facebook.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/Youtube.png" alt="YouTube" className="social-icon_youtube" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/Instagram.png" alt="Instagram" className="social-icon" />
          </a>
        </div>
        <h2 className="skip">Skip to main content</h2>
      </div>
    </div>
    
    </>
  );
}

export default Header;
