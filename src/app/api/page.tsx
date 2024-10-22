
export default async function Api() {

    const response = await fetch('https://api.github.com/users/nextjs');
    const user = await response.json();

    return (
        <>
        <p>
            Name : {user.name}
            Login : { user.login }
            Email : { user.email }
            Avatar : { user.avatar_url.src }
        </p>
        <a href={ user.Followers_url} >
            User Followers
        </a>
        </>
    )
} 