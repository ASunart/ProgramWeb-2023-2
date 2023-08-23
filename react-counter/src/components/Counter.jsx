export function Counter({ value }) {
    const counterStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '10rem',
    }
    return (
        <>
            <h2 style={counterStyle}>{value}</h2>
        </>
    )
}