import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: theme.palette.background.default,
    boxShadow: 'none',
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.border,

}));
export default function Header() {
    return (
        <StyledAppBar >
            <Toolbar>
                {/* <Typography></Typography>
                <TextField />
                <Avatar /> */}
            </Toolbar>
        </StyledAppBar>
    )
}
