import React, {useState, useContext} from "react";
import "./PageColor.css";

const ColorContext = React.createContext(null);                     // 컨텍스트 객체 생성

function PageColor() {
    const [isDark, setIsDark] = useState(false);

    // 컨텍스트 제공
    return (
        <ColorContext.Provider value={{isDark, setIsDark}} >
            <Page />
        </ColorContext.Provider>
    )
}

function Page() {
    return (
        <div className="page">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

function Header() {
    const {isDark} = useContext(ColorContext);                      // isDark 컨텍스트를 사용
    return (
        <header className="header"
            style={{
                backgroundColor: isDark ? "black" : "lightgrey",
                color: isDark ? "white" : "black",
            }}>
            <h2>컨텍스트 사용강의</h2>
        </header>
    )
}

function Content() {
    const {isDark} = useContext(ColorContext);                      // isDark 컨텍스트를 사용
    return (
        <content className="content"
            style={{
                backgroundColor: isDark ? "black" : "lightgrey",
                color: isDark ? "white" : "black",
            }}>
            <p>오늘은 리액트 10주차 강의이며, Context를 배우고 있습니다.</p>
        </content>
    )
}

function Footer() {
    const {isDark, setIsDark} = useContext(ColorContext);           // isDark, setIsDark 컨텍스트를 사용
    const toggleColor = () => {setIsDark(!isDark);}

    return (
        <footer className="footer"
            style={{
                backgroundColor: isDark ? "black" : "lightgrey",
                color: isDark ? "white" : "black",
                }}>
            <button className="button" onClick={toggleColor}>색상반전</button>
        </footer>
    )
}

export default PageColor;