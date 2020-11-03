import React, { Component } from 'react';

class User extends Component {
    render() {
        let {user} = this.props;
        return (
            <div>
                {
                    user.status && (
                        <div>
                            {user.id} -- {user.name} -- {user.age} -- {user.status.toString()}
                        </div>
                    )
                }
                {
                    !user.status && (
                        <div>
                            <b>
                                {user.id} -- {user.name} -- {user.age} -- {user.status.toString()}
                            </b>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default User;