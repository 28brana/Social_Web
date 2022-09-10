import { Avatar, AvatarGroup, Button, Collapse, Divider, List, ListItem, ListItemAvatar, ListItemText, ListSubheader, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { CaretDown, CaretUp } from 'phosphor-react';
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
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    return (
        <RootStyle>
            <List
                subheader={
                    <ListSubheader component="div" color='primary' sx={{ background: theme.palette.background.default }} >
                        Friend Request
                    </ListSubheader>
                }>
                <ListItem onClick={() => setOpen(!open)}>
                    <AvatarGroup max={2}>
                        <Avatar alt="Remy Sharp" />
                        <Avatar alt="Remy Sharp" />
                        <Avatar alt="Remy Sharp" />
                    </AvatarGroup>
                    <ListItemText sx={{ ml: '10px', cursor: 'pointer' }} primary={<Typography>Rahul rana +7 more wants to follow you</Typography>} />
                    {open ? <CaretUp size={24} /> : <CaretDown size={24} />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant='body2'>Rohan starts follow you</Typography>}
                                secondary={<Typography variant='caption'>1 hour ago</Typography>} />
                            <Button variant='contained' color='secondary' sx={{ mr: '12px' }}>Confirm</Button>
                            <Button variant='outlined' >Delete</Button>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant='body2'>Rohan starts follow you</Typography>}
                                secondary={<Typography variant='caption'>1 hour ago</Typography>} />
                            <Button variant='contained' color='secondary' sx={{ mr: '12px' }}>Confirm</Button>
                            <Button variant='outlined' >Delete</Button>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant='body2'>Rohan starts follow you</Typography>}
                                secondary={<Typography variant='caption'>1 hour ago</Typography>} />
                            <Button variant='contained' color='secondary' sx={{ mr: '12px' }}>Confirm</Button>
                            <Button variant='outlined' >Delete</Button>
                        </ListItem>


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
                <ListItem>
                    <ListItemAvatar>
                        <Avatar />
                    </ListItemAvatar>
                    <ListItemText
                        sx={{ ml: '10px', lineHeight: '0.8px' }}
                        primary={<Typography variant='body2'>Rohan starts follow you</Typography>}
                        secondary={<Typography variant='caption'>1 hour ago</Typography>}
                    />
                    <Image src={'https://loremflickr.com/320/240'} width={80} height={40} objectFit="cover" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar />
                    </ListItemAvatar>
                    <ListItemText
                        sx={{ ml: '10px', lineHeight: '0.8px' }}
                        primary={<Typography variant='body2'>Rohan starts follow you</Typography>}
                        secondary={<Typography variant='caption'>1 hour ago</Typography>}
                    />
                    <Image src={'https://loremflickr.com/320/240'} width={80} height={40} objectFit="cover" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar />
                    </ListItemAvatar>
                    <ListItemText
                        sx={{ ml: '10px', lineHeight: '0.8px' }}
                        primary={<Typography variant='body2'>Rohan starts follow you</Typography>}
                        secondary={<Typography variant='caption'>1 hour ago</Typography>}
                    />
                    <Image src={'https://loremflickr.com/320/240'} width={80} height={40} objectFit="cover" />
                </ListItem>

            </List>
        </RootStyle>
    )
}
