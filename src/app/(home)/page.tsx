// import DarkThemeSwitch from '@/app/components/dark-theme-switch';
import styles from "@/app/(home)/home.module.scss";
import Footer from "@/app/_components/footer";
import Loading from "@/app/_components/loading";
import dynamic from "next/dynamic";

// interface HomeProps {
//   darkState: boolean,
//   setDarkState: (state: boolean) => void,
// }

const DynamicHeader = dynamic(() => import("@/app/_components/header"), {
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <div className={styles.root}>
      {/* <DarkThemeSwitch state={props.darkState} setter={props.setDarkState} /> */}
      <DynamicHeader />
      {/* <Works /> */}
      <Footer />
    </div>
  );
}
