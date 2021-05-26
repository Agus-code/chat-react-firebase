import { useContext } from 'react'
import './Header.css'
import { AuthContext } from './../../provider/AuthContext'

const Header = ()=>{

    const { isLogged, userData } = useContext(AuthContext)

    return(
        <>
            <header className="header">
                <div className="header-title">
                    <h1 className="header-title__h1">
                        Chat | React - Firebase
                    </h1>
                </div>
                <div className="header-user">
                    {isLogged===true &&
                        <>
                            <div className="header-user-img">
                                <img
                                    src={userData.photo}
                                    alt="user img"
                                    className="header-user-img__img"   
                                />
                            </div>
                            <div className="header-user-name">
                                <span className="header-user-name__span">
                                    {userData.name}
                                </span>
                            </div>
                        </>
                    }
                </div>
            </header>
        </>
    )
}

export default Header;