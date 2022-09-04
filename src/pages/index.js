import { styled, useTheme } from '@mui/material/styles';
import StoryBoard from "../components/StoryBoard";
import useSettings from "../hooks/useSetting";
import Layout from "../layouts";
import { getSettings } from "../utils/getSettings";
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

const RootStyle = styled('div')(({ theme }) => ({
  borderRadius: 5,
  border: theme.palette.border,
}))

export default function Home() {
  const data = useSettings();
  // console.log({ data })
  return (
    <div>
      <StoryBoard />
    </div>
  )
}
