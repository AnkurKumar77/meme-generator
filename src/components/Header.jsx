import logo from "../assets/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img src={logo} className="header--logo"/>
            <h1 className="header--title">MemeGenerator</h1>
            <p className="header--text">React Course</p>
        </header>
    )
}