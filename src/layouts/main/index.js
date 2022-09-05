import Header from "./Header";
import SideBar from "./Sidebar";
import { styled } from '@mui/material/styles';
import { HEADER, SIDEBAR } from "../../config";
import { useState } from "react";

const StyledContainer = styled('div')(({ theme, collapse }) => ({
    background: theme.palette.background.neutral,
    paddingLeft: collapse ? SIDEBAR.MAIN_SIDEBAR_COLLAPSE_WIDTH : SIDEBAR.MAIN_SIDEBAR_WIDTH,
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
    minHeight: "100vh"
}));
export default function MainLayout({ children }) {
    const [collapse, setCollapse] = useState(false);
    const handleCollapse = () => {
        setCollapse(!collapse);
    }
    return (
        <>
            <Header />
            <SideBar collapse={collapse} handleCollapse={handleCollapse} />
            <StyledContainer collapse={collapse}>
                {children}
            </StyledContainer>
        </>
    )
}
