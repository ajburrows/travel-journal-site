import globe_img from "../assets/globe.png"

export default function Header(){
    return(
        <header>
            <img src={globe_img} alt="Globe" className="globe-icon"/>
            <h2 className="header-title">my travel journal.</h2>
        </header>
    )
}