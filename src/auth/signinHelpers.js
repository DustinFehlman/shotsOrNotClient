import {Auth} from "aws-amplify";

export async function signIn(email, password, setUser) {
    try {
       await Auth.signIn(email, password)
            .then((res) => {
                setUser(res);
                return res
            })

    } catch (e) {
        console.log(e.message);
    }
}

export async function signOut(setUser) {
    try {
        await Auth.signOut()
            .then(() => {
                setUser(null);
            })

    } catch (e) {
        console.log(e.message);
    }
}