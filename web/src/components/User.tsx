import { Link, useParams } from "react-router-dom";
import { FindUser } from "../hooks/SearchUsers";

export const UserPage = () => {
    let {id} = useParams();
    if (id === undefined) id = ""
    const age = FindUser(id)
    return (
        <div>
            <h1>{age}</h1>
            <Link to="/">
                ホームへ
            </Link>
        </div>
)};