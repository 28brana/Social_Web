import { Avatar, Button, Dialog, List, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react";
import PostComment from "./PostComment"
import { styled, useTheme } from '@mui/material/styles';

const optionsList = [
    {
        photoUrl: 'https://i.pravatar.cc/300',
        name: 'Kunal Kumar',
        comment: 'Who are you ?',
        coversation: [
            {
                pic: 'https://i.pravatar.cc/300',
                name: 'Goldi',
                comment: 'I am Me !',
                time: '12min'
            }, {
                pic: 'https://i.pravatar.cc/300',
                name: 'Goldi',
                comment: 'okay',
                time: '12min'
            }
        ],
        like: true,
        time: '1h',
    }, {
        photoUrl: 'https://i.pravatar.cc/300',
        name: 'Kunal Kumar',
        comment: 'Who are you ?',
        coversation: [
            {
                pic: 'https://i.pravatar.cc/300',
                name: 'Goldi',
                comment: 'I am Me !',
                time: '12min'
            }, {
                pic: 'https://i.pravatar.cc/300',
                name: 'Goldi',
                comment: 'okay',
                time: '12min'
            }
        ],
        like: true,
        time: '1h',
    }
]
export default function PostCommentDialogBox({ open, onClose }) {
    const [comment, setComment] = useState('');
    const handleChangeComment = (e) => {
        setComment(e.target.value);
    }

    const theme = useTheme();

    return (
        <Dialog onClose={onClose} open={open} maxWidth='xs' fullWidth>
            <List sx={{ p: 0 }}>
                {
                    optionsList.map((element, index) => (
                        <PostComment key={index} data={element} />
                    ))
                }
            </List>
            <Stack direction={'row'} alignItems={'center'} p={1} sx={{
                borderTop: '1px solid',
                borderColor: theme.palette.border
            }} spacing={1}>
                <Avatar src="https://i.pravatar.cc/300" alt="pic" />
                <TextField
                    fullWidth
                    variant='standard'
                    maxRows={3}
                    InputProps={{
                        disableUnderline: true,
                        style: {
                            fontSize: '14px'
                        }
                    }}
                    placeholder="Add a comment..."
                    onChange={handleChangeComment}
                    value={comment}
                    multiline
                />
                <Button variant="text" color="info" disabled={comment === ''} sx={{
                    textTransform: 'capitalize'
                }}>Post</Button>
            </Stack>

        </Dialog>
    )
}
