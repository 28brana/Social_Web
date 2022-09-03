import { Button } from "@mui/material";
import useSettings from "../hooks/useSetting";
import { getSettings } from "../utils/getSettings";

export default function Home() {
  const data = useSettings();
  console.log({ data })
  return (
    <Button onClick={data.toggleMode} >
      {data.themeMode}
    </Button>
  )
}
