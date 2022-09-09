import { Box, ImageList, ImageListItem } from '@mui/material';
import { styled } from '@mui/material/styles';

import Layout from "../layouts";
Home.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
const RootStyle = styled('div')(({ theme }) => ({

}))