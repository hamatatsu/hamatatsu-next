// import DarkThemeSwitch from '@/app/components/dark-theme-switch';
import Header from "@/app/_components/header";

// interface HomeProps {
//   darkState: boolean,
//   setDarkState: (state: boolean) => void,
// }

export default function Home() {
  return (
    <div className={"classes.root"}>
      {/* <DarkThemeSwitch state={props.darkState} setter={props.setDarkState} /> */}
      <div>
        <div>
          <Header />
        </div>
      </div>
    </div>
  );
}
