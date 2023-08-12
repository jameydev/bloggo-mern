import Link from '../Link';
import ListItem from '../ListItem';
import List from '../List';

export default function Navbar(props) {
    return (
        <nav>
            <List>
                <ListItem><Link href="/">Home</Link></ListItem>
                <ListItem><Link href="/me">Profile</Link></ListItem>
                <ListItem><Link href="/settings">Settings</Link></ListItem>
                <ListItem><Link href="/new-post">New Post</Link></ListItem>
            </List>
        </nav>
    );
}