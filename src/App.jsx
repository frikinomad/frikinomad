import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Mail, LinkedinIcon, Code2, Sparkles, BookOpen, MessageCircle, X } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: Code2, description: 'React, Next.js, TypeScript' },
  { name: 'Solana Programs', icon: Sparkles, description: 'Anchor Lang, Rust' },
  { name: 'Technical Writing', icon: BookOpen, description: 'Documentation, Tutorials' },
  { name: 'Community Building', icon: MessageCircle, description: 'Discord, Twitter Posts' }
];

const projects = [
  {
    id: 1,
    title: 'Solana Wallet',
    description: 'Custom Solana Web3 Wallet with Chrome Extension',
    image: '/public/solana_wallet.png',
    tech: ['React', 'TypeScript', 'Web3.js', 'Solana'],
    liveUrl: 'https://youtu.be/',
    githubUrl: 'https://github.com/frikinomad/wallet_extension',
    videoId: 'ov7iko978hM'
  },
  {
    id: 2,
    title: 'Solana Wallet',
    description: 'Custom Solana Web3 Wallet with Chrome Extension',
    image: '/public/solana_wallet.png',
    tech: ['React', 'TypeScript', 'Web3.js', 'Solana'],
    liveUrl: 'https://youtu.be/',
    githubUrl: 'https://github.com/frikinomad/wallet_extension',
    videoId: 'ov7iko978hM'
  },
  {
    id: 3,
    title: 'Solana Wallet',
    description: 'Custom Solana Web3 Wallet with Chrome Extension',
    image: '/public/solana_wallet.png',
    tech: ['React', 'TypeScript', 'Web3.js', 'Solana'],
    liveUrl: 'https://youtu.be/',
    githubUrl: 'https://github.com/frikinomad/wallet_extension',
    videoId: 'ov7iko978hM'
  }
];

function TabButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-colors ${
        active 
          ? 'bg-emerald-500/20 text-emerald-400' 
          : 'text-zinc-400 hover:text-emerald-400'
      }`}
    >
      {children}
    </button>
  );
}

function ProjectCard({ project, onClose }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="relative bg-zinc-900/80 rounded-xl overflow-hidden border border-zinc-800/50 backdrop-blur-sm h-full"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-black/50 rounded-full z-10 text-zinc-400 hover:text-white"
      >
        <X size={16} />
      </button>
      
      <div className="relative aspect-video">
        {!showVideo ? (
          <>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setShowVideo(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity"
            >
              <span className="p-4 rounded-full bg-emerald-500/20 text-emerald-400">
                Play Demo
              </span>
            </button>
          </>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-zinc-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 text-sm bg-emerald-500/10 text-emerald-400 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <Github size={20} />
            <span>Code</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

const ProfilePicture = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="mb-8"
    >
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full animate-spin-slow opacity-70 blur-md" />
        <div className="absolute inset-[3px] bg-zinc-900 rounded-full" />
        <img
          src="https://avatars.githubusercontent.com/u/59007034?s=400&u=cae28a1f224021f4d52f402f3f0a6b579a94be3d&v=4"
          alt="pic"
          className="absolute inset-[3px] rounded-full object-cover"
        />
      </div>
    </motion.div>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="h-screen bg-black text-white p-8 flex">
      {/* Left Column - Always Visible */}
      <div className="w-1/3 pr-8 flex flex-col justify-between">
        <div>
          <ProfilePicture />  {/* Add the component here */}
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text"
          >
            Building the future of web3
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg mb-8"
          >
            Full-stack blockchain developer crafting decentralized experiences
          </motion.p>

          <div className="flex space-x-4 mb-8">
            {[
              { Icon: Github, href: 'https://github.com/frikinomad' },
              { Icon: LinkedinIcon, href: 'https://linkedin.com' },
              { Icon: Mail, href: 'mailto:rishichaturvedi0012@gmail.com' }
            ].map(({ Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-zinc-800/50 hover:bg-emerald-500/20 transition-colors"
              >
                <Icon className="w-5 h-5 text-zinc-400 hover:text-emerald-400" />
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col space-y-2">
            {['About', 'Skills', 'Projects', 'Contact'].map((tab) => (
              <TabButton
                key={tab}
                active={activeTab === tab.toLowerCase()}
                onClick={() => setActiveTab(tab.toLowerCase())}
              >
                {tab}
              </TabButton>
            ))}
          </div>
        </div>

        <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} • Built with ❤️</p>
      </div>

      {/* Right Column - Dynamic Content */}
      <div className="w-2/3 relative">
        <AnimatePresence mode="wait">
          {selectedProject ? (
            <ProjectCard 
              key="project"
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="h-full bg-zinc-900/50 rounded-xl border border-zinc-800/50 backdrop-blur-sm p-6 overflow-auto"
            >
              {activeTab === 'about' && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-emerald-400">About Me</h2>
                  <p className="text-zinc-400">
                  Software Development Engineer at Dell Technologies by day, blockchain enthusiast by passion. I architect enterprise solutions while building the future of Web3, particularly in the Solana ecosystem.
                  I believe in a future of "Networked States" - where different blockchain networks seamlessly communicate and exchange value. This vision drives my projects, from developing a novel NFT rental platform and custom Solana wallet extension to building decentralized exchanges and network monitoring tools.
                  <br />
                  <br />
                  My journey spans both worlds - deploying enterprise-scale microservices and CI/CD pipelines at Dell, while crafting Web3 solutions that make blockchain technology more accessible. Whether it's implementing AI-powered automation or creating user-friendly blockchain applications, I'm passionate about bridging traditional technology with decentralized innovation.
                  When I'm not coding, you'll find me exploring new protocols or thinking about how to make complex blockchain concepts more approachable.
                  </p>
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="p-4 bg-black/30 rounded-lg border border-zinc-800/50">
                      <div className="mb-3 p-2 rounded-lg bg-emerald-500/10 w-fit">
                        <skill.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="font-semibold text-white mb-1">{skill.name}</h3>
                      <p className="text-sm text-zinc-400">{skill.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'projects' && (
                <div className="grid grid-cols-2 gap-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className="group cursor-pointer bg-black/30 rounded-lg border border-zinc-800/50 overflow-hidden hover:border-emerald-500/50 transition-colors"
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-white mb-1">{project.title}</h3>
                        <p className="text-sm text-zinc-400">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'contact' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-emerald-400">Let's Connect</h2>
                  <p className="text-zinc-400">
                    Whether you have a project in mind or just want to chat about blockchain technology,
                    I'm always open to new opportunities and collaborations.
                  </p>
                  <motion.a
                    href="mailto:hello@example.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Get in Touch</span>
                  </motion.a>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;