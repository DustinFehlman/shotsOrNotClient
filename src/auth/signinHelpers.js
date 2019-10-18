import {Auth} from "aws-amplify";

export async function signIn(email, password, setUser) {
    try {
       await Auth.signIn(email, password)
            .then((res) => {
                console.log(res);
                setUser(res);
            })

    } catch (e) {
        console.log(e.message);
    }
}