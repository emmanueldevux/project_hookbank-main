import styles from "../style";
import {
  hero_img,
  logo,
  data,
  design,
  game,
  code,
  abstract_hero,
} from "../assets";
import background from "../assets/background.png"; // Replace with the correct path

const Hero = () => (
  <section
    id="home"
    className={`sm:px-16 px-6 h-[100vh] flex items-center justify-center`}
  >
    <div className="">
      <img
        src={hero_img}
        alt="hero-img"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[80vh] z-[10]"
      />

      <div className=" justify-center flex flex-col items-center mb-28 z-[10]">
        <h1 className="font-michroma text-[40px] md:text-[65px] leading-[] text-center text-white z-[100] mb-4">
          Architecting <br />
          Decentralized Dreams
        </h1>
        <p className="z-[100] text-white text-[20px] mb-8 text-center">
          Crafting Web3 Experiences Beyond Imagination
        </p>
        <button className="z-[100] px-12 py-4  text-white rounded-md font-michroma bg-blue ">
          Schedule
        </button>

        <span className="z-[10] absolute right-6 top-20 md:top-40 md:right-16">
          <img
            src={game}
            alt="game"
            className="h-[120px] md:h-[140px]"
          />
        </span>

        <span className="z-[10] absolute left-6 top-24 md:left-16 md:top-40">
          <img
            src={data}
            alt="data"
            className="h-[110px] md:h-[140px]"
          />
        </span>

        <span
          className="z-[10] absolute bottom-14 left-10 md:left-16 md:bottom-20
      "
        >
          <img
            src={code}
            alt="code"
            className="h-[56px] md:h-[68px]"
          />
        </span>

        <span
          className="z-[10] absolute bottom-20 right-20 md:right-40 md:bottom-24
      "
        >
          <img
            src={design}
            alt="design"
            className="h-[100px] md:h-[120px]"
          />
        </span>
      </div>
    </div>
  </section>
);

export default Hero;
