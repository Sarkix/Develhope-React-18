import React, { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRememberChange = (event) => {
        setRemember(event.target.checked);
    };

    return (
        <div>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </label>
            <label>
                Password:{" "}
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </label>
            <label>
                Remember me:{" "}
                <input
                    type="checkbox"
                    value={remember}
                    onChange={handleRememberChange}
                />
            </label>
        </div>
    );
}

export default Login;
