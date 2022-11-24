import { Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { CaretDoubleLeft, Chat, Compass, Fire, House, Moon, Plus, Power, Sun, UploadSimple, Users } from 'phosphor-react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SIDEBAR } from '../../config'
import useResponsive from '../../hooks/useResponsive';
import useSettings from '../../hooks/useSetting';
import { updateTabIndex } from '../../redux/slices/router';
import { useRouter } from 'next/router'

const RootStyle = styled('div')(({ theme, collapse }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    height: "100vh",
    width: SIDEBAR.MAIN_SIDEBAR_WIDTH,
    zIndex: 999,
    background: theme.palette.background.default,
    paddingTop: "100px",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    ...(collapse && {
        width: SIDEBAR.MAIN_SIDEBAR_COLLAPSE_WIDTH
    })
}));
const StyledListItemButtom = styled(ListItemButton)(({ theme }) => ({
    borderRadius: 5,
    gap: '1.2em',
    '&.Mui-selected': {
        background: theme.palette.background.secondary,
        color: 'white',
        ':hover': {
            background: theme.palette.background.secondary,
        }
    },
    alignItems: 'center',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '12px',
}));

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: 'black',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

export default function SideBar({ collapse, handleCollapse }) {

    const theme = useTheme().palette;
    const dispatch = useDispatch();
    const tabIndex = useSelector((state) => state.router.tabIndex);

    const handleSelect = (newValue) => {
        dispatch(updateTabIndex(newValue));
    }
    const { pathname } = useRouter();
    useEffect(() => {
        let currentIndex = -1;
        switch (pathname) {
            case '/': currentIndex = 0; break;
            case '/chats': currentIndex = 1; break;
            case '/explore': currentIndex = 2; break;
            case '/notifications': currentIndex = 3; break;
            case '/upload': currentIndex = 4; break;
            default: break;
        }
        handleSelect(currentIndex);
    }, [pathname])




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
            title: 'Upload',
            icon: (
                <UploadSimple size={20} weight={tabIndex === 4 ? 'bold' : 'regular'} color={(tabIndex === 4 || theme.mode === 'dark') ? '#FFFFFF' : '#000000'} />
            ),
            path: '/upload'
        },


    ]
    return (
        <RootStyle collapse={collapse}>
            <IconButton
                onClick={handleCollapse}
                sx={{
                    position: 'absolute',
                    top: '80px',
                    left: collapse ? '30px' : '210px',
                    zIndex: 99999,
                }}
            >
                <CaretDoubleLeft size={22} color={theme.text.primary} />
            </IconButton>

            <List sx={{
                padding: 3,

            }}>
                {
                    links.map((element, index) => (
                        <Link href={element.path} key={index}>
                            <StyledListItemButtom selected={tabIndex === index} onClick={() => handleSelect(index)}>

                                {element.icon}

                                <ListItemText sx={{
                                    ...(collapse && {
                                        display: 'none'
                                    }),
                                }}>
                                    <Typography fontWeight={tabIndex === index ? 600 : 400}>
                                        {element.title}
                                    </Typography>
                                </ListItemText>
                            </StyledListItemButtom>
                        </Link>
                    ))
                }
            </List>
            <nav>
                <Divider />
                <List sx={{
                    padding: 3,
                }}>
                    <ListItemButton sx={{ gap: '1.2em' }}>
                        <Power size={20} />

                        <ListItemText sx={{
                            ...(collapse && {
                                display: 'none'
                            })
                        }}>
                            Logout
                        </ListItemText>
                    </ListItemButton>
                    <ListItem sx={{ gap: collapse ? 0 : '1.2em', justifyContent: 'center' }} >
                        {
                            false && themeMode === 'dark' ? <Moon size={20} /> : <Sun size={20} />
                        }
                        <ListItemText sx={{
                            ...(collapse && {
                                display: 'none'
                            })
                        }}>
                            {
                                themeMode === 'dark' ? "Dark Mode" : "Light Mode"
                            }
                        </ListItemText>
                        <IOSSwitch checked={themeMode === 'dark'} onChange={toggleMode} />
                    </ListItem>
                </List>
            </nav>
        </RootStyle>
    )
}
