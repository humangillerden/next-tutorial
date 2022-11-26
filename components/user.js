function User({ user }) {
    return (
        <>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <hr style={{borderColor:'yellowgreen'}}/>
        </>
    )
}

export default User