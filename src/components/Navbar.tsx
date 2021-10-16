import { Link } from 'react-router-dom';
import homeIcon from '../assets/icons/home-icon.png';
import hsLogo from '../assets/logos/hs-logo.png';
import wowLogo from '../assets/logos/wow-logo.svg';
import tftLogo from '../assets/logos/tft-logo.png';
import pokeball from '../assets/icons/pokeball-logo.png';

export const Navbar = () => {

    return(
        <>
        <nav className="my-navbar">
            <ul className="my-navbar-nav">
                <li className="my-nav-item">
                    <Link to={"/"} className="my-nav-link">
                        <img className="my-nav-item-icon" alt={"nav-item-logo"} src={homeIcon} width={50} height={50}/>
                        <p className="my-navbar-link-text">Home</p>
                    </Link>
                </li>

                <li className="my-nav-item">
                    <Link to={"/wow"} className="my-nav-link">
                        <img className="my-nav-item-icon" src={hsLogo} alt={"nav-item-logo"} width={50} height={50}/>
                        <p className="my-navbar-link-text">Hearthstone</p>
                    </Link>
                </li>

                <li className="my-nav-item">
                    <Link to={"/wow"} className="my-nav-link">
                        <img className="my-nav-item-icon" src={wowLogo} alt={"nav-item-logo"} width={50} height={50}/>
                        <p className="my-navbar-link-text">World of warcraft</p>
                    </Link>
                </li>

                <li className="my-nav-item">
                    <Link to={"/wow"} className="my-nav-link">
                        <img className="my-nav-item-icon" src={tftLogo} alt={"nav-item-logo"} width={50} height={50}/>
                        <p className="my-navbar-link-text">Teamfigt tactics</p>
                    </Link>
                </li>

                <li className="my-nav-item">
                    <Link to={"/pokemon"} className="my-nav-link">
                        <img className="my-nav-item-icon" src={pokeball} alt={"nav-item-logo"} width={50} height={50}/>
                        <p className="my-navbar-link-text">Pokémon</p>
                    </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}