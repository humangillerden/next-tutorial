import User from "../../components/user";

function UserList({users}) {
    return (
        <>
        <h1>List of users</h1>
        {users.map(user=>
            <div key={user.id}>
                {/* <p>{user.name}</p>
                <p>{user.email}</p>
                <hr /> */}
                <User user={user} />
            </div>
        )}
        </>
    )
}

export default UserList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);

    return {
        props: {
            users: data,
        }
    }
}