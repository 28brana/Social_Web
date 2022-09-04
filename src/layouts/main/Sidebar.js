import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { Chat, Compass, Fire, House, Moon, Power, Sun, Users } from 'phosphor-react'
import { useState } from 'react';
import { SIDEBAR } from '../../config'
import useSettings from '../../hooks/useSetting';

const RootStyle = styled('div')(({ theme }) => ({
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
    justifyContent: 'space-between'
}));
const StyledListItemButtom = styled(ListItemButton)(({ theme }) => ({
    borderRadius: 5,
    gap: '1.2em',
    '&.Mui-selected': {
        background: theme.palette.background.secondary,
        color: 'white',
    },
    alignItems: 'center',

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
                <House size={20} color={(select === 0 || theme.mode === 'dark') ? '#FFFFFF' : '#000000'} />
            ),
            path: '/'
        },
        {
            title: 'Messages',
            icon: (
                <Chat size={20} color={(select === 1 || theme.mode === 'dark') ? '#FFFFFF' : '#000000'} />
            ),
            path: '/'
        },
        {
            title: 'Explore',
            icon: (
                <Compass size={20} color={(select === 2 || theme.mode === 'dark') ? '#FFFFFF' : '#000000'} />
            ),
            path: '/'
        },
        {
            title: 'Notifications',
            icon: (
                <Fire size={20} color={(select === 3 || theme.mode === 'dark') ? '#FFFFFF' : '#000000'} />
            ),
            path: '/'
        },
        {
            title: 'Friend Requests',
            icon: (
                <Users size={20} color={(select === 4 || theme.mode === 'dark') ? '#FFFFFF' : '#000000'} />
            ),
            path: '/'
        },

    ]
    return (
        <RootStyle>
            <List sx={{
                padding: 3,

            }}>
                {
                    links.map((element, index) => (
                        <StyledListItemButtom key={index} selected={select === index} onClick={() => handleSelect(index)}>
                            {element.icon}

                            <ListItemText>
                                {element.title}
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

                        <ListItemText>
                            Logout
                        </ListItemText>
                    </ListItemButton>
                    <ListItem sx={{ gap: '1.2em' }}>
                        {
                            themeMode === 'dark' ? <Moon size={20} /> : <Sun size={20} />
                        }
                        <ListItemText>
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
