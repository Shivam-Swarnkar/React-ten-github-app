import React from "react"
import { Card, CardBody } from "reactstrap"

const UserCard = ({ user }) => {
    return (
        <Card className="text-center mt-4 mb-4">
            <img src={user.avatar_url} className="img-thumbnail" />
            <CardBody>
                <div className="text-primary">{user.login}</div>
                <div className="text-primary">{user.bio}</div>
                <div className="text-info">Availble to hire: {user.hireable ? "Yes" : "No"}</div>
                <div className="text-info">Followers: {user.followers}</div>
            </CardBody>
        </Card>
    )
}

export default UserCard;