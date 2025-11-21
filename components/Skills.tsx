import React from 'react';
import Section from './Section';
import { SKILLS_DATA } from '../constants';

const SKILL_ICONS: Record<string, string> = {
  "Docker": "devicon-docker-plain",
  "Docker Compose": "devicon-docker-plain",
  "Kubernetes": "devicon-kubernetes-plain",
  "Minikube": "devicon-kubernetes-plain",
  "Helm": "devicon-helm-original",
  "GitHub Actions": "devicon-githubactions-plain",
  "Jenkins": "devicon-jenkins-plain",
  "GitLab CI": "devicon-gitlab-plain",
  "ArgoCD": "devicon-argocd-plain",
  "Terraform": "devicon-terraform-plain",
  "Ansible": "devicon-ansible-plain",
  "CloudFormation": "devicon-amazonwebservices-plain-wordmark",
  "AWS (EC2, S3, VPC, IAM)": "devicon-amazonwebservices-plain-wordmark",
  "Linux (Bash/Shell)": "devicon-linux-plain",
  "Nginx": "devicon-nginx-original",
  "Python": "devicon-python-plain"
};

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Arsenal" subtitle="Tools and technologies I use to build and maintain resilient infrastructure.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS_DATA.map((category, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-sm font-mono text-neutral-500 dark:text-neutral-500 uppercase tracking-wider border-b border-neutral-200 dark:border-neutral-800 pb-2 transition-colors duration-300">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill, sIdx) => {
                const iconClass = SKILL_ICONS[skill];
                
                return (
                  <li key={sIdx} className="flex items-center gap-3 group cursor-default">
                    <div className="w-8 h-8 flex items-center justify-center rounded bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 group-hover:border-neutral-400 dark:group-hover:border-neutral-600 transition-colors shrink-0 shadow-sm dark:shadow-none">
                      {iconClass ? (
                        <i className={`${iconClass} text-base text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors`}></i>
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-700 group-hover:bg-neutral-900 dark:group-hover:bg-white transition-colors" />
                      )}
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors text-sm font-medium">
                      {skill}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;