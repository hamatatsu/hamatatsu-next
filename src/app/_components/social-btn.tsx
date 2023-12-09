import styles from "@/app/_components/social-btn.module.css";
import Image from "next/image";
import github from "/public/github.svg";
import x from "/public/x.svg";

export default function SocialButton() {
  return (
    <div className={styles.root}>
      <div className={styles.socialButton}>
        <a className={"socialButton"} href="https://twitter.com/hamatatsu0">
          <Image src={x} alt="x" fill style={{ background: "black" }} />
        </a>
      </div>
      <div className={styles.socialButton}>
        <a className={"socialButton"} href="https://github.com/hamatatsu">
          <Image src={github} alt="github" fill />
        </a>
      </div>
    </div>
  );
}
