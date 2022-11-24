import { Box } from '@mui/material'
import React from 'react'
import ChatBox from '../../components/ChatBox'
import Layout from '../../layouts';

ChatId.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
export default function ChatId() {
    return (
        <Box sx={{
            width: '100%',
            height: '78vh'
        }}>
            <ChatBox />
        </Box>
    )
}
