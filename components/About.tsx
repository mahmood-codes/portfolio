import React from 'react';
import Section from './Section';
import { Cpu, Globe, Server, Shield } from 'lucide-react';

const About: React.FC = () => {
  const cards = [
    { icon: <Server size={24} />, title: "Infrastructure", desc: "Provisioning scalable cloud resources using IaC tools like Terraform." },
    { icon: <Cpu size={24} />, title: "Automation", desc: "Building robust CI/CD pipelines to streamline delivery." },
    { icon: <Globe size={24} />, title: "Networking", desc: "Configuring VPCs, Load Balancers, and secure gateways." },
    { icon: <Shield size={24} />, title: "Security", desc: "Implementing IAM policies and container scanning." },
  ];

  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed transition-colors duration-300">
          <p>
            I am a Junior DevOps Engineer passionate about bridging the gap between software development and IT operations. 
            My journey began with a curiosity for Linux systems, which evolved into a deep dive into cloud infrastructure and container orchestration.
          </p>
          <p>
            I focus on <span className="text-neutral-900 dark:text-white font-medium">automating workflows</span>, enhancing system reliability, and ensuring scalable deployments. 
            Whether it's dockerizing a legacy application or architecting a Kubernetes cluster on AWS, I love solving infrastructure puzzles.
          </p>
          <p>
            Currently seeking opportunities to contribute to a forward-thinking engineering team while further mastering the CNCF landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-300 group shadow-sm dark:shadow-none">
              <div className="mb-4 text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                {card.icon}
              </div>
              <h3 className="text-neutral-900 dark:text-white font-semibold mb-2 transition-colors duration-300">{card.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-500 transition-colors duration-300">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;