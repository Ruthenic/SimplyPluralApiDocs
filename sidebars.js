module.exports = {
  Sidebar: {
    Welcome: ['intro', 'discord', 'faq'],
    Features: ['features/members', 'features/fronting', 'features/polls', 'features/frontingHistory', 'features/friends'],
    Integrations: ['integrations/pluralkit',],
    "API Reference": [
      {
        type: "category",
        label: "Simply Plural",
        link: {
          type: "generated-index",
          title: "Simply Plural API",
          description:
            "This is the reference for the Simply Plural API. All public endpoints are documented here and can be used to make API calls.",
          slug: "/docs/api"
        },
        // @ts-ignore
        items: require("./docs/api/sidebar.js")
      }
    ]
  },
};
