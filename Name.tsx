type NameProps = {
    first_name: string
    last_name: string
}

export const Name = (props: NameProps) => {
    return (
        <div>{props.first_name} {props.last_name}</div>
    )
}