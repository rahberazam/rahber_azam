import styles from "./style.module.scss";

export default function TopSellingDeals() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Top Selling Deals</h2>
        <p className={styles.description}>
          Siama offers special deals for a limited period. So, never miss out
          these offers right now. It is the best time to take extra care of
          your skin and hair. We provide treatments for different hair and skin
          concerns. From dullness to hyperpigmentation, we treat various issues
          with our custom solutions.
        </p>
      </div>
    </section>
  );
}

