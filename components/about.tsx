"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section ref={ref} className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">Web Developer</span> with a strong interest in <span className="italic">Web Development</span>,<span className="italic"> UI Design</span>, and{" "}
        <span className="italic">Frontend & Backend Development</span>. I graduated with a Bachelor&apos;s degree in Information Technology from <span className="font-medium">Universitas Muhammadiyah Yogyakarta</span>, and am currently
        pursuing a Master&apos;s degree in <span className="font-medium">Information Technology</span> at Universitas Gadjah Mada, focusing on <span className="italic">Data Analytics and Pervasive Intelligence</span>. I also have experience
        working at Radian Edu Solution as a <span className="font-medium">Junior Web Developer</span>, where I successfully developed and managed web projects. My main tools for web development include{" "}
        <span className="font-medium">Laravel</span> and <span className="font-medium">Vue.js</span>. I am also familiar with <span className="font-medium">React, Go, Spring Boot, .Net, Bootstrap, and TailwindCSS</span>.
      </p>

      <p className="mb-3">
        Outside of coding, I enjoy playing badminton, watching movies (especially Marvel), watching anime, playing <span className="font-medium">Genshin Impact</span>, and spending time with cats. I am also very interested in learning new
        things and am currently focusing on developing my knowledge in <span className="font-medium">Deep Learning</span>. Exploring cutting-edge technologies and improving my skills is what motivates me.
      </p>
    </motion.section>
  );
}
