import globe_img from "../assets/globe.png"

export default function Header() {
    return (
        <header>
            <img src={globe_img} alt="globe icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}