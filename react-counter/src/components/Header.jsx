export function Header(params) {
    const headerStyle = {
        position: 'absolute',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '1rem'
    }
    return(
        <h1 style={headerStyle}>React counter app <img src="/react.gif" alt="React Gif" style={{width: '2rem'}}/></h1>
    )
}