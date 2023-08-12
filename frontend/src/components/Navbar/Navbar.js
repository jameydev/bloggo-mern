import Link from '../Link';
import ListItem from '../ListItem';

export default function Navbar(props) {
    return (
        <nav>
            <ul>
                <ListItem><Link href="/">Home</Link></ListItem>
                <ListItem><Link href="/me">Profile</Link></ListItem>
                <ListItem><Link href="/settings">Settings</Link></ListItem>
                <ListItem><Link href="/new-post">New Post</Link></ListItem>
            </ul>
        </nav>
    );
}