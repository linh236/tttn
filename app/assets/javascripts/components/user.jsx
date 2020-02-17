class Users extends React.Component {
  render() {
    var users = this.props.users.map((user) => {
      return (
        <tr>
          <td>{user.id}</td>
          <td>{user.email}</td>
        </tr>
      )
    })

    return(
      <tbody>
        {users}
      </tbody>
    )
  }
}

class Table extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      users: this.props.users
    }
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Mail</th>
          </tr>
        </thead>
        <Users users={this.state.users} />
      </table>
    )
  };
}
