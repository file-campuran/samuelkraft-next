import Image from 'next/image'
import Page from 'components/page'
import Button from 'components/button'
import { NextSeo } from 'next-seo'
import me from 'public/samuelkraft.jpg'
import styles from './about.module.scss'

const About = (): JSX.Element => {
  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  }
  const seoTitle = 'About Samuel Kraft'
  return (
    <Page>
      <NextSeo
        title={seoTitle}
        openGraph={{
          title: seoTitle,
          url: `https://samuelkraft.com/about/`,
          site_name: 'Samuel Kraft',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Image src={me} alt="Picture of me (samuel kraft)" placeholder="blur" className={styles.image} priority />
      <div className={styles.text}>
        <p>Hey I’m Samuel, a designer/frontend developer hybrid that loves to build great products with delightful interfaces.</p>
        <p>
          Right now I’m working at{' '}
          <a href="https://bitrefill.com/" {...linkProps}>
            Bitrefill
          </a>
          , designing &amp; building the future of crypto. Before that I worked at{' '}
          <a href="https://www.tracklib.com/" {...linkProps}>
            Tracklib
          </a>
          , the record store for sampling.
        </p>
        <p>I grew up in Nacka just outside of Stockholm, Sweden and come from a background of studying Photography.</p>
        <p>
          I love working in the realm between design and code. Some things that makes me excited are CSS, Design Systems, Animation,
          crafting excellent component apis and making interfaces feel fun and human.
        </p>
        <p>Outside of work I’m obsessed with endurance sports and travelling with my family.</p>
      </div>
      <Button href="mailto:samuelkraft@me.com">Contact me</Button>
    </Page>
  )
}

export default About
