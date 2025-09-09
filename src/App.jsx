
import Header from "./Components/Header.jsx"
import SecondaryHeader from "./Components/SecondaryHeader.jsx";
import HeroSection from "./Components/HeroSection.jsx";
import NewsUpdates from "./Components/NewsUpdate.jsx";


function App() {
  return (
    <>
    <div className="app-container">
        <Header></Header>
        <SecondaryHeader></SecondaryHeader>
        <HeroSection></HeroSection>
        <NewsUpdates /> 

    </div>
    
      
    </>
  );
}

export default App;
