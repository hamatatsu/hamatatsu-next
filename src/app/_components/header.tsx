import styles from "@/app/_components/header.module.scss";
import SocialButton from "@/app/_components/social-btn";
import Image from "next/image";
import profile from "/public/profile.png";

export default function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.avator}>
        <Image src={profile} alt="a profile image of hamatatsu" fill={true} />
      </div>
      <div>
        <h1 className={styles.title}>Welcome to my page</h1>
      </div>
      <SocialButton />
    </div>
  );
}
