import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import PostCard from '../components/PostCard';
import StoryBoard from "../components/StoryBoard";
import Layout from "../layouts";
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

const RootStyle = styled('div')(({ theme }) => ({
  maxWidth: '470px',
  padding: '12px',
  border: '1px solid red',
}))

export default function Home() {

  return (
    <RootStyle>
      <Stack spacing={2}>
        <StoryBoard />
        <div>
          <PostCard />
        </div>
      </Stack>
    </RootStyle>
  )
}
