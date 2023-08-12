export default function List(props) {
    return (
        <ul className={props.className}>
            {props.children}
        </ul>
    );
}