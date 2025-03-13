import { FileText, FileBarChart, Briefcase } from 'lucide-react';

export const downloadConfig = {
  downloads: [
    {
      title: "Download CV",
      description: "Get my latest curriculum vitae",
      link: process.env.REACT_APP_CV_URL || "https://github.com/DeRen2021/document/blob/main/file/de%20ren%20resume%20.pdf",
      icon: FileText,
      status: "Available"
    },
    {
      title: "Download NYU Transcript",
      description: "View my academic transcript",
      link: process.env.REACT_APP_TRANSCRIPT_URL || "https://github.com/DeRen2021/document/blob/main/file/NYU_SR_TUNF.pdf",
      icon: FileBarChart,
      status: "Available"
    },
    {
      title: "Download UCI Transcript",
      description: "View my academic transcript",
      link: process.env.REACT_APP_TRANSCRIPT_URL || "https://github.com/DeRen2021/document/blob/main/file/Unofficial%20Transcript.pdf",
      icon: FileBarChart,
      status: "Available"
    },
    {
      title: "Download AWS ML Specialty Certificate",
      description: "See my Certificate",
      link: process.env.REACT_APP_PORTFOLIO_URL || "https://github.com/DeRen2021/document/blob/main/file/AWS%20Certified%20Machine%20Learning%20-%20Specialty%20certificate.pdf",
      icon: Briefcase,
      status: "Available"
    },
    {
      title: "Download AWS Certified AI Practitioner certificate.pdf",
      description: "See my Certificate",
      link: process.env.REACT_APP_PORTFOLIO_URL || "https://github.com/DeRen2021/document/blob/main/file/AWS%20Certified%20AI%20Practitioner%20certificate.pdf",
      icon: Briefcase,
      status: "Available"
    },
    {
      title: "Download Bartending license",
      description: "See my Bartending license",
      link: process.env.REACT_APP_PORTFOLIO_URL || "https://github.com/DeRen2021/document/blob/main/file/Bartending%20license.jpg",
      icon: Briefcase,
      status: "Available"
    }
  ]
}; 