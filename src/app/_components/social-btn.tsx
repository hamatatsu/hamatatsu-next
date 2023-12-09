import styles from "@/app/components/social-btn.module.css";
import github from "/public/github.svg";
import x from "/public/x.svg";
import Image from "next/image";

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
