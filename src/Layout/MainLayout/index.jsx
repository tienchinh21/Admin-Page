import { Header, Menu, MiniDrawer } from "./components";


const MainLayout = ({ children }) => {
    return (
        <>
            <MiniDrawer>
                {children}
            </MiniDrawer>
        </>
    );
};

export default MainLayout;