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
  const [isMute, setIsMute] = useState(true);
  const handleToggleMute = () => {
    setIsMute(!isMute);
  }

  return (
    <RootStyle>
      <MainContainer>
        <Stack spacing={2}>
          <StoryBoard />
          <Stack spacing={2}>
            {
              [...Array(5)].map((_, index) => (
                <PostCard isMute={isMute} handleToggleMute={handleToggleMute} key={index} />
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
