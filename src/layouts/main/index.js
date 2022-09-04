import Header from "./Header";
import SideBar from "./Sidebar";
import { styled } from '@mui/material/styles';
import { HEADER, SIDEBAR } from "../../config";

const StyledContainer = styled('div')(({ theme }) => ({
    background: theme.palette.background.neutral,
    paddingLeft: SIDEBAR.MAIN_SIDEBAR_WIDTH,
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
    minHeight: "100vh"
}));
export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <SideBar />
            <StyledContainer>
                {children}
            </StyledContainer>

        </>
    )
}
