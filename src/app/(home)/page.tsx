// import DarkThemeSwitch from '@/app/components/dark-theme-switch';
import styles from "@/app/(home)/home.module.css";
import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";

// interface HomeProps {
//   darkState: boolean,
//   setDarkState: (state: boolean) => void,
// }

export default function Home() {
  return (
    <div className={styles.root}>
      {/* <DarkThemeSwitch state={props.darkState} setter={props.setDarkState} /> */}
      <Header />
      {/* <Works /> */}
      <Footer />
    </div>
  );
}
