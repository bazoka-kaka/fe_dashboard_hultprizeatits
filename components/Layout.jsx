import Nav from './Nav.jsx'

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div>
                <main>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout