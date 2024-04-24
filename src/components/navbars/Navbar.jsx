import { useNavigate } from "react-router-dom";
import logo from '../../assets/img/EscudoPeque.svg'
import { useUserDetails } from "../../shared/hooks";

const NavLogo = () => {
    return(
        <div className="nav-logo-container">
            <img
                className="nav-logo"
                src={logo}
                alt="Logo.svg"
                width='100%'
                height='100%'
            />
        </div>
    )
}

const NavButton = ({text, onclickHandler}) => {
    return(
        <span className="nav-button" onClick={onclickHandler}>
            {text}
        </span>
    )
}

export const NavBar = () => {
    const { isLogged, logout} = useUserDetails()

    const navigate = useNavigate()

    const handleNavigateToAuthPage = () => {
        navigate('/auth')
    }

    const handleNavigateToSettingPage = () => {
        navigate('/settings')
    }

    const handleNavigateToChannelsPage = () => {
        navigate('/channels')
    }

    const handleLogout = () => {
        logout()
    }

    return(
        <div className="nav-container">
            <NavLogo/>
            <div className="nav-buttons-container">
                <NavButton text='Home' onclickHandler={handleNavigateToChannelsPage}/>
                {!isLogged ? (
                    <NavButton text='Login' onclickHandler={handleNavigateToAuthPage}/>
                ) : (
                    <div>
                        <NavButton text='My Account' onclickHandler={handleNavigateToSettingPage}/>
                        <NavButton text='Logout' onclickHandler={handleLogout}/>
                    </div>
                )}
            </div>
        </div>
    )
}