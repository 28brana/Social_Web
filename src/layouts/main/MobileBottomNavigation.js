import { BottomNavigation, BottomNavigationAction, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Switch, Typography } from '@mui/material';
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
    console.log({ isDesktop });


    const { themeMode, toggleMode } = useSettings();
    const links = [
        {
            title: 'Home',
            icon: (
                <House size={22} weight={tabIndex === 0 ? 'bold' : 'regular'} color={(tabIndex === 0 || theme.mode === 'dark') ? '#FFFFFF' : '#000000'} />
            ),
            path: '/'
        },
        {
            title: 'Messages',
            icon: (
                <Chat size={20} weight={tabIndex === 1 ? 'bold' : 'regular'} color={(tabIndex === 1 || theme.mode === 'dark') ? '#FFFFFF' : '#000000'} />
            ),
            path: '/chats'
        },
        {
            title: 'Explore',
            icon: (
                <Compass size={20} weight={tabIndex === 2 ? 'bold' : 'regular'} color={(tabIndex === 2 || theme.mode === 'dark') ? '#FFFFFF' : '#000000'} />
            ),
            path: '/explore'
        },
        {
            title: 'Notifications',
            icon: (
                <Fire size={20} weight={tabIndex === 3 ? 'bold' : 'regular'} color={(tabIndex === 3 || theme.mode === 'dark') ? '#FFFFFF' : '#000000'} />
            ),
            path: '/notifications'
        },
        {
            title: 'Friend Requests',
            icon: (
                <Users size={20} weight={tabIndex === 4 ? 'bold' : 'regular'} color={(tabIndex === 4 || theme.mode === 'dark') ? '#FFFFFF' : '#000000'} />
            ),
            path: '/friends'
        },

    ]
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                // showLabels
                value={tabIndex}
                onChange={(event, newValue) => {
                    handleSelect(newValue);
                }}
            >
                {
                    links.map((element, index) => (
                        <BottomNavigationAction key={index} label={element.title} icon={element.icon} />
                    ))
                }


            </BottomNavigation>
        </Paper>


    )
}
