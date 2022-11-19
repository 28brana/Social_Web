import { Box, Button, Container, IconButton, ImageList, ImageListItem, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { ImageSquare, Minus, UploadSimple, VideoCamera, X } from "phosphor-react";
import { useState } from "react";

import Layout from "../layouts";
Upload.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
const UploadContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    background: theme.palette.background.default,
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px dotted',
    borderColor: theme.palette.info.main,
    borderRadius: '8px',
    width: '300px',
    height: '200px',
}));

export default function Upload() {
    const [data, setData] = useState([]);
    console.log(data);
    return (
        <Container>
            <Stack alignItems={'center'}>

                <h1>Upload</h1>
                <UploadContainer>
                    <Stack>
                        <Stack direction="row" mb={1}>
                            Upload
                            <ImageSquare size={22} />
                            <VideoCamera size={22} />
                        </Stack>
                        <Button variant="contained" component="label" color="info" endIcon={<UploadSimple />}>
                            Upload

                            <input
                                hidden
                                type="file"
                                accept="video/*,image/*"
                                multiple
                                onChange={(e) => {
                                    // console.log(e.target.files);
                                    setData([...data, ...e.target.files]);
                                }}
                            />
                        </Button>
                    </Stack>
                </UploadContainer>
            </Stack>

            <Box p={1} my={8} sx={{
                background: 'white',
                borderRadius: 2
            }}>
                <Typography variant="h5" mb={2}>Preview</Typography>

                <Stack direction="row" gap={10} flexWrap="wrap" >

                    {
                        data.map((element, index) => (
                            <Box key={index} sx={{ width: '200px', height: '200px', position: 'relative' }}>
                                <Box sx={{ position: 'absolute', top: -10, right: -10, zIndex: 1, background: 'black', borderRadius: '50%' }}
                                    onClick={() => {
                                        let arr = [...data];
                                        arr.splice(index, 1);
                                        setData(arr);
                                    }}>
                                    <IconButton>
                                        <X size={20} color="white" />
                                    </IconButton>
                                </Box>
                                <Box sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 1,
                                    overflow: 'hidden',
                                }}>

                                    {
                                        element.type.split('/')[0] === 'image' ?
                                            (<Image src={URL.createObjectURL(element)} alt={'name'} layout="fill" objectFit="cover" />) :
                                            (<video src={URL.createObjectURL(element)} style={{ width: '100%', height: '100%', objectFit: "contain" }} />)
                                    }
                                </Box>
                            </Box>
                        ))
                    }
                </Stack>
            </Box>
            <div>
                <Typography variant="h5" mb={2}>Description</Typography>
                <TextField
                    label="Description"

                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{
                        width: '100%',
                        background: 'white',
                    }}
                />
            </div>
            <Stack alignItems={"center"} pt={5} pb={12}>

                <Button variant="contained" size="large">Submit</Button>
            </Stack>
        </Container>
    );
}
