import { Avatar, Typography, Stack, Box, Button, TextField, CardMedia, Card, IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { BookmarkSimple, Chat, DotsThreeVertical, Fire, FireSimple, PaperPlaneTilt, SpeakerSimpleHigh, SpeakerSimpleSlash } from 'phosphor-react';
import { useEffect, useRef, useState } from 'react';
import { useInViewport } from 'react-in-viewport';
import { useDispatch, useSelector } from 'react-redux';
import { testVideoUrl } from '../config';
import { toggleMute } from '../redux/slices/common';
import PostCommentDialogBox from './PostCommentDialogBox';
import PostDialogBox from './PostDialogBox';
import PostSlider from './PostSlider';
// import myVideo from '../assets/video.mp4'
const RootStyle = styled('div')(({ theme }) => ({
    borderRadius: 8,
    border: theme.palette.border,
    background: theme.palette.background.default,

}))
const ProfileContainer = styled('div')(({ theme }) => ({
    backgroundOrigin: 'padding-box, border-box',
    backgroundRepeat: 'no-repeat', /* this is important */
    padding: 3,
    background: 'linear-gradient(to right,#A18CD1, #FBC2EB)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',

}))


const Description = styled('pre')(({ theme }) => ({
    width: '100%',
    whiteSpace: 'pre-wrap',
    margin: 0,

}))

const StyledMoreBtn = styled('span')(({ theme }) => ({
    color: theme.palette.text.disabled,
    cursor: 'pointer'
}))




const StyledIconContainer = styled(Box)(({ theme }) => ({
    borderRadius: '50%',
    width: 30,
    height: 30,
    zIndex: 9,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    ':hover': {
        color: theme.palette.icon.neutral,
    }
}))





export default function PostCard({ data }) {
    // States
    const [isCollapse, setIsCollapse] = useState(true);
    const [comment, setComment] = useState('');
    const [like, setLike] = useState(false);
    const [open, setOpen] = useState(false);
    const [openComment, setOpenComment] = useState(false);
    // Theme
    const theme = useTheme();

    let summery = `${data.descriptions.split('\n')[0]}...`;

    // Handle States
    const handleCollapse = () => {
        setIsCollapse(false)
    }
    const handleChangeComment = (e) => {
        setComment(e.target.value);
    }
    const handleToggleLike = () => {
        setLike(!like);
    }
    const handleOpenComment = () => {
        setOpenComment(true);
    }
    const handleCloseComment = () => {

        setOpenComment(false);
    }
    const handleOpenDialog = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <RootStyle>
            <Stack direction="row" p={1} alignItems={'center'} justifyContent={'space-between'}>
                <Stack direction="row" spacing={1.5}>
                    <ProfileContainer>
                        <Avatar src={data.profilePic} sx={{ border: '2px solid transparent' }} alt={data.name} />
                    </ProfileContainer>
                    <Box>
                        <Typography variant='body2'>{data.name}</Typography>
                        <Typography variant='caption' color='typography.subtitle2'>{data.time}</Typography>
                    </Box>
                </Stack>
                <StyledIconContainer onClick={handleOpenDialog}>
                    <DotsThreeVertical size={24} />
                </StyledIconContainer>
            </Stack>

            <PostSlider content={data.content} />


            <Stack py={1} px={2} spacing={2}>
                <Stack direction={'row'} justifyContent={'space-between'} >
                    <Stack direction={'row'} spacing={2}>

                        <StyledIconContainer onClick={handleToggleLike}>
                            {
                                like ?
                                    <FireSimple size={24} color="#fa0000" weight="fill" />

                                    : <Fire size={24} onClick={handleToggleLike} />
                            }
                        </StyledIconContainer>
                        <StyledIconContainer onClick={handleOpenComment}>
                            <Chat size={24} />
                        </StyledIconContainer>
                        <StyledIconContainer>
                            <PaperPlaneTilt size={24} />
                        </StyledIconContainer>
                    </Stack>
                    <StyledIconContainer>
                        <BookmarkSimple size={24} />
                    </StyledIconContainer>
                </Stack>
                <Typography variant='subtitle2' >{data.likes}</Typography>
                <Typography variant='body2' component={'div'} >
                    {
                        isCollapse ? <Description>
                            {summery} <StyledMoreBtn onClick={handleCollapse} >more</StyledMoreBtn>
                        </Description> : <Description>
                            {data.descriptions}
                        </Description>
                    }
                </Typography>
                <Stack direction={'row'} alignItems={'center'} py={1} sx={{
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
            </Stack>
            <PostDialogBox open={open} onClose={handleClose} />
            <PostCommentDialogBox open={openComment} onClose={handleCloseComment} />
        </RootStyle>
    )
}
