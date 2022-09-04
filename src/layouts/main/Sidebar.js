import { Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { CaretDoubleLeft, Chat, Compass, Fire, House, Moon, Power, Sun, Users } from 'phosphor-react'
import { useState } from 'react';
import { SIDEBAR } from '../../config'
import useSettings from '../../hooks/useSetting';

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
    },
    alignItems: 'center',
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '12px'

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

export default function SideBar() {
    const [collapse, setCollapse] = useState(false);
    const handleCollapse = () => {
        setCollapse(!collapse);
    }
    const [select, setSelect] = useState(0);
    const handleSelect = (newValue) => {
        setSelect(newValue)
    }
    const theme = useTheme().palette;
    const { themeMode, toggleMode } = useSettings();
    const links = [
        {
            title: 'Home',
            icon: (
                <House size={22} weight={select === 0 ? 'bold' : 'regular'} color={(select === 0 || theme.mode === 'dark') ? '#FFFFFF' : '#000000'} />
            ),
            path: '/'
        },
        {
            title: 'Messages',
            icon: (
                <Chat size={20} weight={select === 1 ? 'bold' : 'regular'} color={(select === 1 || theme.mode === 'dark') ? '#FFFFFF' : '#000000'} />
            ),
            path: '/'
        },
        {
            title: 'Explore',
            icon: (
                <Compass size={20} weight={select === 2 ? 'bold' : 'regular'} color={(select === 2 || theme.mode === 'dark') ? '#FFFFFF' : '#000000'} />
            ),
            path: '/'
        },
        {
            title: 'Notifications',
            icon: (
                <Fire size={20} weight={select === 3 ? 'bold' : 'regular'} color={(select === 3 || theme.mode === 'dark') ? '#FFFFFF' : '#000000'} />
            ),
            path: '/'
        },
        {
            title: 'Friend Requests',
            icon: (
                <Users size={20} weight={select === 4 ? 'bold' : 'regular'} color={(select === 4 || theme.mode === 'dark') ? '#FFFFFF' : '#000000'} />
            ),
            path: '/'
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
                        <StyledListItemButtom key={index} selected={select === index} onClick={() => handleSelect(index)}>
                            {element.icon}

                            <ListItemText sx={{
                                ...(collapse && {
                                    display: 'none'
                                }),
                            }}>
                                <Typography fontWeight={select === index ? 600 : 400}>
                                    {element.title}
                                </Typography>
                            </ListItemText>
                        </StyledListItemButtom>
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
