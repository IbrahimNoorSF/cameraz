import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from
    "firebase/auth";
import initializeAuthentication from "../pages/Login/Firebase/firebase.initialize";
import axios from "axios";
import { useForm } from "react-hook-form";
initializeAuthentication();

const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const { reset } = useForm();
    const auth = getAuth();
    ////////// USER LOG OUT //////////
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    /////// OBSERVE WHEATHER AUTH STATE CHANGED OR NOT ///////
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, [])

    // ADMIN CHECKING
    useEffect(() => {
        fetch(`https://cameraz.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    const newRegistration = (email, password, name) => {
        setName(name);
        saveUser(name, email)
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(user);
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                    }).catch((error) => {
                        setError(error)
                    });
            })
    }
    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const saveUser = (name, email) => {
        const user = { name, email };
        axios.post('https://cameraz.herokuapp.com/users', user)
            .then(res => {
                if (res.data.insertedId) {

                }
            })
    }
    return {
        user, error, logOut, admin, newRegistration, handleLogin, name, isLoading
    }
}
export default useFirebase;