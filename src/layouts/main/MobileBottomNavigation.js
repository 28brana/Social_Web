import { Avatar, BottomNavigation, BottomNavigationAction, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Switch, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { CaretDoubleLeft, Chat, Compass, Fire, House, Moon, Power, Sun, Users } from 'phosphor-react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SIDEBAR } from '../../config'
import useResponsive from '../../hooks/useResponsive';
import useSettings from '../../hooks/useSetting';
import { updateTabIndex } from '../../redux/slices/router';

const RootStyle = styled('div')(({ theme }) => ({
    position: 'fixed',

}));



export default function MobileBottomNavigation() {

    const theme = useTheme().palette;
    const dispatch = useDispatch();
    const tabIndex = useSelector((state) => state.router.tabIndex);

    const handleSelect = (newValue) => {
        dispatch(updateTabIndex(newValue));
    }

    const isDesktop = useResponsive('up', 'md');
    // console.log({ isDesktop });


    const { themeMode, toggleMode } = useSettings();
    const links = [
        {
            title: 'Home',
            icon: (
                <House size={22} />
            ),
            path: '/'
        },
        {
            title: 'Messages',
            icon: (
                <Chat size={20} />
            ),
            path: '/chats'
        },
        {
            title: 'Explore',
            icon: (
                <Compass size={20} />
            ),
            path: '/explore'
        },
        {
            title: 'Notifications',
            icon: (
                <Fire size={20} />
            ),
            path: '/notifications'
        },
        {
            title: 'profile',
            icon: (
                <Avatar sx={{ width: 25, height: 25 }} />
            ),
            path: '/profile'
        },


    ]
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: '9999' }} elevation={3}>
            <BottomNavigation
                showLabels={false}
                sx={{
                    '.MuiBottomNavigationAction-root': {
                        color: theme.icon.neutral

                    },
                    '.Mui-selected': {
                        color: theme.icon.primary
                    }
                }}

                value={tabIndex}
                onChange={(event, newValue) => {
                    handleSelect(newValue);
                }}
            >
                {
                    links.map((element, index) => (
                        <BottomNavigationAction key={index} icon={element.icon} />
                    ))
                }


            </BottomNavigation>
        </Paper>


    )
}
