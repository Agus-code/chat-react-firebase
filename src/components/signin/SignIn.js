import './SignIn.css'
import { useContext } from 'react'
import { AuthContext } from '../../provider/AuthContext'
import firebase from './../../firebase'


const SignIn = ()=>{

    const { getUser, logged } = useContext(AuthContext);

    const sendUser = async(e) => {
        e.preventDefault();

        const provider = new firebase.auth.GoogleAuthProvider()

        return firebase
                .auth()
                .signInWithPopup(provider)
                .then(res=>{
                    getUser(res.user.displayName, res.user.email, res.user.photoURL);
                    logged(true)
                })
                .catch(err=>console.log(err))
    }

    

    return(
        <>
            <div className="signin">
                <div className="signin-container">
                    <form className="signin-container__form" onSubmit={sendUser}>
                        <button className="signin-container__form-btn">
                            Sign in with google
                            <i className="signin-container__form-btn-i fab fa-google"></i>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn