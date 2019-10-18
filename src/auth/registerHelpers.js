import {Auth} from "aws-amplify";

export async function registerSubmit(registration) {
    try {
        console.log(registration)
       return await Auth.signUp({
            username: registration.email,
            password: registration.password,
            attributes: {
                birthdate: registration.birthdate,
                name: registration.name,
                preferred_username: registration.username
            }
        });
    } catch (e) {
        console.log(e.message);
    }
}