import { AppBar, Avatar, IconButton, InputBase, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import useResponsive from '../../hooks/useResponsive';
import Link from 'next/link';
const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: theme.palette.background.default,
    boxShadow: 'none',
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.border,

}));
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.neutral,
    '&:hover': {
        backgroundColor: theme.palette.background.neutral,
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        // marginLeft: theme.spacing(3),
        width: '400px',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    color: theme.palette.text.primary,
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: theme.palette.text.primary,
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));
export default function Header() {
    const isDesktop = useResponsive('up', 'md');
    return (
        <StyledAppBar >
            <Toolbar>
                <Stack
                    direction='row'
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    gap={isDesktop ? 0 : 2}
                    sx={{ width: '100%', padding: { md: '0 80px' } }}>
                    <Typography variant='body1' color='primary'>Logo.</Typography>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass weight='bold' />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    {
                        isDesktop ?
                            <Link href={'/profile'}><Avatar sx={{ cursor: 'pointer' }} /></Link> :
                            <Link href={'/upload'}>
                                <IconButton><Plus /></IconButton>
                            </Link>
                    }

                </Stack>
            </Toolbar>
        </StyledAppBar>
    )
}
