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

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={roboto.className}>
        {/* <MuiTypography /> */}
        {/* <MuiButtons /> */}
        {/* <MTextField /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadioButton /> */}
        {/* <MuiCheckBox /> */}
        {/* <MuiSwitch /> */}
        <MuiRating />
      </main>
    </>
  );
}
