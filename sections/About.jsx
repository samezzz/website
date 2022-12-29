'use client';

import { motion } from 'framer-motion';
import {TypingText} from '../components'
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Danebes"
        textStyles="text-center" />
      
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-[#b0b0b0]"
      >
        <span className="font-extrabold">Danebes</span> is a ...<span className="font-extrabold">biomedical </span>more info about Danebes...<span className="font-extrabold">Services</span> even more info about Danebes
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      >

      </motion.img>
    </motion.div>
  </section>
);

export default About;
