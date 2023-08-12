import Navbar from "./Navbar/Navbar";

export default function Header(props) {
    return (
        <header>
            <Navbar />
            <h1 class="txt-center">{props.children}</h1>
            <hr />
        </header>
    );

}