import Header from "./Header";
import SideBar from "./Sidebar";
import { styled } from '@mui/material/styles';
import { HEADER, SIDEBAR } from "../../config";
import { useState } from "react";
import useResponsive from "../../hooks/useResponsive";
import MobileBottomNavigation from "./MobileBottomNavigation";

const StyledContainer = styled('div')(({ theme, collapse }) => ({
    background: theme.palette.background.neutral,
    paddingTop: HEADER.MAIN_DESKTOP_HEIGHT,
    minHeight: "100vh",
    [theme.breakpoints.up('md')]: {
        paddingLeft: collapse ? SIDEBAR.MAIN_SIDEBAR_COLLAPSE_WIDTH : SIDEBAR.MAIN_SIDEBAR_WIDTH,
    },
    [theme.breakpoints.down('md')]: {
        paddingBottom:HEADER.MAIN_DESKTOP_HEIGHT,
    },
}));
export default function MainLayout({ children }) {
    const [collapse, setCollapse] = useState(false);
    const handleCollapse = () => {
        setCollapse(!collapse);
    }
    const isDesktop = useResponsive('up', 'md');
    // console.log({ isDesktop });

    return (
        <>
            <Header />
            {
                isDesktop && <SideBar collapse={collapse} handleCollapse={handleCollapse} />
            }

            <StyledContainer collapse={collapse}>
                {children}
            </StyledContainer>
            {
                !isDesktop && <MobileBottomNavigation />
            }
        </>
    )
}
