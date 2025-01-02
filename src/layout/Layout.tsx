import { FC, JSX } from "react";
import { Outlet } from "react-router";
import Navigation from '../components/Navigation/Navigation'

const Layout: FC = (): JSX.Element => {
    return (
        <>
            <main>
                <Outlet />
            </main>
            <Navigation />
        </>
    )
}
export default Layout