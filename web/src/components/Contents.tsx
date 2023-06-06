import React from "react";
import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { fireAuth } from "../firebase";
import '../App.css';
import { Link } from "react-router-dom";
import { FetchUsers } from "../hooks/SearchUsers";

export const Contents = () => {
  type User = {
    name: string;
    age: number;
  }
  const [users, setUsers] = useState<User[]>([]);

  const Form = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
  
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      if (!name) {
        alert("Please enter name");
        return;
      }
    
      if (name.length > 50) {
        alert("Please enter a name shorter than 50 characters");
        return;
      }
    
      if (age < 20 || age > 80) {
        alert("Please enter age between 20 and 80");
        return;
      }
    
      try {
        const result = await fetch("http://localhost:8000/user", {
          method: "POST",
          body: JSON.stringify({
            name: name,
            age: age,
          }),
        });
        if (!result.ok) {
          throw Error(`Failed to create user: ${result.status}`);
        }
    
        setName("");
        setAge(0);
        setUsers(await FetchUsers())
      } catch (err) {
        console.error(err);
      }
    };
  
    return (
      <form onSubmit={onSubmit}>
      <div>
        <label>Name: </label>
        <input
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Age: </label>
        <input
          type={"text"}
          style={{ marginBottom: 20 }}
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        ></input>
      </div>
      <button type={"submit"}>POST</button>
    </form>
    )
  }

  type Props = {
    users: User[];
  }
  
  const List = (props: Props) => {
    const { users } = props;
    return (
      <div className="list">
        <ul>
          {users.map(user => (
            <li key={user.name}>
              <Link to={`/${user.name}`}>
                {user.name}
              </Link>
            </li>           
          ))}
        </ul>
      </div>
    )
  }
  
  const signOutWithGoogle = (): void => {
    signOut(fireAuth).then(() => {
    alert("ログアウトしました");
    }).catch(err => {
    alert(err);
    });
  };
  
  useEffect(() => {
    (async () => {
      setUsers(await FetchUsers())
    })()
  }, [])
  
  return (
    <div className="App">
      <header>
        <h1 className="title">User Register</h1>
      </header>
      <Form/>
      <List users={users}/>
      <button onClick={signOutWithGoogle}>
        ログアウト
      </button>
      <div>
        <Link to="/test">
          道草
        </Link>
      </div>
    </div>
  )
}
