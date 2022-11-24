import { Box, Button, Container, List, ImageList, ImageListItem, ListItem, Stack, TextField, Typography, Avatar, ListItemAvatar, ListItemText, Badge, ListItemButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { useState } from "react";
import ChatBox from "../../components/ChatBox";
import useResponsive from "../../hooks/useResponsive";

import Layout from "../../layouts";
Chats.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
const SideBar = styled(Box)(({ theme }) => ({
    background: theme.palette.background.default,
    maxHeight: '90vh',
    left: 0,
    width: '300px',
    overflowY: 'auto',
    '::-webkit-scrollbar': {
        width: 6,
    },
    '::-webkit-scrollbar-thumb': {
        background: '#bdbdbd',
    },
    '::-webkit-scrollbar-track ': {
        background: '#ddd',
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },

}));

export default function Chats() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const isDesktop = useResponsive('up', 'md');

    return (
        <Container>
            <Stack direction={'row'}>
                <SideBar>
                    <List sx={{
                        width: '100%',
                    }}>
                        {
                            [...Array(10)].map((element, index) => (
                                <ListItemButton
                                    sx={{
                                        width: '100%',
                                    }}
                                    {...(!isDesktop && {
                                        href: '/chats/id'
                                    })}
                                    key={index}
                                    selected={index === selectedIndex}
                                    onClick={() => setSelectedIndex(index)}>
                                    <Badge badgeContent={index} color="secondary" sx={{
                                        '& .MuiBadge-badge': {
                                            right: -15,
                                            top: 13,
                                            padding: '0 4px',
                                        },
                                    }}>
                                        <Stack direction='row' alignItems='center' sx={{ width: '100%' }}>
                                            <ListItemAvatar>
                                                <Avatar src="https://loremflickr.com/320/240" alt="a" />
                                            </ListItemAvatar>
                                            <Stack >
                                                <Typography variant="body1" >Bharat Rana</Typography>
                                                <Typography variant="caption" noWrap>Active Now</Typography>
                                            </Stack>
                                        </Stack>
                                    </Badge>
                                </ListItemButton>
                            ))
                        }
                    </List>
                </SideBar>
                {isDesktop && <Box sx={{
                    width: '100%',
                    height: '90vh'
                }}>
                    <ChatBox />
                </Box>}
            </Stack>


        </Container>
    );
}
