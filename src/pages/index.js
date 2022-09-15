import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import PostCard from '../components/PostCard';
import StoryBoard from "../components/StoryBoard";
import SuggestionsBoard from '../components/SuggestionsBoard';
import Layout from "../layouts";
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: '12px',
  margin: 'auto',
  maxWidth: '980px'
}))
const SuggestionsContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: 0,
  background: theme.palette.background.default,
}))

const MainContainer = styled('div')(({ theme }) => ({
  maxWidth: '470px',
}))


export default function Home() {

  return (
    <RootStyle>
      <MainContainer>
        <Stack spacing={2}>
          <StoryBoard />
          <Stack spacing={2}>
            {
              postData.map((post, index) => (
                <PostCard key={index} data={post} />
              ))
            }
          </Stack>
        </Stack>
      </MainContainer>
      <SuggestionsContainer>
        <SuggestionsBoard />
      </SuggestionsContainer>
    </RootStyle>
  )
}


const postData = [{
  userId: '1',
  name: 'prepInsta2023',
  profilePic: 'https://i.pravatar.cc/30',
  likes: 1550,
  descriptions: 'Yo Yo \n Honey Singh and \n Gippy',
  whoLikes: ['id', 'id', 'id'],
  time: '1hour',
  content: [
    {
      type: 'video',
      link: 'https://www.w3schools.com/html/mov_bbb.mp4',
    }, {
      type: 'video',
      link: 'https://www.w3schools.com/html/mov_bbb.mp4',
    }, {
      type: 'image',
      link: 'https://loremflickr.com/320/240',
    }, {
      type: 'image',
      link: 'https://loremflickr.com/320/240',
    },
  ]
}, {
  userId: '2',
  name: 'prepInsta2022',
  profilePic: 'https://i.pravatar.cc/30',
  likes: 1550,
  descriptions: 'Yo Yo \n Honey Singh and \n Gippy',
  whoLikes: ['id', 'id', 'id'],
  time: '1hour',
  content: [
    {
      type: 'video',
      link: 'https://www.w3schools.com/html/mov_bbb.mp4',
    }, {
      type: 'video',
      link: 'https://www.w3schools.com/html/mov_bbb.mp4',
    }, {
      type: 'image',
      link: 'https://loremflickr.com/320/240',
    }, {
      type: 'image',
      link: 'https://loremflickr.com/320/240',
    },
  ]
}
]