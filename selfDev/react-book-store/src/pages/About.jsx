import React from 'react';

import Header from '../components/header';
import AboutBooks from '../components/books';
import AboutAuthor from '../components/author';
import '../index.scss';

export default function Abouts() {
  return (
    <>
      <Header isCurrent={1} />
      <section className="content content--smaller content--white">
        <AboutBooks />
      </section>

      <section className="content content--darken">
        <AboutAuthor />
      </section>
    </>
  );
}
