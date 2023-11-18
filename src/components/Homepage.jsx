import styles from "../style";
import background from "../assets/background.png";
import {
  Navbar,
  Footer,
  Services,
  Join_us,
  Projects,
  Team,
  Contact,
  Hero,
} from "../components";

const Homepage = () => (
  <div className="bg-background w-full overflow-hidden">
    {/* --------------------nav bar------------------- */}
    <div
      className={`${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* ------------------------hero------------------------- */}
    <div
      className={`${styles.flexStart} h-screen bg-cover`}
      style={{backgroundImage: `url(${background})`}}
    >
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    {/* ------------------------section------------------------- */}
    <div
      className={`${styles.paddingX} ${styles.flexStart}`}
    >
      <div className={`${styles.boxWidth}`}>
        <Services />
      </div>
    </div>

    <div>
      <Join_us />
    </div>

    <div
      className={`${styles.paddingX} ${styles.flexStart}`}
    >
      <div className={`${styles.boxWidth}`}>
        <Projects />
        <Team />
        <Contact />
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
);
console.log(styles);

export default Homepage;
