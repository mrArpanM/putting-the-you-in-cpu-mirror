import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Putting the “You” in CPU</span>,
  project: {
    link: 'https://github.com/hackclub/putting-the-you-in-cpu',
  },
  docsRepositoryBase: 'https://github.com/mrArpanM/putting-the-you-in-cpu-mirror',
  useNextSeoProps() {
    return {
      titleTemplate: "%s – cpu.land",
    };
  },
  footer: {
    text: 'CPU Land Mirror | With Searching & Dark Mode Support',
  },
  head: () => {
    return (
      <>
        <link
          rel="icon"
          type="image/png"
          href="/favicon.png"
        />
      </>
    );
  }
}

export default config
