type GreetProps = {
    name: string,
    messageCount: number, 
    isLoggedIn: boolean,
}

export const Greet = (props: GreetProps) => {
    return <div>
        <h2>
            {props.isLoggedIn ? `hello ${props.name} world, and ${props.messageCount}` : "hello you fail"}
        </h2>
    </div>
}