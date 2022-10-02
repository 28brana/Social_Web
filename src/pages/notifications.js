import { Avatar, AvatarGroup, Box, Button, Collapse, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, ListSubheader, Menu, MenuItem, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { CaretDown, CaretUp, Check, DotsThree, DotsThreeOutline, DotsThreeVertical, Trash, X } from 'phosphor-react';
import { useState } from 'react';

import Layout from "../layouts";

Notifications.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};

const RootStyle = styled('div')(({ theme }) => ({
    padding: theme.spacing(2),
    background: theme.palette.background.default
}))

export default function Notifications() {
    const [collapse, setCollapse] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // console.log(data.notifications)
    return (
        <RootStyle>
            <List
                subheader={
                    <ListSubheader component="div" color='primary' sx={{ background: theme.palette.background.default }} >
                        Friend Request
                    </ListSubheader>
                }>
                <ListItem onClick={() => setCollapse(!collapse)}>
                    <AvatarGroup max={2}>
                        <Avatar alt="Remy Sharp" />
                        <Avatar alt="Remy Sharp" />
                        <Avatar alt="Remy Sharp" />
                    </AvatarGroup>
                    <ListItemText sx={{ ml: '10px', cursor: 'pointer' }} primary={<Typography>Rahul rana +7 more wants to follow you</Typography>} />
                    {collapse ? <CaretUp size={24} /> : <CaretDown size={24} />}
                </ListItem>
                <Collapse in={collapse} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {
                            data.requests.map((element, index) => (
                                <ListItem key={index}>
                                    <ListItemAvatar>
                                        <Avatar src={element.profileImage} alt={element.userName} />
                                    </ListItemAvatar>
                                    <ListItemText primary={<Typography variant='body2'>{element.userName} sent a Request</Typography>}
                                        secondary={<Typography variant='caption'>{element.time}</Typography>} />
                                    <Button variant='contained' color='secondary' sx={{ mr: '12px' }}>Confirm</Button>
                                    <Button variant='outlined' >Delete</Button>
                                </ListItem>
                            ))
                        }




                    </List>
                </Collapse>
            </List>
            <Divider />
            <List
                subheader={
                    <ListSubheader component="div" color='primary' sx={{ background: theme.palette.background.default }} >
                        Notifications
                    </ListSubheader>
                }>
                {
                    data.notifications.map((element, index) => (
                        <Box sx={{ position: 'relative' }} key={index}>
                            <ListItem button={true} sx={{
                                ...(!element.isSeen && {
                                    background: '#E6E6FA'
                                })
                            }} >
                                <ListItemAvatar>
                                    <Avatar src={element.profileImage} alt={element.userName} />
                                </ListItemAvatar>
                                <ListItemText
                                    sx={{ ml: '10px', lineHeight: '0.8px' }}
                                    primary={<Typography variant='body2'>{element.content}</Typography>}
                                    secondary={<Typography variant='caption'>{element.time}</Typography>}
                                />
                                {
                                    element.image && <Box sx={{
                                        mt: '6px',
                                        marginRight: 3.5,
                                    }}>

                                        <Image src={element.image} width={80} height={40} objectFit="cover" />
                                    </Box>
                                }
                            </ListItem>
                            <IconButton onClick={handleClick} sx={{ position: 'absolute', right: 0, top: '13px' }}>
                                <DotsThree />
                            </IconButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose} sx={{ gap: 1 }}>
                                    <Check />
                                    mark as read
                                </MenuItem>
                                <MenuItem onClick={handleClose} sx={{ gap: 1 }}>
                                    <Trash />
                                    Delete
                                </MenuItem>
                                <MenuItem onClick={handleClose} sx={{ gap: 1 }}>
                                    <X />
                                    Cancel
                                </MenuItem>
                            </Menu>
                        </Box>
                    ))
                }
            </List>
        </RootStyle>
    )
}

// user name = user id because
const data = {
    notifications: [
        {
            id: '1',
            userName: 'Ravi',
            profileImage: 'https://i.pravatar.cc/30',
            content: 'Ravi likes your pic',
            image: 'https://loremflickr.com/320/240',
            isSeen: false,
            time: '1hour ago',
        }, {
            id: '2',
            userName: 'Rahul',
            profileImage: 'https://i.pravatar.cc/30',
            content: 'Rahul starts follow you',
            image: null,
            isSeen: false,
            time: '1hour ago',
        }, {
            id: '3',
            userName: 'Summan',
            profileImage: 'https://i.pravatar.cc/30',
            content: 'Suman creates a new Post',
            image: 'https://loremflickr.com/320/240',
            isSeen: true,
            time: '1hour ago',
        }
    ],
    requests: [
        {
            id: '1',
            userName: 'Summan',
            profileImage: 'https://i.pravatar.cc/30',
            isSeen: false,
            time: '1hour ago',
        },
        {
            id: '2',
            userName: 'Summan',
            profileImage: 'https://i.pravatar.cc/30',
            isSeen: false,
            time: '1hour ago',
        },
        {
            id: '3',
            userName: 'Summan',
            profileImage: 'https://i.pravatar.cc/30',
            isSeen: false,
            time: '1hour ago',
        },
    ]
}