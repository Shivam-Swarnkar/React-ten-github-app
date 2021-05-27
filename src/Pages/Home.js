import React, { useState, useEffect, useContext } from "react";
import Axios from "axios"
import {
    Row,
    Container,
    Col,
    Input,
    Button,
    InputGroup,
    InputGroupAddon
} from "reactstrap";

import UserContext from "../context/UserContext"
import UserCard from "../components/UserCard";
import Repos from "../components/Repos"
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
    const [user, setUser] = useState(null)
    const [userName, setUserName] = useState('')
    const context = useContext(UserContext)

    const fetchDetails = async () => {
        try {
            const { data } = await Axios.get(`https://api.github.com/users/${userName}`)
            setUser(data);
        }
        catch (error) {
            toast("Not able to find user", { type: "error" })
        }
    }

    if (!context.user?.uid) {
        return <Redirect to="/signin" />
    }
    return (
        <Container>
            <Row className="mt-3 mb-5">
                <Col md="5">
                    <InputGroup>
                        <Input
                            type="text"
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                            placeholder="Please provide the username"
                        />
                        <InputGroupAddon addonType="append">
                            <Button color="primary" onClick={fetchDetails}>Fetch User</Button>
                        </InputGroupAddon>
                    </InputGroup>
                    {user ?
                        <UserCard user={user} /> : null
                    }
                </Col>
                <Col md="7">
                    {user ?
                        <Repos repos_url={user.repos_url} /> : null
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Home;