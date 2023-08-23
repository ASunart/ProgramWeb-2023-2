export function Footer() {
    const footerStyle = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        padding: '1.5rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
    return(
        <footer style={footerStyle}>
            <h3>J. Alejandro Solarte</h3>
            <h3>Sunart Dev</h3>
        </footer>
    )
}