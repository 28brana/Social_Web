import { Avatar, Typography, Stack, Box, Button, TextField } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { BookmarkSimple, Chat, DotsThreeVertical, Fire, PaperPlaneTilt } from 'phosphor-react';
import { useEffect, useState } from 'react';
import PostSlider from './PostSlider';
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

const ImageContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    height: '360px',
    width: '100%',
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




export default function PostCard() {
    const theme = useTheme();
    const text = 'Hi every one yes its me  \nhow are u okay fine \nno need to say';
    const [isCollapse, setIsCollapse] = useState(true);
    const handleCollapse = () => {
        setIsCollapse(false)
    }
    const [comment, setComment] = useState('');
    const handleChangeComment = (e) => {
        setComment(e.target.value);
    }

    let summery = `${text.split('\n')[0]}...`;
    return (
        <RootStyle>
            <Stack direction="row" p={1} alignItems={'center'} justifyContent={'space-between'}>
                <Stack direction="row" spacing={1.5}>
                    <ProfileContainer>
                        <Avatar src={'https://i.pravatar.cc/30'} sx={{ border: '2px solid transparent' }} alt={'img'} />
                    </ProfileContainer>
                    <Box>
                        <Typography variant='body2'>prepinsta2023</Typography>
                        <Typography variant='caption' color='typography.subtitle2'>1hour</Typography>
                    </Box>
                </Stack>
                <DotsThreeVertical />
            </Stack>
            <PostSlider>
                <ImageContainer>
                    <Image src={'https://loremflickr.com/320/240'} layout="fill" objectFit="cover" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={'https://loremflickr.com/320/240'} layout="fill" objectFit="cover" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={'https://loremflickr.com/320/240'} layout="fill" objectFit="cover" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={'https://loremflickr.com/320/240'} layout="fill" objectFit="cover" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={'https://loremflickr.com/320/240'} layout="fill" objectFit="cover" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={'https://loremflickr.com/320/240'} layout="fill" objectFit="cover" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={'https://loremflickr.com/320/240'} layout="fill" objectFit="cover" />
                </ImageContainer>
                <ImageContainer>
                    <Image src={'https://loremflickr.com/320/240'} layout="fill" objectFit="cover" />
                </ImageContainer>
            </PostSlider>


            <Stack py={1} px={2} spacing={2}>
                <Stack direction={'row'} justifyContent={'space-between'} >
                    <Stack direction={'row'} spacing={2}>
                        <Fire size={24} />
                        <Chat size={24} />
                        <PaperPlaneTilt size={24} />
                    </Stack>
                    <BookmarkSimple size={24} />
                </Stack>
                <Typography variant='subtitle2' >1,550 likes</Typography>
                <Typography variant='body2' component={'div'} >
                    {
                        isCollapse ? <Description>
                            {summery} <StyledMoreBtn onClick={handleCollapse} >more</StyledMoreBtn>
                        </Description> : <Description>
                            {text}
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
        </RootStyle>
    )
}

