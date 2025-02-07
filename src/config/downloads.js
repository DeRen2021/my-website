import { FileText, FileBarChart, Briefcase } from 'lucide-react';

export const downloadConfig = {
  downloads: [
    {
      title: "Download CV",
      description: "Get my latest curriculum vitae",
      link: process.env.REACT_APP_CV_URL || "/other-website/file/De Ren CV.pdf",
      icon: FileText,
      status: "Available"
    },
    {
      title: "Download Transcript",
      description: "View my academic transcript",
      link: process.env.REACT_APP_TRANSCRIPT_URL || "/path/to/your/transcript.pdf",
      icon: FileBarChart,
      status: "Coming Soon"
    },
    {
      title: "Download Portfolio",
      description: "See my project portfolio",
      link: process.env.REACT_APP_PORTFOLIO_URL || "/path/to/your/portfolio.pdf",
      icon: Briefcase,
      status: "Coming Soon"
    }
  ]
}; 