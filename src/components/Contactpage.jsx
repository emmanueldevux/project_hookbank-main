import styles from "../style";
import {
  Navbar,
  Footer,
  Getquote,
} from ".";

const Contactpage = () => (
  <div className="bg-background w-full overflow-hidden">
    <div
      className={`${styles.paddingX} ${styles.flexStart}`}
    >
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <Getquote />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
);
console.log(styles);

export default Contactpage;
