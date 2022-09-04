import { Button } from "@mui/material";
import useSettings from "../hooks/useSetting";
import Layout from "../layouts";
import { getSettings } from "../utils/getSettings";
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Home() {
  const data = useSettings();
  // console.log({ data })
  return (
    <div>
      hello world
    </div>
  )
}
