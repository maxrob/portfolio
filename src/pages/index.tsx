import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useState } from 'react';
import { AboutMe } from 'src/containers/about_me';
import { Experiences } from 'src/containers/experiences';
import { Footer } from 'src/containers/footer';
import { Header } from 'src/containers/header';
import { EmailModal } from 'src/containers/modal';
import { Projects } from 'src/containers/projects';
import styles from '../styles/index.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Head>
        <title>Maxime Robin</title>
        <meta
          name="description"
          content="Explore my website to learn more about myself and my work."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <main className={styles.app}>
        <Header openModal={openModal} />
        <AboutMe />
        <Experiences />
        <Projects />
        <Footer openModal={openModal} />
        <EmailModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </main>
    </>
  );
};

export default Home;
