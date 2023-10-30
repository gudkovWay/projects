import { motion } from 'framer-motion';
import React from 'react';

import Header from '../components/header';
import Intro from '../components/intro';
import Books from '../components/books';
import Author from '../components/author';
import Trust from '../components/trust';
import Copy from '../components/copy';
import Learn from '../components/learn';
import Knowledge from '../components/knowledge';
import Reviews from '../components/review';
import Articles from '../components/articles';
import Updates from '../components/updates';
import Footer from '../components/footer';

import '../index.scss';

const sectionAnimation = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Home() {
  return (
    <main className="wrapper">
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.44 }}
        viewport={{ once: true }}
        className="content content--blue">
        <Header isCurrent={0} />
        <Intro />
      </motion.section>

      <section className="content content--smaller content--white">
        <Books />
      </section>

      <section className="content content--darken">
        <Author />
      </section>

      <section className="content content--white content--smaller">
        <Trust />
      </section>

      <section className="content content--blue content--smaller">
        <Copy />
      </section>

      <section className="content content--white">
        <Learn />
      </section>

      <section className="content content--darken content--bigger">
        <Knowledge />
      </section>

      <section className="content content--white">
        <Reviews />
      </section>

      <section className="content content--darkent">
        <Articles />
      </section>

      <section className="content content--white content--smaller">
        <Updates />
      </section>

      <section className="content content--blue content--smaller">
        <Footer />
      </section>
    </main>
  );
}
