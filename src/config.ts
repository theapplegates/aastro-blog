export const SITE = {
  title: "What's Wrong Now Dad?",
  description: 'A site to help parents understand current gadgets(Apple products to start with).',
  defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/snowpackjs/astro/blob/main/assets/social/banner.jpg?raw=true',
    alt: 'astro logo on a starry expanse of space,' + ' with a purple saturn-like planet floating in the right foreground',
  },
  twitter: 'papplegate',
};

export const KNOWN_LANGUAGES = {
  English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
 export const GITHUB_EDIT_URL = `https://github.com/snowpackjs/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
 // export const ALGOLIA = {
   //indexName: '1QDAWL72TQ',
   //apiKey: '47700f55d95d23f5a57744b9a027ea83',
//}

export const SIDEBAR = {
  en: [
    { text: '', header: true },
    { text: 'Section Header', header: true },
    { text: 'Introduction', link: 'en/introduction' },
    { text: 'Page 2', link: 'en/page-2' },
    { text: 'Page 3', link: 'en/page-3' },

    { text: 'Another Section', header: true },
    { text: 'Page 4', link: 'en/page-4' },
  ],
};
