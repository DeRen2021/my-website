import { MessageSquare, CreditCard, FileText, Wine, Github, Globe, Code } from 'lucide-react';

export const websiteConfig = {
  websites: [
    {
      title: "AI Chatbot",
      description: "Engage with an intelligent conversational AI",
      link: process.env.REACT_APP_CHATBOT_URL || "https://chat.deren.life",
      icon: MessageSquare,
      status: "Live"
    },
    {
      title: "News Aggregator",
      description: "A news aggregator that uses OpenAI API and Google search API to generate news articles",
      link: process.env.REACT_APP_NEWS_URL || "https://news.deren.life",
      icon: FileText,
      status: "Live"
    },
    {
      title: "IOS Application",
      description: "Explore my ios cocktail application",
      link: process.env.REACT_APP_GITHUB_URL || "https://apps.apple.com/us/app/cocktails3702/id6743032659?l=zh-Hans-CN",
      icon: Wine,
      status: "Live"
    },
    {
      title: "GitHub Profile",
      description: "Explore my open-source projects and contributions",
      link: process.env.REACT_APP_GITHUB_URL || "https://github.com/DeRen2021",
      icon: Github,
      status: "Live"
    },
    {
      title: "Online Poker",
      description: "Test your skills in online poker matches",
      link: process.env.REACT_APP_POKER_URL || "https://your-poker-url.com",
      icon: CreditCard,
      status: "Under Development"
    },

    {
      title: "Cocktail tutorial",
      description: "A cocktail website that host on azure and data stored in aws, intergate wtih a postgresql database",
      link: process.env.REACT_APP_COCKTAIL_URL || "https://drink.deren.life",
      icon: Wine,
      status: "down due to budget"
    },
    
    {
      title: "Personal Website",
      description: "Visit the standard version of my personal website",
      link: process.env.REACT_APP_PERSONAL_URL || "/other-website/index.html",
      icon: Globe,
      status: "Down"
    },
    {
      title: "Code Drops(deprecated use cursor)",
      description: "Combine your orginal code with result from llm(when they omit things)",
      link: process.env.REACT_APP_CODE_DROPS_URL || "/other-website/code_combine.html",
      icon: Code,
      status: "Down"
    }
  ]
}; 