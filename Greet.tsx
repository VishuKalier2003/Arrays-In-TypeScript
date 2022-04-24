type GreetProps = {
    name: string
    num: number
    loggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                {props.loggedIn
                ? `Welcome ${props.name} meeting at ${props.num} time`
                : `Welcome Guest !!`
                }
            </h2>
        </div>
    )
}