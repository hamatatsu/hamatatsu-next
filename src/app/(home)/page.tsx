// import DarkThemeSwitch from '@/app/components/dark-theme-switch';
import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";

// interface HomeProps {
//   darkState: boolean,
//   setDarkState: (state: boolean) => void,
// }

export default function Home() {
  return (
    <>
      {/* <DarkThemeSwitch state={props.darkState} setter={props.setDarkState} /> */}
      <Header />
      {/* <p style={{ height: "1000px" }}></p> */}
      <Footer />
    </>
  );
}
