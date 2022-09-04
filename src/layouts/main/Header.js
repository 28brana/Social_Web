import { AppBar, TextField, Avatar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import { HEADER } from '../../config'
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: theme.palette.background.default,
    boxShadow: 'none',
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.mode === 'light' ? '#EBEBEB' : '#242424',

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
