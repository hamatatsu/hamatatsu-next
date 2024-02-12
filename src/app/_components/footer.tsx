import styles from "@/app/_components/footer.module.css";

export default function Footer() {
  const current_year = new Date().getFullYear();
  return (
    <div className={styles.root}>
      <div className={styles.copyright}>
        <p>© {current_year} hamatatsu</p>
      </div>
    </div>
  );
}
