import React, { useState } from 'react';
import { Github, ExternalLink, Mail, Code2, Sparkles, BookOpen, MessageCircle, X } from 'lucide-react';
import { Tweet } from 'react-tweet';

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
      image: '/alice_donate_sol.png',
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
      image: '/ivo.png',
      tech: ['Next.js', 'React', 'Redux', 'Firebase'],
      liveUrl: 'https://workivo-gyms.vercel.app/',
      githubUrl: 'https://github.com/frikinomad/workivo',
      videoId: ''
  }
];

const ProjectCard = ({ project, onClose }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
      <button
        onClick={() => setShowVideo(false)}
        className="absolute top-4 right-4 p-2 bg-black/50 rounded-full z-10 text-zinc-400 hover:text-white"
      >
        <X className="w-6 h-6" />
      </button>
      
      <div className="relative aspect-video">
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
                className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity"
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
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>Code</span>
            </a>
          )}

          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const tweets = [
    "1889388179352068162",
    "1889279095776919881",
    "1888926214485848124",
    "1887213512755441763",
    "1887592892325314862",
    "1886832039036641746",
    "1886394555257528350",
    "1880858695049121884",
    "1879602542658851159"
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTMyNDJjIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-12">
        {/* Header */}
        <header className="flex flex-col items-center mb-16 relative">
          <div className="relative w-32 h-32 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full animate-[spin_8s_linear_infinite] opacity-70 blur-sm" />
            <img
              src="https://avatars.githubusercontent.com/u/59007034?s=400&u=cae28a1f224021f4d52f402f3f0a6b579a94be3d&v=4"
              alt="Profile"
              className="absolute inset-[2px] rounded-full object-cover border-2 border-black"
            />
          </div>
          <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            @frikinomad
          </h1>
          <br />
          <div className="flex gap-4">
            <a
              href="https://github.com/frikinomad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:rishichaturvedi0012@gmail.com"
              className="p-3 rounded-full bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/frikinomad"
              className="p-3 rounded-full bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </a>
          </div>
        </header>

        {/* Navigation */}
        <nav className="flex justify-center mb-16">
          <div className="flex gap-2 p-1 bg-white/5 rounded-full backdrop-blur-sm">
            {['About', 'Skills', 'Projects', 'Posts'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === tab.toLowerCase()
                    ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'about' && (
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                About Me
              </h2>
              <div className="text-zinc-300 space-y-4 leading-relaxed">
                <p>
                  I started my journey as an intern at Dell working on Spring Boot microservices and .NET applications. Now, as an SDE 2, I've spent the past few years building enterprise solutions - from developing microservices and implementing CI/CD pipelines to creating AI-powered automation systems. Recently, I've been leading the migration of our streaming services from Scala to Java.
                </p>
                <p>
                  Beyond my day job, I'm deeply involved in blockchain development, particularly in the Solana ecosystem. I've built several projects including a custom wallet extension, an NFT rental platform using Blinks for automation, and a decentralized exchange. One of my proudest achievements was winning the DSCVR Buildathon with a Canvas app that mints NFTs based on user engagement. I also created Workivo, a job application tracker that helps keep the job search organized with custom boards and dynamic deadline tracking.
                </p>
                <p>
                  My experience ranges from enterprise Java development to Web3 innovations, and I enjoy building tools that make complex technology more accessible to everyone. You can often find me experimenting with new protocols or working on projects that bridge traditional tech with blockchain solutions.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Spring/Summer 2022: Software Development Intern - Spring Boot Microservices</li>
                  <li>Spring 2023: Software Development Intern - .NET and CI/CD</li>
                  <li>2023 - Jan 2025: SDE 1 at Dell - Java Microservices, Unit Testing, KTLO</li>
                  <li>Current: SDE 2 at Dell - Leading Scala to Java Migration</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="flex flex-wrap gap-3">
              {[
                'React',
                'Next.js',
                'JavaScript',
                'TypeScript',
                'Node.js',
                'Express',
                'Anchor',
                'Metaplex',
                'Solana',
                'Solana Web3.js',
                'Solana Wallet Adapter',
                'Java',
                'Spring Boot',
                'Spring Security',
                'Firebase',
                'Firestore',
                'Firebase Auth',
                'Firebase Storage',
              ]
                .map((skill) => (
                  <div
                    key={skill}
                    className="group relative bg-white/5 rounded-xl px-4 py-2 text-sm font-medium text-white border border-white/10 hover:border-emerald-500/50 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
            </div>
          )}



          {activeTab === 'projects' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClose={() => setSelectedProject(null)}
                  />
                ))}
              </div>
            )}

          {activeTab === 'posts' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tweets.map((tweetId) => (
                <div
                  key={tweetId}
                  className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                >
                  <Tweet id={tweetId} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#030014] rounded-2xl border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 flex justify-end p-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-zinc-400 mb-6">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-emerald-500/10 text-emerald-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center py-8 text-zinc-500 text-sm">
        © {new Date().getFullYear()} • Built with ❤️
      </footer>
    </div>
  );
}

export default App;