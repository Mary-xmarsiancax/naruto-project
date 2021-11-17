import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ContentContainer from "./components/content/ContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar/>
            <ContentContainer/>
        </div>
    )
}

export default App;
