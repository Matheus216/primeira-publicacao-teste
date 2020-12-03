import Link from 'next/link';

import {Nav, Li, A} from './StyleNavbar';

const Navbar = () => {
    return (
        <Nav>
            <ul>
                <Li>
                   <Link href='/'>
                        <A>Home</A> 
                    </Link>
                </Li>
                <Li>
                    <Link  href='/'>
                        <A>Projects</A> 
                    </Link>
                </Li>
                <Li>
                    <Link style={{textDecoration: "none"}} href='/About'>
                        <A>About</A> 
                    </Link>
                </Li>
                <Li>
                    <Link style={{textDecoration: "none"}} href='/About'>
                        <A>Articles</A> 
                    </Link>
                </Li>
            </ul>
        </Nav>
    )
}

export default Navbar;