import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/avatar.jpg"
          alt="Image showing Franklin"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Franklin</h1>
      <p>I blog about my fitness journey and my linux setup</p>
    </section>
  );
};

export default Hero;
