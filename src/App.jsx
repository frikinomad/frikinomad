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
    image: '/solana_wallet.png',
    tech: ['React', 'TypeScript', 'Web3.js', 'Solana'],
    liveUrl: null,
    githubUrl: 'https://github.com/frikinomad/wallet_extension',
    videoId: 'ov7iko978hM'
  },
  {
    id: 1,
    title: 'Solserv - NFT Rental Platform',
    description: 'I have built a novel NFT rental platform on Solana that leverages the power of Blinks to create a seamless, trustless rental experience. The platform features a custom-developed Solana program that manages the entire rental lifecycle through three core instructions: create listing, rent, and end rental. Through smart contract, the platform handles secure escrow management for both NFTs and rental payments, ensuring a safe transaction environment for all parties.',
    image: '/solserv.png',
    tech: ['Solana', 'Blockchain', 'Blinks', 'Smart Contracts'],
    liveUrl: '',
    githubUrl: '',
    videoId: ''
  },
  {
      id: 2,
      title: 'Solana DEX',
      description: 'I have developed a fully functional decentralized exchange (DEX) on the Solana blockchain that implements automated market maker (AMM) functionality. Built using Solana\'s token program, the DEX enables users to initialize liquidity pools, execute token swaps, and perform withdrawals, with prices automatically adjusted through AMM algorithms based on pool dynamics. The smart contract handles complex token mathematics and pool state management, while a React-based frontend provides an intuitive interface for users to interact with the protocol.',
      image: '/solana_dex.png',
      tech: ['Solana', 'React', 'AMM', 'Token Swaps'],
      liveUrl: '',
      githubUrl: '',
      videoId: null
  },
  {
      id: 3,
      title: 'NFT Minting App',
      description: 'The NFT Minting App leverages a modern tech stack for seamless functionality. The frontend is built with React and Next.js, while the blockchain layer is powered by Solana Web3.js and the Metaplex SDK. Storage solutions include AWS, Arweave, and IPFS, providing flexible and decentralized data management. Wallet integration is implemented using @solana/wallet-adapter-react, enabling secure user authentication and transactions. The app allows users to mint NFTs with custom metadata, supporting wallet-based authentication and decentralized storage. Key technical highlights include dynamic generation and uploading of NFT metadata, decentralized hosting for images and metadata, and efficient royalty configuration to streamline the NFT creation process.',
      image: '/nft_mint.png',
      tech: ['React', 'Next.js', 'Solana Web3.js', 'Metaplex SDK'],
      liveUrl: 'https://nft-mint-seven-ivory.vercel.app/',
      githubUrl: 'https://github.com/frikinomad/nftMint',
      videoId: ''
  },
  {
      id: 4,
      title: 'Solana Blink Actions - SOL Donate',
      description: 'Developed a Solana Action using Next.js and TypeScript, integrated with an `actions.json` specification, enabling users to donate SOL directly from their wallets to others. The Action is compatible with any environment supporting Solana Actions, offering a seamless transaction experience through QR codes, widgets, or embedded links. Designed for optimal portability, the feature enhances user interaction by enabling blockchain transactions without requiring navigation to external apps or webpages. Users can experience this by visiting dial.to and adding the Action link: https://mynextblink.vercel.app/.',
      image: '/blink_actions.png',
      tech: ['Next.js', 'TypeScript', 'Solana Actions'],
      liveUrl: 'https://mynextblink.vercel.app/',
      githubUrl: 'https://github.com/frikinomad/mynextblink',
      videoId: ''
  },
  {
      id: 5,
      title: 'DSCVR NFT Canvas Reactions',
      description: 'Developed a Canvas that enables users to mint Metaplex Core NFTs on the Solana blockchain based on post reactions. Inspired by milestone rewards like YouTube\'s play buttons, this tool rewards users for their engagement: Silver NFT for reaching a specific reaction threshold, and Gold NFT for surpassing a higher reaction threshold. The project integrates DSCVR SDK to fetch user interaction data, with minting powered by Metaplex Core NFTs on the Solana blockchain. Wallet connectivity is implemented using Solana Wallet Adapter. Awarded as a winner of the DSCVR Buildathon for innovation and functionality, demonstrating technical expertise in Web3 integration and decentralized app development.',
      image: '/dscvr_nft.png',
      tech: ['Next.js', 'React', 'Solana', 'Metaplex Core'],
      liveUrl: 'https://nftcanvasreactions.vercel.app/',
      githubUrl: 'https://github.com/frikinomad/nftcanvasreactions',
      videoId: ''
  },
  {
      id: 6,
      title: 'Solana Network Dashboard',
      description: 'I have developed a comprehensive Solana network monitoring dashboard that provides real-time insights into blockchain performance and network health. Built with React and JavaScript, this interactive dashboard features a modern, intuitive interface that visualizes critical network metrics. The application tracks essential Solana metrics including block height, epoch information, transaction throughput (TPS), gas fees, network latency, and SOL price, all updated in real-time through WebSocket connections. Users can also perform detailed wallet analysis, viewing token balances and transaction histories, making it an invaluable tool for network participants and developers who need to monitor Solana\'s performance at a glance.',
      image: '/sol_dashboard.png',
      tech: ['React', 'JavaScript', 'WebSocket', 'Blockchain Analytics'],
      liveUrl: 'https://sol-data-dashboard-vdl5.vercel.app/',
      githubUrl: 'https://github.com/frikinomad/sol_data_dashboard',
      videoId: ''
  },
  {
      id: 7,
      title: 'Workivo - Job Tracking SaaS',
      description: 'A comprehensive job application tracking platform that allows users to create different boards for tracking various job types (Wishlist, Product-based, Frontend AI). The platform features customizable stages with unique fields for each stage: Applied stage includes resume version and application date, Initial Screening has screening date and POC, Interview stage tracks interview date, type, meeting link, and interviewer, Offer stage includes offer amount, benefits, and decision deadline, and Rejected stage captures rejection reasons. Common fields include Job Title, Company, Job Posting Link, Location, Salary Range, and Notes. The application dynamically changes deadline colors based on urgency and allows users to customize application colors for better organization.',
      image: '/workivo.png',
      tech: ['Next.js', 'React', 'Redux', 'Firebase'],
      liveUrl: 'https://workivo-gyms.vercel.app/',
      githubUrl: 'https://github.com/frikinomad/workivo',
      videoId: ''
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
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="relative bg-zinc-900/80 rounded-xl overflow-hidden border border-zinc-800/50 backdrop-blur-sm h-full flex-shrink-0"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-black/50 rounded-full z-10 text-zinc-400 hover:text-white"
      >
        <X size={16} />
      </button>
      
      <div className="relative aspect-video flex-shrink-0">
        {!showVideo ? (
          <>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {project.videoId && 
              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity"
              >
                <span className="p-4 rounded-full bg-emerald-500/20 text-emerald-400">
                  Play Demo
                </span>
              </button>
            }
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
        <div className="mb-4">
          <p className="text-zinc-400">
            {!expanded ? `${project.description.slice(0, 150)}...` : project.description}
          </p>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-emerald-400 hover:text-emerald-500 text-sm font-medium"
          >
            {expanded ? 'See less' : 'See more'}
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 text-sm bg-emerald-500/10 text-emerald-400 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {/* GitHub Link */}
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <Github size={20} />
            <span>Code</span>
          </a>

          {/* Live Demo Link (conditionally rendered) */}
          {project.liveUrl && (
            <a 
              href={project.liveUrl + project.videoId}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          )}
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
            {['About', 'Skills', 'Projects'].map((tab) => (
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

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;