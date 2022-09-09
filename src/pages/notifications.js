import { Avatar, AvatarGroup, Button, Collapse, Divider, List, ListItem, ListItemText, ListSubheader, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
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
    return (
        <RootStyle>
            <List
                subheader={
                    <ListSubheader component="div" >
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
                            <Avatar />
                            <ListItemText sx={{ ml: '10px' }} primary={<Typography variant='body2'>Rohan starts follow you</Typography>}
                                secondary={<Typography variant='caption'>1 hour ago</Typography>} />
                            <Button variant='contained' sx={{ mr: '12px' }}>Follow</Button>
                            <Button variant='text' >Delete</Button>
                        </ListItem>
                        <ListItem>
                            <Avatar />
                            <ListItemText sx={{ ml: '10px' }} primary={<Typography variant='body2'>Rohan starts follow you</Typography>}
                                secondary={<Typography variant='caption'>1 hour ago</Typography>} />
                            <Button variant='contained' sx={{ mr: '12px' }}>Follow</Button>
                            <Button variant='text' >Delete</Button>
                        </ListItem>
                        <ListItem>
                            <Avatar />
                            <ListItemText sx={{ ml: '10px' }} primary={<Typography variant='body2'>Rohan starts follow you</Typography>}
                                secondary={<Typography variant='caption'>1 hour ago</Typography>} />
                            <Button variant='contained' sx={{ mr: '12px' }}>Follow</Button>
                            <Button variant='text' >Delete</Button>
                        </ListItem>
                        <ListItem>
                            <Avatar />
                            <ListItemText sx={{ ml: '10px' }} primary={<Typography variant='body2'>Rohan starts follow you</Typography>}
                                secondary={<Typography variant='caption'>1 hour ago</Typography>} />
                            <Button variant='contained' sx={{ mr: '12px' }}>Follow</Button>
                            <Button variant='text' >Delete</Button>
                        </ListItem>

                    </List>
                </Collapse>
            </List>
            <Divider />
            <List
                subheader={
                    <ListSubheader component="div" >
                        Notifications
                    </ListSubheader>
                }>
                <ListItem>
                    <Avatar />
                    <ListItemText
                        sx={{ ml: '10px', lineHeight: '0.8px' }}
                        primary={<Typography variant='body2'>Rohan starts follow you</Typography>}
                        secondary={<Typography variant='caption'>1 hour ago</Typography>}
                    />
                </ListItem>
                <ListItem>
                    <Avatar />
                    <ListItemText
                        sx={{ ml: '10px', lineHeight: '0.8px' }}
                        primary={<Typography variant='body2'>Rohan starts follow you</Typography>}
                        secondary={<Typography variant='caption'>1 hour ago</Typography>}
                    />
                </ListItem>
                <ListItem>
                    <Avatar />
                    <ListItemText
                        sx={{ ml: '10px', lineHeight: '0.8px' }}
                        primary={<Typography variant='body2'>Sonu likes your photo</Typography>}
                        secondary={<Typography variant='caption'>1 hour ago</Typography>}
                    />
                </ListItem>
                <ListItem>
                    <Avatar />
                    <ListItemText
                        sx={{ ml: '10px', lineHeight: '0.8px' }}
                        primary={<Typography variant='body2'>Mohan Creates new post </Typography>}
                        secondary={<Typography variant='caption'>1 hour ago</Typography>}
                    />
                </ListItem>
            </List>
        </RootStyle>
    )
}
