import styles from "@/app/_components/works.module.scss";

export default async function Works() {
  const fetchWorks = await fetch(
    "https://api.github.com/users/hamatatsu/repos",
  );
  const works = (await fetchWorks.json()) as Array<{
    name: string;
    description: string;
  }>;
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h1>Works</h1>
      </div>
      {works.map((work) => (
        <div key={work.name}>
          <h2>{work.name}</h2>
          <p>{work.description}</p>
        </div>
      ))}
    </div>
  );
}
