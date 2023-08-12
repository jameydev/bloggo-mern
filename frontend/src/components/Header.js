export default function Header(props) {
    return (
        <header>
            <h1 className="txt-center">{props.children}</h1>
            <h2 className="txt-center">{props.subtitle}</h2>
            <p className="txt-center">* &nbsp; * &nbsp; *</p>
        </header>
    );

}