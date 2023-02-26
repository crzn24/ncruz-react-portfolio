import React, {useState} from "react";
// import './App.css';
// import NavigationContainer from "./components/NavigationContainer";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import PageLoader from "./components/PageLoader";
import Footer from "./components/Footer";

function App() {
    const [pages] = useState([
        { name: "about me" },
        { name: "portfolio" },
        { name: "contact" },
        { name: "resume" }
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);
    
// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another component, <NavigationContainer/> from it.
    return (
        <div>
            <Header>
                <NavTabs
                    pages={pages}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                ></NavTabs>
            </Header>
        <main>
            <PageLoader currentPage={currentPage}></PageLoader>
        </main>
            <Footer />
        </div>
    );
};

export default App;
