import { Box, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import EmojiPicker from "emoji-picker-react";
import { PaperPlaneRight } from "phosphor-react";
import { useState } from "react";
import EmojiButton from "./EmojiButton";

const RootStyle = styled('div')(({ theme }) => ({
    height: '100%',
    position: 'relative'
}));
const CustomInput = styled(TextField)(({ theme }) => ({
    background: theme.palette.background.default,
    width: '100%',
    // padding: 8,
    color: theme.palette.text.primary,
    '.MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
}));
const InputWrapper = styled('div')(({ theme }) => ({
    background: theme.palette.background.default,
    borderRadius: 12,
    width: '90%',
    padding: '0 16px',
}));
const ChatContainer = styled('div')(({ theme }) => ({
    height: '100%',
    overflow: 'auto',
    '::-webkit-scrollbar': {
        width: 6,
    },
    '::-webkit-scrollbar-thumb': {
        background: '#bdbdbd',
    },
    '::-webkit-scrollbar-track ': {
        background: '#ddd',
    }
}));
const Chat = styled(Box)(({ theme }) => ({
    background: theme.palette.background.default,
    borderRadius: 8,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: 6,
}));
const ChatWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
}));
const BottomWrapper = styled(Box)(({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    background: theme.palette.background.neutral,

}));
export default function ChatBox() {
    const [text, setText] = useState('');
    return (
        <RootStyle>
            <ChatContainer>
                {
                    data.map((element, index) => (
                        <ChatWrapper key={index} sx={{
                            ...(element.sentBy === 'Me' ? {
                                justifyContent: 'left',
                                marginLeft: '12px',
                            } : {
                                justifyContent: 'right',
                                marginRight: '12px',
                            })
                        }}>
                            <Chat>
                                <Typography variant="body2">{element.message}</Typography>
                                <Typography variant="caption" fontSize="10px">{element.time}</Typography>
                            </Chat>
                        </ChatWrapper>
                    ))
                }
            </ChatContainer>
            <BottomWrapper >
                <InputWrapper>
                    <Stack direction="row" alignItems='center'>
                        <EmojiButton onChange={(event) => {
                            setText(
                                text + event.emoji
                            )
                        }} />
                        <CustomInput
                            maxRows={4}
                            multiline
                            placeholder="Type a Message"
                            value={text}
                            onChange={(e) => {
                                setText(e.target.value);
                            }} />
                        <PaperPlaneRight size={32} color="#1E47FF" weight="fill" />
                    </Stack>
                </InputWrapper>
            </BottomWrapper>
        </RootStyle>
    )
}


const data = [
    {
        id: '1',
        message: 'Hi !!!',
        time: '10:17pm',
        sentBy: 'Me',
    },
    {
        id: '2',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'Me',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
    {
        id: '3',
        message: 'Hi, How are You !!!',
        time: '10:27pm',
        sentBy: 'You',
    },
]