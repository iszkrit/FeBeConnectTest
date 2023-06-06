import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { fireAuth } from "../firebase";

export const LoginForm: React.FC = () => {
    const signInWithGoogle = (): void => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(fireAuth, provider)
        .then(res => {
            const user = res.user;
            console.log(user)
            alert("ログインユーザー: " + user.displayName);
        })
        .catch(err => {
            const errorMessage = err.message;
            alert(errorMessage);
        });
    };



    return (
        <div>
        <button onClick={signInWithGoogle}>
            Googleでログイン
        </button>
        </div>
    );
};