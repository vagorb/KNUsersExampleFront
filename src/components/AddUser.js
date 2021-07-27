import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../actions/users";

const AddUser = () => {
    const initialUserState = {
        id: null,
        username: "",
        firstName: "",
        lastName: "",
        email: ""
    };
    const [user, setUser] = useState(initialUserState);
    const [submitted, setSubmitted] = useState(false);

    const dispatch = useDispatch();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const saveUser = () => {
        const { username, firstName, lastName, email } = user;

        dispatch(createUser(username, firstName, lastName, email))
            .then(data => {
                setUser({
                    id: data.id,
                    username: data.username,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email
                });
                setSubmitted(true);

                console.log(data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newUser = () => {
        setUser(initialUserState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div>
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={newUser}>
                        Add
                    </button>
                </div>
            ) : (
                <div>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            required
                            value={user.username}
                            onChange={handleInputChange}
                            name="username"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            required
                            value={user.firstName}
                            onChange={handleInputChange}
                            name="firstName"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            required
                            value={user.lastName}
                            onChange={handleInputChange}
                            name="lastName"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            required
                            value={user.email}
                            onChange={handleInputChange}
                            name="email"
                        />
                    </div>

                    <button onClick={saveUser} className="btn btn-success">
                        Submit
                    </button>
                </div>
            )}
        </div>
);
};

export default AddUser;