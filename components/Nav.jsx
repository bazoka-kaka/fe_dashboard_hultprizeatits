import navStyles from '../styles/Nav.module.css'
import UnstyledLink from './UnstyledLink'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <img className={`left-3 md:left-16 ${navStyles.logo}`} src='/hultprize-logo.png' alt='hultprize logo'/>
            <ul>
                <li>
                    <UnstyledLink key='#home' href='#home'>HOME</UnstyledLink>
                </li>
                <li>
                    <UnstyledLink key='#timeline' href='#timeline'>TIMELINE</UnstyledLink>
                </li>
                <li>
                    <UnstyledLink key='#about' href='#about'>ABOUT</UnstyledLink>
                </li>
                <li className={navStyles.selected}>
                    <UnstyledLink key='#register' href='#register'>REGISTER</UnstyledLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
