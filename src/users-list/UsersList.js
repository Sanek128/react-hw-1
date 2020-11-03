import React, { Component } from 'react';
import User from '../components/user/User';
import { users } from '../data/data';

class UsersList extends Component {
    render() {
        return (
            <div>
                {
                    users.map (user => {
                        return (
                            <User user = {user} key = {user.id}  />
                        )
                    })
                }
            </div>
        );
    }
}

export default UsersList;