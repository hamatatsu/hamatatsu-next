import React from 'react';
// import DarkThemeSwitch from '@/app/components/dark-theme-switch';
import Header from '@/app/components/header';

// interface HomeProps {
//   darkState: boolean,
//   setDarkState: (state: boolean) => void,
// }

export default function Home() {
  return (
    <div className={"classes.root"}>
      {/* <DarkThemeSwitch state={props.darkState} setter={props.setDarkState} /> */}
      <div >
        <div>
          <Header />
        </div>
      </div>
    </div>
  );
}