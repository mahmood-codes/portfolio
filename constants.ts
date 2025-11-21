
import { Project, ExperienceItem, SkillCategory, NavItem } from './types';

export const SITE_DATA = {
  name: "Mahmood",
  role: "Junior DevOps Engineer",
  tagline: "Automating infrastructure and streamlining deployment pipelines.",
  email: "mahmood.k.acc@gmail.com", // Replace with actual email
  resumeLink: "https://drive.google.com/file/d/1KzbVyX9CsfWVhdcLI0Kxp4la-R8z6nJH/view?usp=sharing", // Placeholder for resume download
  social: {
    github: "https://github.com/mahmood-codes",
    linkedin: "https://www.linkedin.com/in/khan20/"
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Containerization & Orchestration",
    skills: ["Docker", "Kubernetes", "Minikube", "Helm"]
  },
  {
    title: "CI/CD & Automation",
    skills: ["GitHub Actions", "Jenkins", "GitLab CI", "ArgoCD"]
  },
  {
    title: "Infrastructure as Code",
    skills: ["Terraform", "Ansible", "CloudFormation"]
  },
  {
    title: "Cloud & System",
    skills: ["AWS (EC2, S3, VPC, IAM)", "Linux (Bash/Shell)", "Nginx", "Python"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'End-to-End CI/CD Pipeline',
    description: 'Automated build, test, and deployment pipeline using GitHub Actions. Implements linting, unit testing, and Docker image push to ECR.',
    tags: ['GitHub Actions', 'Docker', 'AWS ECR', 'Node.js'],
    repoLink: '#',
    featured: true
  },
  {
    id: '2',
    title: 'Docker Orchestration',
    description: 'Orchestrated multi-container environments using Docker Compose. Implemented health checks, restart policies, and network isolation for secure deployments.',
    tags: ['Docker', 'Docker Compose', 'Networking', 'Security'],
    repoLink: '#',
    featured: true
  },
  {
    id: '3',
    title: 'AWS Infrastructure via Terraform',
    description: 'Provisioned a highly available VPC architecture with public/private subnets, NAT gateways, and an EC2 auto-scaling group using Terraform modules.',
    tags: ['Terraform', 'AWS VPC', 'IaC', 'HCL'],
    repoLink: '#',
    featured: true
  },
  {
    id: '4',
    title: 'Dockerized MERN App',
    description: 'Containerized a full-stack MERN application (MongoDB, Express, React, Node.js) using Docker Compose. Implemented multi-stage builds for the frontend and Nginx reverse proxy.',
    tags: ['Docker', 'React', 'Node.js', 'MongoDB', 'Docker Compose'],
    repoLink: 'https://github.com/mahmood-codes/MERN-docker-compose',
    featured: true
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: '1',
    role: 'DevOps Apprentice',
    company: 'Questivity Inc. (Santa Clara)',
    period: 'January 2025 - Present',
    description: [
      'Participating in an intensive apprenticeship program focused on cloud infrastructure, automation, and network engineering.',
      'Gaining hands-on experience configuring Linux environments, troubleshooting system issues, and managing AWS resources.',
      'Collaborating with senior engineers to implement CI/CD workflows and modernize deployment strategies.'
    ]
  }
  
];
