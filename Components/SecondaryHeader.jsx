import './SecondaryHeader.css'
function SecondaryHeader(){
return (
        <header className="secondary-header">
      {/* This new div groups the left-side items together */}
      <div className="header-left-section">
        
        <img src="/assets/Telangana_Logo.png" alt="Telangana State Emblem" className="state-logo" />
        
        {/* Make sure you have this logo in your public/assets folder */}
        <img src="/assets/One_logo.png" alt="One Logo" className="One_logo" />
        
        <div className="title-container">
          <h1>Telangana State Libraries</h1>
          {/*<h2>తెలంగాణ ప్రభుత్వం</h2>*/}
        </div>

      </div>

      {/* 3. The Navigation Links */}
      <nav className="main-navigation">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Awards</a>
        <a href="#">Contact</a>
        <a href="#">Other</a>
      </nav>
    </header>
  );
}
export default SecondaryHeader;