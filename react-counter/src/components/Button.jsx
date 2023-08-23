export function Button({type, action, iconClass, gridPosition}){
    return(
        <button onClick={action} className={iconClass}></button>
    )
}