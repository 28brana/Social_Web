import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import { useTheme } from '@mui/material/styles';
import { Avatar, Collapse, Divider, IconButton, ListItemAvatar, ListItemButton, ListItemIcon, Stack, Typography } from '@mui/material';
import { DotsThreeVertical, Fire } from 'phosphor-react';
import { useState } from 'react';

// Sort by time

export default function PostComment({ data }) {
    const theme = useTheme();
    const [replyOpen, setReplyOpen] = useState(false);
    return (
        <>
            <ListItem sx={{
                borderBottom: "1px solid",
                borderColor: theme.palette.border,
                alignItems: 'flex-start'
            }}>
                <ListItemAvatar>
                    <Avatar src={data.photoUrl} alt={data.name} />
                </ListItemAvatar>
                <Stack>
                    <Typography varinat='body1' fontWeight={500}>{data.name}</Typography>
                    <Typography variant='body2'>{data.comment}</Typography>
                    <Stack direction='row' spacing={1}>
                        <Typography variant='caption' color={'GrayText'}>{data.time}</Typography>
                        <Typography variant='caption' color={'GrayText'}>Reply</Typography>
                        <Typography variant='caption' color={'GrayText'} onClick={() => { setReplyOpen(!replyOpen) }} sx={{
                            cursor: 'pointer',
                        }}>View Replies +12</Typography>
                    </Stack>
                </Stack>
                <IconButton sx={{
                    ml: 'auto'
                }}>
                    <DotsThreeVertical />
                </IconButton>
            </ListItem>
            <Collapse in={replyOpen} timeout="auto" unmountOnExit sx={{ ml: '48px' }}>
                {
                    data.coversation.map((element, subIndex) => (
                        <List component="div" disablePadding key={subIndex}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={element.pic} alt={element.name} />
                                </ListItemAvatar>
                                <Stack>
                                    <Typography varinat='body1' fontWeight={500}>{element.name}</Typography>
                                    <Typography variant='body2'>{element.comment}</Typography>
                                    <Stack direction='row' spacing={1}>
                                        <Typography variant='caption' color={'GrayText'}>{element.time}</Typography>
                                        <Typography variant='caption' color={'GrayText'}>Reply</Typography>

                                    </Stack>
                                </Stack>
                                <IconButton sx={{
                                    ml: 'auto'
                                }}>
                                    <DotsThreeVertical />
                                </IconButton>
                            </ListItem>
                        </List>
                    ))
                }
            </Collapse>

        </>
    );
}
