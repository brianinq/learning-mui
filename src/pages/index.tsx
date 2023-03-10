import Head from "next/head";
import { Roboto } from "next/font/google";
import MuiTypography from "@/components/MuiTypography";
import MTextField from "@/components/TextField";
import MuiSelect from "@/components/MuiSelect";
import MuiButtons from "@/components/MuiButtons";
import MuiRadioButton from "@/components/MuiRadioButton";
import MuiCheckBox from "@/components/MuiCheckBox";
import MuiSwitch from "@/components/MuiSwitch";
import MuiRating from "@/components/MuiRating";
import MuiAutoComplete from "@/components/MuiAutoComplete";
import MuiLayout from "@/components/MuiLayout";
import MuiGrids from "@/components/MuiGrids";
import MuiCard from "@/components/MuiCard";
import MuiAccordeon from "@/components/MuiAccordion";
import MuiImageList from "@/components/MuiImageList";
import MuiNav from "@/components/MuiNav";
import { Box, createTheme, colors, ThemeProvider } from "@mui/material";
import MuiBreadCrumbs from "@/components/MuiBreadCrumbs";
import MuiDrawer from "@/components/MuiDrawer";
import MuiSpeedDial from "@/components/MuiSpeedDial";
import MuiBottomNav from "@/components/MuiBottomNav";
import MuiAvatar from "@/components/MuiAvatar";
import MuiBadge from "@/components/MuiBadge";
import MuiList from "@/components/MuiList";
import MuiChip from "@/components/MuiChip";
import MuiToolTip from "@/components/MuiToolTip";
import MuiTable from "@/components/MuiTable";
import MuiAlert from "@/components/MuiAlert";
import MuiSnackBar from "@/components/MuiSnackBar";
import MuiDialog from "@/components/MuiDialog";
import MuiProgress from "@/components/MuiProgress";
import MuiSkeleton from "@/components/MuiSkeleton";
import MuiLoadingButton from "@/components/MuiLoadingButton";
import MuiDatePicker from "@/components/MuiDatePicker";
import MuiTabs from "@/components/MuiTabs";
import MuiResponsiveness from "@/components/MuiResponsiveness";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const theme = createTheme({
  status: {
    danger: "#f00",
  },
  palette: {
    secondary: {
      main: colors.blue[400],
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component={"main"} p={5} className={roboto.className}>
        {/* <MuiTypography /> */}
        {/* <MuiButtons /> */}
        {/* <MTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadioButton /> */}
        {/* <MuiCheckBox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRating /> */}
        {/* <MuiAutoComplete /> */}
        {/* <MuiLayout /> */}
        {/* <MuiGrids /> */}
        {/* <MuiCard /> */}
        {/* <MuiAccordeon /> */}
        {/* <MuiImageList /> */}
        {/* <MuiNav /> */}
        {/* <MuiBreadCrumbs /> */}
        {/* <MuiDrawer /> */}
        {/* <MuiSpeedDial /> */}
        {/* <MuiBottomNav /> */}
        {/* <MuiAvatar /> */}
        {/* <MuiBadge /> */}
        {/* <MuiList /> */}
        {/* <MuiChip /> */}
        {/* <MuiToolTip /> */}
        {/* <MuiTable /> */}
        {/* <MuiAlert /> */}
        {/* <MuiSnackBar /> */}
        {/* <MuiDialog /> */}
        {/* <MuiProgress /> */}
        {/* <MuiSkeleton /> */}
        {/* <MuiLoadingButton /> */}
        {/* <MuiDatePicker /> */}
        {/* <MuiTabs /> */}
        <MuiResponsiveness />
      </Box>
    </ThemeProvider>
  );
}
