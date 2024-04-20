import React from "react";
import CountUp from "react-countup"; // countup
import { useInView } from "react-intersection-observer"; // intersection observer
import { motion } from "framer-motion"; //motion
import { fadeIn } from "../variants"; //variants

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center">
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
          <div className="flex-1">
            <h2 className="h2 text-accent">Who am I ?</h2>
            <h3 className="h3 mb-4">
              I'm a tech enthusiast, freelance web developer with over 3 years
              of experience. I am also a content writer and a project manager by
              profession with more than 2 year of experience in the field.
            </h3>
            <p className="mb-6">
              thish is a paragrara I'm a tech enthusiast, freelance web
              developer with over 3 years of experience. I am also a content
              writer and a project manager by profession with more than 2 year
              of experience in the field. ag
            </p>

            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg"> Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                {" "}
                My Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
