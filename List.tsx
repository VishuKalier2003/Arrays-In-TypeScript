type ListProps = {
    names: {
        first_name: string,
        last_name: string
    }[]
}

export const List = (props: ListProps) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h3>{name.first_name} {name.last_name}</h3>
                )
            })}
        </div>
    )
}