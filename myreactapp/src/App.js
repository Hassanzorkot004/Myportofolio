// import React, { useState, useEffect } from 'react';
// import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown, Brain, Database, TrendingUp, Code2, FileCode, Award } from 'lucide-react';

// const projects = [
//   {
//     id: 1,
//     title: "Carpooling System",
//     desc: "JavaFX app connecting drivers and passengers for shared rides.",
//     tech: ["Java", "JavaFX", "MySQL"],
//     media: "https://www.cfecgc-adecco.com/wp-content/uploads/2024/01/Covoiturage-3.jpg",
//     isVideo: false,
//     github: "https://github.com/tonprofil/CarpoolingSystem",
//     demo: ""
//   },
//   {
//     id: 2,
//     title: "World Cup Dashboard",
//     desc: "Power BI dashboard deployed with Flask for exploring World Cup stats.",
//     tech: ["Python", "Flask", "Power BI"],
//     media: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop",
//     isVideo: false,
//     github: "https://github.com/tonprofil/WorldCupDashboard",
//     demo: ""
//   },
//   {
//     id: 3,
//     title: "Sign Language Translator",
//     desc: "Streamlit app translating sign language into text via webcam and AI.",
//     tech: ["Python", "Streamlit", "TensorFlow", "OpenCV"],
//     media: "https://user-images.githubusercontent.com/yourvideo.mp4", // lien vidéo si tu veux
//     isVideo: true,
//     github: "https://github.com/tonprofil/SignLanguageTranslator",
//     demo: ""
//   },
//   {
//     id: 4,
//     title: "Agriculture AI App",
//     desc: "React app for plant disease detection using TensorFlow.js. Project ongoing.",
//     tech: ["React", "TensorFlow.js", "FastAPI"],
//     media: "https://images.unsplash.com/photo-1581092334573-3796b1671a5a?w=800&h=500&fit=crop",
//     isVideo: false,
//     github: "https://github.com/tonprofil/AgricultureAIApp",
//     demo: ""
//   }
// ];

// export default function Portfolio() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [filter, setFilter] = useState("All");
//   const [form, setForm] = useState({ name: '', email: '', msg: '' });
//   const [sent, setSent] = useState(false);

//   useEffect(() => {
//     const handle = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handle);
//     return () => window.removeEventListener('scroll', handle);
//   }, []);

//   const scroll = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setIsOpen(false); };
//   const cats = ["All", ...new Set(projects.map(p => p.cat))];
//   const filtered = filter === "All" ? projects : projects.filter(p => p.cat === filter);

//   return (
//     <div className="font-sans">
//       <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-white/5 backdrop-blur-sm'}`}>
//         <nav className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="text-2xl font-bold"><span className={scrolled ? 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent' : 'text-white'}>DS Portfolio</span></div>
//             <div className="hidden md:flex space-x-8">
//               {['accueil', 'apropos', 'competences', 'projets', 'contact'].map(i => (
//                 <button key={i} onClick={() => scroll(i)} className={`capitalize font-medium ${scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'}`}>
//                   {i === 'apropos' ? 'À propos' : i === 'competences' ? 'Compétences' : i}
//                 </button>
//               ))}
//             </div>
//             <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}>
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </nav>
//       </header>

//       <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-950">
//           <div className="absolute inset-0 opacity-20">
//             <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//             <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//             <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
//           </div>
//         </div>
//         <div className="container mx-auto px-6 text-center relative z-10">
//           <div className="mb-8 relative">
//             <div className="w-40 h-40 mx-auto bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
//               <div className="w-36 h-36 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
//                 <Brain size={64} className="text-white drop-shadow-lg" />
//               </div>
//             </div>
//           </div>
//           <h1 className="text-6xl md:text-7xl font-black text-white mb-6">
//             <span className="inline-block bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">Ingénieur Data Science</span><br />
//             <span className="inline-block bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">& Intelligence Artificielle</span>
//           </h1>
//           <p className="text-2xl md:text-3xl text-purple-200 mb-4 font-bold">[Ton Nom]</p>
//           <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">Transformer les données en insights avec ML, DL & Big Data</p>
//           <div className="flex justify-center space-x-6 mb-10">
//             {[{ I: Github, h: "https://github.com" }, { I: Linkedin, h: "https://linkedin.com" }, { I: Mail, h: "mailto:email@example.com" }].map(({ I, h }, i) => (
//               <a key={i} href={h} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 backdrop-blur-md rounded-full shadow-xl hover:bg-white/20 transition-all border border-white/20 hover:scale-110 group">
//                 <I size={28} className="text-white group-hover:rotate-12 transition-transform" />
//               </a>
//             ))}
//           </div>
//           <button onClick={() => scroll('projets')} className="group relative px-10 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-full text-xl font-bold shadow-2xl hover:scale-105 overflow-hidden">
//             <span className="relative z-10">Découvrir mes projets</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//           </button>
//           <div className="mt-16 animate-bounce"><ChevronDown size={40} className="mx-auto text-purple-300" /></div>
//         </div>
//       </section>

//       <section id="apropos" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">À propos</h2>
//           <div className="max-w-3xl mx-auto">
//             <p className="text-lg text-gray-700 mb-6">Étudiant en cycle ingénieur, spécialisé en Data Science et IA. Passionné par le ML et l'analyse de données.</p>
//             <p className="text-lg text-gray-700 mb-6">Expertise en Machine Learning, Deep Learning, NLP et Big Data. Maîtrise de TensorFlow, PyTorch, Spark et Hadoop.</p>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
//               {[{ n: "20+", l: "Projets", c: "purple" }, { n: "4+", l: "Certifs", c: "blue" }, { n: "15+", l: "Techs", c: "indigo" }, { n: "3", l: "Ans", c: "pink" }].map(({ n, l, c }) => (
//                 <div key={l} className={`text-center p-6 bg-gradient-to-br from-${c}-500 to-${c}-600 rounded-2xl shadow-lg hover:scale-105 transition-transform`}>
//                   <div className="text-4xl font-black text-white">{n}</div>
//                   <div className="text-white/90 mt-2 font-semibold">{l}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="competences" className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Compétences</h2>
//           <p className="text-center text-gray-600 mb-12">Technologies que je maîtrise</p>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { t: "Machine Learning", s: ["scikit-learn", "XGBoost", "SVM", "KNN"], I: Brain },
//               { t: "Deep Learning", s: ["TensorFlow", "PyTorch", "Keras", "CNN"], I: Brain },
//               { t: "NLP", s: ["NLTK", "BERT", "GPT", "spaCy"], I: FileCode },
//               { t: "Big Data", s: ["Spark", "Hadoop", "Kafka", "MongoDB"], I: Database },
//               { t: "Langages", s: ["Python", "R", "SQL", "Java"], I: Code2 },
//               { t: "Outils", s: ["Git", "Docker", "AWS", "Azure"], I: Code2 },
//               { t: "Data Viz", s: ["Power BI", "Tableau", "Plotly"], I: TrendingUp },
//               { t: "Frameworks", s: ["FastAPI", "Streamlit", "Flask"], I: Code2 }
//             ].map(({ t, s, I }) => (
//               <div key={t} className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all border border-purple-100">
//                 <div className="flex items-center mb-4">
//                   <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mr-3"><I className="text-white" size={24} /></div>
//                   <h3 className="text-lg font-bold">{t}</h3>
//                 </div>
//                 <div className="flex flex-wrap gap-2">{s.map((sk, i) => <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">{sk}</span>)}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="projets" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
//         </div>
//         <div className="container mx-auto px-6 relative z-10">
//           <h2 className="text-5xl font-black text-center mb-4 text-white">Mes Projets</h2>
//           <p className="text-center text-purple-200 mb-12">Data Science & IA</p>
//           <div className="flex justify-center flex-wrap gap-3 mb-12">
//             {cats.map(c => (
//               <button key={c} onClick={() => setFilter(c)} className={`px-6 py-3 rounded-full font-semibold transition-all ${filter === c ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-105' : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'}`}>{c}</button>
//             ))}
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filtered.map(p => (
//               <div key={p.id} className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/10 transition-all border border-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
//                 <div className="relative overflow-hidden">
//                   <img src={p.img} alt={p.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
//                   <span className="absolute top-3 right-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold rounded-full">{p.cat}</span>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300">{p.title}</h3>
//                   <p className="text-gray-300 mb-4">{p.desc}</p>
//                   <div className="flex flex-wrap gap-2 mb-6">{p.tech.map((t, i) => <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-lg text-xs font-medium border border-purple-500/30">{t}</span>)}</div>
//                   <a href="#" className="flex items-center text-white hover:text-purple-300 font-medium group/link"><Github size={20} className="mr-2 group-hover/link:rotate-12 transition-transform" />Code</a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Contact</h2>
//           <p className="text-center text-gray-600 mb-12">Discutons de vos projets</p>
//           <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-2xl border border-purple-100">
//             <div className="space-y-6">
//               <div><label className="block text-gray-800 mb-2 font-bold">Nom</label><input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" placeholder="Votre nom" /></div>
//               <div><label className="block text-gray-800 mb-2 font-bold">Email</label><input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" placeholder="votre@email.com" /></div>
//               <div><label className="block text-gray-800 mb-2 font-bold">Message</label><textarea value={form.msg} onChange={e => setForm({...form, msg: e.target.value})} rows="5" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 resize-none" placeholder="Votre message..." /></div>
//               <button onClick={() => { setSent(true); setTimeout(() => { setSent(false); setForm({ name: '', email: '', msg: '' }); }, 3000); }} className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl hover:shadow-lg font-bold hover:scale-105 transition-all">{sent ? '✓ Envoyé !' : 'Envoyer'}</button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-8">
//         <div className="container mx-auto px-6 text-center">
//           <p className="mb-4">© 2025 Portfolio Data Science & AI</p>
//           <div className="flex justify-center space-x-6">
//             {[{ I: Github, h: "https://github.com" }, { I: Linkedin, h: "https://linkedin.com" }, { I: Mail, h: "mailto:email@example.com" }].map(({ I, h }, i) => (
//               <a key={i} href={h} target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors"><I size={24} /></a>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
//------------------------------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown, Brain, Database, TrendingUp, Code2, FileCode, Award, Plus, Edit2, Trash2, LogOut, Lock } from 'lucide-react';

// const initialProjects = [
//   {
//     id: 1,
//     title: "Carpooling System",
//     desc: "Application JavaFX connectant conducteurs et passagers pour partager des trajets",
//     fullDesc: "Système de covoiturage permettant aux utilisateurs de créer des annonces, parcourir les options disponibles et gérer leurs horaires de trajets. Réduction des coûts et de l'impact environnemental.",
//     tech: ["JavaFX", "Java", "MySQL", "Scene Builder"],
//     img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
//     video: null,
//     github: "https://github.com/Hassanzorkot004/project.git",
//     demo: null,
//     cat: "Desktop App"
//   },
//   {
//     id: 2,
//     title: "World Cup Dashboard",
//     desc: "Dashboard Power BI interactif déployé avec Flask pour analyser les performances",
//     fullDesc: "Projet présentant un tableau de bord Power BI interactif pour analyser les performances et statistiques de la Coupe du Monde. Application web Flask permettant d'explorer les données, visualiser les tendances et accéder à des insights personnalisés.",
//     tech: ["Power BI", "Flask", "Python", "Data Viz"],
//     img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=500&fit=crop",
//     video: "https://www.dropbox.com/scl/fi/b6j2unctenmnbhjykvn00/Enregistrement-2025-10-20-222551.mp4?rlkey=ikc5o89ekwoemwc78ntw2n8t1&e=1&st=kow0lipl&dl=0",
//     github: "https://github.com/Hassanzorkot004/world-cup-power-bi-dashboard.git",
//     demo: null,
//     cat: "Data Analytics"
//   },

//   {
//     id: 3,
//     title: "Sign Language Translator",
//     desc: "Application Streamlit traduisant la langue des signes en texte via webcam en temps réel",
//     fullDesc: "Projet Python utilisant Streamlit où la webcam capture les gestes de langue des signes et les traduit instantanément en texte grâce à un modèle de deep learning.",
//     tech: ["Python", "Streamlit", "OpenCV", "TensorFlow", "MediaPipe"],
//     img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop",
//     video: null,
//     github: "https://github.com/username/sign-language-translator",
//     demo: null,
//     cat: "AI/ML"
//   },
//   {
//     id: 4,
//     title: "Agriculture AI - Plant Disease Detection",
//     desc: "Application React pour scanner les plantes et détecter les maladies (en cours)",
//     fullDesc: "Application mobile React Native permettant de scanner une plante avec l'appareil photo pour détecter les maladies. Utilise un modèle CNN entraîné sur des milliers d'images de plantes malades. Fonctionnalités supplémentaires en développement.",
//     tech: ["React Native", "TensorFlow.js", "CNN", "Image Recognition"],
//     img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=500&fit=crop",
//     video: null,
//     github: "https://github.com/username/agriculture-ai",
//     demo: null,
//     cat: "AI/ML"
//   }
// ];

// export default function Portfolio() {
//   const [projects, setProjects] = useState(initialProjects);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);
//   const [password, setPassword] = useState('');
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [filter, setFilter] = useState("All");
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [editingProject, setEditingProject] = useState(null);
//   const [newProject, setNewProject] = useState({
//     title: '', desc: '', fullDesc: '', tech: '', img: '', video: '', github: '', demo: '', cat: 'AI/ML'
//   });

//   useEffect(() => {
//     const handle = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handle);
//     return () => window.removeEventListener('scroll', handle);
//   }, []);

//   const scroll = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//     setIsOpen(false);
//   };

//   const handleLogin = () => {
//     if (password === 'Hassanzorkot004') {
//       setIsAdmin(true);
//       setShowLogin(false);
//       setPassword('');
//     } else {
//       alert('Mot de passe incorrect');
//     }
//   };

//   const handleAddProject = () => {
//     const techArray = newProject.tech.split(',').map(t => t.trim());
//     const project = {
//       id: Date.now(),
//       ...newProject,
//       tech: techArray
//     };
//     setProjects([...projects, project]);
//     setShowAddModal(false);
//     setNewProject({ title: '', desc: '', fullDesc: '', tech: '', img: '', video: '', github: '', demo: '', cat: 'AI/ML' });
//   };

//   const handleEditProject = () => {
//     const techArray = typeof editingProject.tech === 'string' 
//       ? editingProject.tech.split(',').map(t => t.trim())
//       : editingProject.tech;
    
//     setProjects(projects.map(p => 
//       p.id === editingProject.id 
//         ? { ...editingProject, tech: techArray }
//         : p
//     ));
//     setEditingProject(null);
//   };

//   const handleDeleteProject = (id) => {
//     if (window.confirm('Voulez-vous vraiment supprimer ce projet ?')) {
//       setProjects(projects.filter(p => p.id !== id));
//     }
//   };

//   const cats = ["All", ...new Set(projects.map(p => p.cat))];
//   const filtered = filter === "All" ? projects : projects.filter(p => p.cat === filter);

//   return (
//     <div className="font-sans">
//       <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-white/5 backdrop-blur-sm'}`}>
//         <nav className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="text-2xl font-bold">
//               <span className={scrolled ? 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent' : 'text-white'}>
//                 DS Portfolio
//               </span>
//             </div>
//             <div className="hidden md:flex items-center space-x-8">
//               {['accueil', 'apropos', 'competences', 'projets', 'contact'].map(i => (
//                 <button key={i} onClick={() => scroll(i)} className={`capitalize font-medium ${scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'}`}>
//                   {i === 'apropos' ? 'À propos' : i === 'competences' ? 'Compétences' : i}
//                 </button>
//               ))}
//               {!isAdmin ? (
//                 <button onClick={() => setShowLogin(true)} className={`p-2 rounded-full ${scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'}`}>
//                   <Lock size={20} />
//                 </button>
//               ) : (
//                 <button onClick={() => setIsAdmin(false)} className={`p-2 rounded-full ${scrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-300'}`}>
//                   <LogOut size={20} />
//                 </button>
//               )}
//             </div>
//             <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}>
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </nav>
//       </header>

//       {showLogin && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
//             <h3 className="text-2xl font-bold mb-4 text-gray-900">Connexion Admin</h3>
//             <input
//               type="password"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               onKeyPress={e => e.key === 'Enter' && handleLogin()}
//               className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 mb-4"
//               placeholder="Mot de passe"
//             />
//             <div className="flex gap-3">
//               <button onClick={handleLogin} className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-bold hover:scale-105 transition-all">
//                 Connexion
//               </button>
//               <button onClick={() => { setShowLogin(false); setPassword(''); }} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition-all">
//                 Annuler
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {selectedProject && (
//         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
//           <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl my-8">
//             <div className="relative">
//               {selectedProject.video ? (
//   selectedProject.video instanceof File ? (
//     selectedProject.video.type.startsWith("video/") ? (
//       <video controls className="w-full h-96 object-cover rounded-t-2xl">
//         <source src={URL.createObjectURL(selectedProject.video)} type={selectedProject.video.type} />
//       </video>
//     ) : (
//       <img
//         src={URL.createObjectURL(selectedProject.video)}
//         alt={selectedProject.title}
//         className="w-full h-96 object-cover rounded-t-2xl"
//       />
//     )
//   ) : typeof selectedProject.video === "string" ? (
//     selectedProject.video.includes("youtube") ? (
//       <iframe
//         src={selectedProject.video.replace("watch?v=", "embed/")}
//         className="w-full h-96 object-cover rounded-t-2xl"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     ) : (
//       <video controls className="w-full h-96 object-cover rounded-t-2xl">
//         <source
//           src={selectedProject.video
//             .replace("www.dropbox.com", "dl.dropboxusercontent.com")
//             .replace("?dl=0", "")}
//           type="video/mp4"
//         />
//       </video>
//     )
//   ) : null
// ) : selectedProject.img instanceof File ? (
//   <img
//     src={URL.createObjectURL(selectedProject.img)}
//     alt={selectedProject.title}
//     className="w-full h-96 object-cover rounded-t-2xl"
//   />
// ) : (
//   <img
//     src={selectedProject.img}
//     alt={selectedProject.title}
//     className="w-full h-96 object-cover rounded-t-2xl"
//   />
// )}


//               <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
//                 <X size={24} />
//               </button>
//             </div>
//             <div className="p-8">
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-3xl font-black text-gray-900">{selectedProject.title}</h2>
//                 <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold rounded-full">{selectedProject.cat}</span>
//               </div>
//               <p className="text-gray-700 mb-6 leading-relaxed">{selectedProject.fullDesc}</p>
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {selectedProject.tech.map((t, i) => (
//                   <span key={i} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium">{t}</span>
//                 ))}
//               </div>
//               <div className="flex gap-4">
//                 {selectedProject.github && (
//                   <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:scale-105 transition-all">
//                     <Github size={20} /> GitHub
//                   </a>
//                 )}
//                 {selectedProject.demo && (
//                   <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:scale-105 transition-all">
//                     <ExternalLink size={20} /> Demo
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {(showAddModal || editingProject) && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
//           <div className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl my-8">
//             <h3 className="text-2xl font-bold mb-6">{editingProject ? 'Modifier le projet' : 'Ajouter un projet'}</h3>
//             <div className="space-y-4">
//               <input type="text" placeholder="Titre" value={editingProject ? editingProject.title : newProject.title} onChange={e => editingProject ? setEditingProject({...editingProject, title: e.target.value}) : setNewProject({...newProject, title: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" />
//               <input type="text" placeholder="Description courte" value={editingProject ? editingProject.desc : newProject.desc} onChange={e => editingProject ? setEditingProject({...editingProject, desc: e.target.value}) : setNewProject({...newProject, desc: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" />
//               <textarea placeholder="Description complète" value={editingProject ? editingProject.fullDesc : newProject.fullDesc} onChange={e => editingProject ? setEditingProject({...editingProject, fullDesc: e.target.value}) : setNewProject({...newProject, fullDesc: e.target.value})} rows="4" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" />
//               <input type="text" placeholder="Technologies (séparées par virgule)" value={editingProject ? (Array.isArray(editingProject.tech) ? editingProject.tech.join(', ') : editingProject.tech) : newProject.tech} onChange={e => editingProject ? setEditingProject({...editingProject, tech: e.target.value}) : setNewProject({...newProject, tech: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" />
//               {/* <input type="text" placeholder="URL de l'image" value={editingProject ? editingProject.img : newProject.img} onChange={e => editingProject ? setEditingProject({...editingProject, img: e.target.value}) : setNewProject({...newProject, img: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" /> */}
//                <label className="block">
//           <span className="text-gray-700">Image ou vidéo du projet (optionnel)</span>
//           <input
//             type="file"
//             accept="image/*,video/*"
//             onChange={e => {
//               const file = e.target.files[0];
//               if (editingProject) {
//                 setEditingProject({ ...editingProject, video: file });
//               } else {
//                 setNewProject({ ...newProject, video: file });
//               }
//             }}
//             className="mt-2 w-full"
//           />
//         </label>
//               <input type="text" placeholder="URL de la vidéo (optionnel)" value={editingProject ? editingProject.video : newProject.video} onChange={e => editingProject ? setEditingProject({...editingProject, video: e.target.value}) : setNewProject({...newProject, video: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" />
//               <input type="text" placeholder="Lien GitHub" value={editingProject ? editingProject.github : newProject.github} onChange={e => editingProject ? setEditingProject({...editingProject, github: e.target.value}) : setNewProject({...newProject, github: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" />
//               <input type="text" placeholder="Lien Demo (optionnel)" value={editingProject ? editingProject.demo : newProject.demo} onChange={e => editingProject ? setEditingProject({...editingProject, demo: e.target.value}) : setNewProject({...newProject, demo: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" />
//               <select value={editingProject ? editingProject.cat : newProject.cat} onChange={e => editingProject ? setEditingProject({...editingProject, cat: e.target.value}) : setNewProject({...newProject, cat: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500">
//                 <option value="AI/ML">AI/ML</option>
//                 <option value="Data Analytics">Data Analytics</option>
//                 <option value="Desktop App">Desktop App</option>
//                 <option value="Web App">Web App</option>
//                 <option value="Mobile App">Mobile App</option>
//               </select>
//             </div>
//             <div className="flex gap-3 mt-6">
//               <button onClick={editingProject ? handleEditProject : handleAddProject} className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-bold hover:scale-105 transition-all">
//                 {editingProject ? 'Enregistrer' : 'Ajouter'}
//               </button>
//               <button onClick={() => { setShowAddModal(false); setEditingProject(null); }} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition-all">
//                 Annuler
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-950">
//           <div className="absolute inset-0 opacity-20">
//             <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//             <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//             <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
//           </div>
//         </div>
//         <div className="container mx-auto px-6 text-center relative z-10">
//           <div className="mb-8 relative">
//             <div className="w-40 h-40 mx-auto bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
//               <div className="w-36 h-36 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
//                 <Brain size={64} className="text-white drop-shadow-lg" />
//               </div>
//             </div>
//           </div>
//           <h1 className="text-6xl md:text-7xl font-black text-white mb-6">
//             <span className="inline-block bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">Ingénieur Data Science</span><br />
//             <span className="inline-block bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">& Intelligence Artificielle</span>
//           </h1>
//           <p className="text-2xl md:text-3xl text-purple-200 mb-4 font-bold">[Ton Nom]</p>
//           <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">Développeur Full Stack passionné par l'IA, le ML et la Data Science</p>
//           <div className="flex justify-center space-x-6 mb-10">
//             {[{ I: Github, h: "https://github.com/username" }, { I: Linkedin, h: "https://linkedin.com/in/username" }, { I: Mail, h: "mailto:email@example.com" }].map(({ I, h }, i) => (
//               <a key={i} href={h} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 backdrop-blur-md rounded-full shadow-xl hover:bg-white/20 transition-all border border-white/20 hover:scale-110 group">
//                 <I size={28} className="text-white group-hover:rotate-12 transition-transform" />
//               </a>
//             ))}
//           </div>
//           <button onClick={() => scroll('projets')} className="group relative px-10 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-full text-xl font-bold shadow-2xl hover:scale-105 overflow-hidden transition-all">
//             <span className="relative z-10">Découvrir mes projets</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//           </button>
//           <div className="mt-16 animate-bounce"><ChevronDown size={40} className="mx-auto text-purple-300" /></div>
//         </div>
//       </section>

//       <section id="apropos" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">À propos</h2>
//           <div className="max-w-3xl mx-auto">
//             <p className="text-lg text-gray-700 mb-6">Étudiant en cycle ingénieur, spécialisé en Data Science et Intelligence Artificielle. Passionné par le développement d'applications innovantes combinant IA, ML et technologies modernes.</p>
//             <p className="text-lg text-gray-700 mb-6">De l'analyse de données avec Power BI aux applications de reconnaissance d'images avec TensorFlow, j'aime créer des solutions qui ont un impact réel.</p>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
//               {[{ n: `${projects.length}`, l: "Projets", c: "purple" }, { n: "4+", l: "Technologies", c: "blue" }, { n: "2", l: "Ans", c: "indigo" }, { n: "100%", l: "Passion", c: "pink" }].map(({ n, l, c }) => (
//                 <div key={l} className={`text-center p-6 bg-gradient-to-br from-${c}-500 to-${c}-600 rounded-2xl shadow-lg hover:scale-105 transition-transform`}>
//                   <div className="text-4xl font-black text-white">{n}</div>
//                   <div className="text-white/90 mt-2 font-semibold">{l}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="competences" className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Compétences</h2>
//           <p className="text-center text-gray-600 mb-12">Technologies que je maîtrise</p>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { t: "AI & Machine Learning", s: ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV"], I: Brain },
//               { t: "Web Development", s: ["React", "Flask", "Streamlit", "Node.js"], I: Code2 },
//               { t: "Data Analytics", s: ["Power BI", "Python", "Pandas", "NumPy"], I: TrendingUp },
//               { t: "Desktop & Mobile", s: ["JavaFX", "React Native", "Java", "MySQL"], I: Database },
//               { t: "Deep Learning", s: ["CNN", "Image Recognition", "MediaPipe", "Computer Vision"], I: Brain },
//               { t: "Langages", s: ["Python", "Java", "C", "SQL","AL microsoft"], I: Code2 },
//               { t: "Outils", s: ["Git",  "VS Code", "Scene Builder"], I: Code2 },
              
//             ].map(({ t, s, I }) => (
//               <div key={t} className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all border border-purple-100">
//                 <div className="flex items-center mb-4">
//                   <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mr-3"><I className="text-white" size={24} /></div>
//                   <h3 className="text-lg font-bold">{t}</h3>
//                 </div>
//                 <div className="flex flex-wrap gap-2">{s.map((sk, i) => <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">{sk}</span>)}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="projets" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
//         </div>
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="flex justify-between items-center mb-8">
//             <div>
//               <h2 className="text-5xl font-black text-white mb-2">Mes Projets</h2>
//               <p className="text-purple-200">Découvrez mes réalisations</p>
//             </div>
//             {isAdmin && (
//               <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:scale-105 transition-all shadow-lg">
//                 <Plus size={20} /> Ajouter un projet
//               </button>
//             )}
//           </div>
//           <div className="flex justify-center flex-wrap gap-3 mb-12">
//             {cats.map(c => (
//               <button key={c} onClick={() => setFilter(c)} className={`px-6 py-3 rounded-full font-semibold transition-all ${filter === c ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-105' : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'}`}>{c}</button>
//             ))}
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filtered.map(p => (
//               <div key={p.id} className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/10 transition-all border border-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
//                 <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedProject(p)}>
//                   <img src={p.img} alt={p.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                     <span className="text-white font-bold text-lg">Voir détails</span>
//                   </div>
//                   <span className="absolute top-3 right-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold rounded-full">{p.cat}</span>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300">{p.title}</h3>
//                   <p className="text-gray-300 mb-4">{p.desc}</p>
//                   <div className="flex flex-wrap gap-2 mb-6">{p.tech.map((t, i) => <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-lg text-xs font-medium border border-purple-500/30">{t}</span>)}</div>
//                   <div className="flex items-center justify-between">
//                     <button onClick={() => setSelectedProject(p)} className="flex items-center text-white hover:text-purple-300 font-medium group/link">
//                       <ExternalLink size={20} className="mr-2 group-hover/link:rotate-12 transition-transform" />Voir plus
//                     </button>
//                     {isAdmin && (
//                       <div className="flex gap-2">
//                         <button onClick={() => setEditingProject(p)} className="p-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-all">
//                           <Edit2 size={18} />
//                         </button>
//                         <button onClick={() => handleDeleteProject(p.id)} className="p-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-all">
//                           <Trash2 size={18} />
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Contact</h2>
//           <p className="text-center text-gray-600 mb-12">Discutons de vos projets</p>
//           <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-2xl border border-purple-100">
//             <div className="space-y-6">
//               <div><label className="block text-gray-800 mb-2 font-bold">Nom</label><input type="text" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" placeholder="Votre nom" /></div>
//               <div><label className="block text-gray-800 mb-2 font-bold">Email</label><input type="email" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" placeholder="votre@email.com" /></div>
//               <div><label className="block text-gray-800 mb-2 font-bold">Message</label><textarea rows="5" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 resize-none" placeholder="Votre message..." /></div>
//               <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl hover:shadow-lg font-bold hover:scale-105 transition-all">Envoyer</button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-8">
//         <div className="container mx-auto px-6 text-center">
//           <p className="mb-4">© 2025 Portfolio Data Science & AI - Tous droits réservés</p>
//           <div className="flex justify-center space-x-6">
//             {[{ I: Github, h: "https://github.com/username" }, { I: Linkedin, h: "https://linkedin.com/in/username" }, { I: Mail, h: "mailto:email@example.com" }].map(({ I, h }, i) => (
//               <a key={i} href={h} target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors"><I size={24} /></a>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown, Brain, Database, TrendingUp, Code2, Plus, Edit2, Trash2, LogOut, Lock } from 'lucide-react';


// const initialProjects = [
//   {
//     id: 1,
//     title: "Carpooling System",
//     desc: "Application JavaFX connectant conducteurs et passagers pour partager des trajets",
//     fullDesc: "Système de covoiturage permettant aux utilisateurs de créer des annonces, parcourir les options disponibles et gérer leurs horaires de trajets. Réduction des coûts et de l'impact environnemental.",
//     tech: ["JavaFX", "Java", "MySQL", "Scene Builder"],
//     img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
//     media:[
//     "https://i.postimg.cc/yWVWqP8Q/Capture-d-ecran-2025-05-14-024800.png",
//     "https://i.postimg.cc/t7X7054k/Capture-d-ecran-2025-05-14-024820.png",
//     "https://i.postimg.cc/bd3rqtZQ/Capture-d-ecran-2025-05-14-025018.png",
//     "https://i.postimg.cc/c6XCdnvh/Capture-d-ecran-2025-05-14-025225.png",
//     "https://i.postimg.cc/BtMbJKjw/Capture-d-ecran-2025-05-14-025422.png"
// ]
// ,
//     github: "https://github.com/Hassanzorkot004/project.git",
//     demo: null,
//     cat: "Desktop App"
//   },
//   {
//     id: 2,
//     title: "World Cup Dashboard",
//     desc: "Dashboard Power BI interactif déployé avec Flask pour analyser les performances",
//     fullDesc: "Projet présentant un tableau de bord Power BI interactif pour analyser les performances et statistiques de la Coupe du Monde. Application web Flask permettant d'explorer les données, visualiser les tendances et accéder à des insights personnalisés.",
//     tech: ["Power BI", "Flask", "Python", "Data Viz"],
//     img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=500&fit=crop",
//     media: ["https://www.dropbox.com/scl/fi/b6j2unctenmnbhjykvn00/Enregistrement-2025-10-20-222551.mp4?rlkey=ikc5o89ekwoemwc78ntw2n8t1&e=1&st=kow0lipl&dl=0"],
//     github: "https://github.com/Hassanzorkot004/world-cup-power-bi-dashboard.git",
//     demo: null,
//     cat: "Data Analytics"
//   },
//   {
//     id: 3,
//     title: "Sign Language Translator",
//     desc: "Application Streamlit traduisant la langue des signes en texte via webcam en temps réel",
//     fullDesc: "Projet Python utilisant Streamlit où la webcam capture les gestes de langue des signes et les traduit instantanément en texte grâce à un modèle de deep learning.Mais c'est un projet debutant c'est a dire j'ai entrainer mon modele sur quelques mots seulement",
//     tech: ["Python", "Streamlit", "OpenCV", "TensorFlow", "MediaPipe"],
//     img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop",
//     media: [],
//     github: "https://github.com/username/sign-language-translator",
//     demo: null,
//     cat: "AI/ML"
//   },

//  {
//   id: 4,
//   title: "Système de Suivi GPS des Flottes intégré à Microsoft Dynamics 365 Business Central",
//   fullDesc: "Développement d’une extension Business Central permettant le suivi en temps réel des camions de livraison via GPS. Le système centralise les positions, l’historique des trajets et facilite la gestion logistique directement depuis l’ERP.",
//   tech: [
//     "Microsoft AL",
//     "Microsoft Dynamics 365 Business Central",
//     "Python",
//     "JavaScript",
//     "API GPS",
//     "Cloudflare",
//     "Render"
//   ],
//   img:"https://b2m-it.com/wp-content/uploads/2024/09/B2M-6.png",
//   media: ["https://i.postimg.cc/90Xkfzxc/BC.png"],
//   demo: null,
//   cat: "ERP & Cloud Systems"
// }



//   // {
//   //   id: 4,
//   //   title: "Agriculture AI - Plant Disease Detection",
//   //   desc: "Application React pour scanner les plantes et détecter les maladies (en cours)",
//   //   fullDesc: "Application mobile React Native permettant de scanner une plante avec l'appareil photo pour détecter les maladies. Utilise un modèle CNN entraîné sur des milliers d'images de plantes malades. Fonctionnalités supplémentaires en développement.",
//   //   tech: ["React Native", "TensorFlow.js", "CNN", "Image Recognition"],
//   //   img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=500&fit=crop",
//   //   media: [],
//   //   github: "https://github.com/username/agriculture-ai",
//   //   demo: null,
//   //   cat: "AI/ML"
//   // }
// ];

// export default function Portfolio() {
//   const [projects, setProjects] = useState(initialProjects);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);
//   const [password, setPassword] = useState('');
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [filter, setFilter] = useState("All");
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [editingProject, setEditingProject] = useState(null);
//   const [newProject, setNewProject] = useState({
//     title: '', desc: '', fullDesc: '', tech: '', img: '', media: [], github: '', demo: '', cat: 'AI/ML', video: ''
//   });

//   useEffect(() => {
//     const handle = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handle);
//     return () => window.removeEventListener('scroll', handle);
//   }, []);

//   const scroll = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//     setIsOpen(false);
//   };

//   const handleLogin = () => {
//     if (password === 'Hassanzorkot004') {
//       setIsAdmin(true);
//       setShowLogin(false);
//       setPassword('');
//     } else {
//       alert('Mot de passe incorrect');
//     }
//   };

//   const handleAddProject = () => {
//     const techArray = newProject.tech.split(',').map(t => t.trim());
//     const mediaArray = [...(newProject.media || [])];
//     if (newProject.video && newProject.video.trim() !== '') {
//       mediaArray.push(newProject.video.trim());
//     }
//     const project = {
//       id: Date.now(),
//       ...newProject,
//       tech: techArray,
//       media: mediaArray
//     };
//     setProjects([...projects, project]);
//     setShowAddModal(false);
//     setNewProject({ title: '', desc: '', fullDesc: '', tech: '', img: '', media: [], github: '', demo: '', cat: 'AI/ML', video: '' });
//   };

//   const handleEditProject = () => {
//     const techArray = typeof editingProject.tech === 'string' 
//       ? editingProject.tech.split(',').map(t => t.trim())
//       : editingProject.tech;
    
//     const mediaArray = [...(editingProject.media || [])];
//     if (editingProject.video && editingProject.video.trim() !== '') {
//       if (!mediaArray.includes(editingProject.video.trim())) {
//         mediaArray.push(editingProject.video.trim());
//       }
//     }
    
//     setProjects(projects.map(p => 
//       p.id === editingProject.id 
//         ? { ...editingProject, tech: techArray, media: mediaArray }
//         : p
//     ));
//     setEditingProject(null);
//   };

//   const handleDeleteProject = (id) => {
//     if (window.confirm('Voulez-vous vraiment supprimer ce projet ?')) {
//       setProjects(projects.filter(p => p.id !== id));
//     }
//   };

//   const cats = ["All", ...new Set(projects.map(p => p.cat))];
//   const filtered = filter === "All" ? projects : projects.filter(p => p.cat === filter);

//   return (
//     <div className="font-sans">
//       <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-white/5 backdrop-blur-sm'}`}>
//         <nav className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="text-2xl font-bold">
//               <span className={scrolled ? 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent' : 'text-white'}>
//                 DS Portfolio
//               </span>
//             </div>
//             <div className="hidden md:flex items-center space-x-8">
//               {['accueil', 'apropos', 'competences', 'projets', 'contact'].map(i => (
//                 <button key={i} onClick={() => scroll(i)} className={`capitalize font-medium ${scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'}`}>
//                   {i === 'apropos' ? 'À propos' : i === 'competences' ? 'Compétences' : i}
//                 </button>
//               ))}
//               {!isAdmin ? (
//                 <button onClick={() => setShowLogin(true)} className={`p-2 rounded-full ${scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'}`}>
//                   <Lock size={20} />
//                 </button>
//               ) : (
//                 <button onClick={() => setIsAdmin(false)} className={`p-2 rounded-full ${scrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-300'}`}>
//                   <LogOut size={20} />
//                 </button>
//               )}
//             </div>
//             <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}>
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </nav>
//       </header>

//       {showLogin && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
//             <h3 className="text-2xl font-bold mb-4 text-gray-900">Connexion Admin</h3>
//             <input
//               type="password"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               onKeyPress={e => e.key === 'Enter' && handleLogin()}
//               className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 mb-4"
//               placeholder="Mot de passe"
//             />
//             <div className="flex gap-3">
//               <button onClick={handleLogin} className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-bold hover:scale-105 transition-all">
//                 Connexion
//               </button>
//               <button onClick={() => { setShowLogin(false); setPassword(''); }} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition-all">
//                 Annuler
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {selectedProject && (
//         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
//           <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl my-8">
//             <div className="relative">
//               {selectedProject?.media?.length > 0 ? (
//                 selectedProject.media.map((file, index) => {
//                   if (file instanceof File) {
//                     if (file.type.startsWith("video/")) {
//                       return (
//                         <video key={index} controls className="w-full h-96 object-cover rounded-t-2xl mb-4">
//                           <source src={URL.createObjectURL(file)} type={file.type} />
//                         </video>
//                       );
//                     } else {
//                       return (
//                         <img
//                           key={index}
//                           src={URL.createObjectURL(file)}
//                           alt={`${selectedProject.title} ${index + 1}`}
//                           className="w-full h-96 object-cover rounded-t-2xl mb-4"
//                         />
//                       );
//                     }
//                   } else if (typeof file === "string") {
//                     if (file.includes("youtube")) {
//                       return (
//                         <iframe
//                           key={index}
//                           src={file.replace("watch?v=", "embed/")}
//                           className="w-full h-96 object-cover rounded-t-2xl mb-4"
//                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                           allowFullScreen
//                         ></iframe>
//                       );
//                     } else if (file.endsWith(".mp4") || file.includes("dropbox")) {
//                       return (
//                         <video key={index} controls className="w-full h-96 object-cover rounded-t-2xl mb-4">
//                           <source
//                             src={file.replace("www.dropbox.com", "dl.dropboxusercontent.com").replace("?dl=0", "")}
//                             type="video/mp4"
//                           />
//                         </video>
//                       );
//                     } else {
//                       return (
//                         <img
//                           key={index}
//                           src={file}
//                           alt={`${selectedProject.title} ${index + 1}`}
//                           className="w-full h-96 object-cover rounded-t-2xl mb-4"
//                         />
//                       );
//                     }
//                   }
//                   return null;
//                 })
//               ) : (
//                 <img
//                   src={selectedProject.img}
//                   alt={selectedProject.title}
//                   className="w-full h-96 object-cover rounded-t-2xl"
//                 />
//               )}
//               <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform">
//                 <X size={24} />
//               </button>
//             </div>
//             <div className="p-8">
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-3xl font-black text-gray-900">{selectedProject.title}</h2>
//                 <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-bold rounded-full">{selectedProject.cat}</span>
//               </div>
//               <p className="text-gray-700 mb-6 leading-relaxed">{selectedProject.fullDesc}</p>
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {selectedProject.tech.map((t, i) => (
//                   <span key={i} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium">{t}</span>
//                 ))}
//               </div>
//               <div className="flex gap-4">
//                 {selectedProject.github && (
//                   <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:scale-105 transition-all">
//                     <Github size={20} /> GitHub
//                   </a>
//                 )}
//                 {selectedProject.demo && (
//                   <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:scale-105 transition-all">
//                     <ExternalLink size={20} /> Demo
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {(showAddModal || editingProject) && (
//         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
//           <div className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl my-8">
//             <h3 className="text-2xl font-bold mb-6">{editingProject ? 'Modifier le projet' : 'Ajouter un projet'}</h3>
//             <div className="space-y-4">
//               <input type="text" placeholder="Titre" value={editingProject ? editingProject.title : newProject.title} onChange={e => editingProject ? setEditingProject({...editingProject, title: e.target.value}) : setNewProject({...newProject, title: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" />
//               <input type="text" placeholder="Description courte" value={editingProject ? editingProject.desc : newProject.desc} onChange={e => editingProject ? setEditingProject({...editingProject, desc: e.target.value}) : setNewProject({...newProject, desc: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" />
//               <textarea placeholder="Description complète" value={editingProject ? editingProject.fullDesc : newProject.fullDesc} onChange={e => editingProject ? setEditingProject({...editingProject, fullDesc: e.target.value}) : setNewProject({...newProject, fullDesc: e.target.value})} rows="4" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" />
//               <input type="text" placeholder="Technologies (séparées par virgule)" value={editingProject ? (Array.isArray(editingProject.tech) ? editingProject.tech.join(', ') : editingProject.tech) : newProject.tech} onChange={e => editingProject ? setEditingProject({...editingProject, tech: e.target.value}) : setNewProject({...newProject, tech: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" />
//               <input type="text" placeholder="URL de l'image de couverture" value={editingProject ? editingProject.img : newProject.img} onChange={e => editingProject ? setEditingProject({...editingProject, img: e.target.value}) : setNewProject({...newProject, img: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" />
              
//               <div>
//                 <label className="block text-gray-700 mb-2 font-semibold">Images et vidéos du projet (plusieurs fichiers possibles)</label>
//                 <input
//                   type="file"
//                   accept="image/*,video/*"
//                   multiple
//                   onChange={e => {
//                     const files = Array.from(e.target.files);
//                     if (editingProject) {
//                       setEditingProject({ ...editingProject, media: [...(editingProject.media || []), ...files] });
//                     } else {
//                       setNewProject({ ...newProject, media: [...(newProject.media || []), ...files] });
//                     }
//                   }}
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500"
//                 />
//                 {((editingProject?.media?.length > 0) || (newProject?.media?.length > 0)) && (
//                   <div className="mt-2 text-sm text-gray-600">
//                     {(editingProject?.media || newProject?.media || []).length} fichier(s) sélectionné(s)
//                   </div>
//                 )}
//               </div>
              
//               <input type="text" placeholder="URL vidéo YouTube ou Dropbox (optionnel)" value={editingProject ? (editingProject.video || '') : (newProject.video || '')} onChange={e => editingProject ? setEditingProject({...editingProject, video: e.target.value}) : setNewProject({...newProject, video: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" />
//               <input type="text" placeholder="Lien GitHub" value={editingProject ? editingProject.github : newProject.github} onChange={e => editingProject ? setEditingProject({...editingProject, github: e.target.value}) : setNewProject({...newProject, github: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" />
//               <input type="text" placeholder="Lien Demo (optionnel)" value={editingProject ? editingProject.demo : newProject.demo} onChange={e => editingProject ? setEditingProject({...editingProject, demo: e.target.value}) : setNewProject({...newProject, demo: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" />
//               <select value={editingProject ? editingProject.cat : newProject.cat} onChange={e => editingProject ? setEditingProject({...editingProject, cat: e.target.value}) : setNewProject({...newProject, cat: e.target.value})} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500">
//                 <option value="AI/ML">AI/ML</option>
//                 <option value="Data Analytics">Data Analytics</option>
//                 <option value="Desktop App">Desktop App</option>
//                 <option value="Web App">Web App</option>
//                 <option value="Mobile App">Mobile App</option>
//               </select>
//             </div>
//             <div className="flex gap-3 mt-6">
//               <button onClick={editingProject ? handleEditProject : handleAddProject} className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-bold hover:scale-105 transition-all">
//                 {editingProject ? 'Enregistrer' : 'Ajouter'}
//               </button>
//               <button onClick={() => { setShowAddModal(false); setEditingProject(null); }} className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition-all">
//                 Annuler
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-950">
//           <div className="absolute inset-0 opacity-20">
//             <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
//             <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
//             <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
//           </div>
//         </div>
//         <div className="container mx-auto px-6 text-center relative z-10">
//           <div className="mb-8 relative">
//             <div className="w-40 h-40 mx-auto bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
//               <div className="w-36 h-36 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
//                 <Brain size={64} className="text-white drop-shadow-lg" />
//               </div>
//             </div>
//           </div>
//           <h1 className="text-6xl md:text-7xl font-black text-white mb-6">
//             <span className="inline-block bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">Ingénieur Data Science</span><br />
//             <span className="inline-block bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">& Intelligence Artificielle</span>
//           </h1>
//           <p className="text-2xl md:text-3xl text-purple-200 mb-4 font-bold">[Ton Nom]</p>
//           <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">Développeur Full Stack passionné par l'IA, le ML et la Data Science</p>
//           <div className="flex justify-center space-x-6 mb-10">
//             {[{ I: Github, h: "https://github.com/username" }, { I: Linkedin, h: "https://linkedin.com/in/username" }, { I: Mail, h: "mailto:email@example.com" }].map(({ I, h }, i) => (
//               <a key={i} href={h} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 backdrop-blur-md rounded-full shadow-xl hover:bg-white/20 transition-all border border-white/20 hover:scale-110 group">
//                 <I size={28} className="text-white group-hover:rotate-12 transition-transform" />
//               </a>
//             ))}
//           </div>
//           <button onClick={() => scroll('projets')} className="group relative px-10 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white rounded-full text-xl font-bold shadow-2xl hover:scale-105 overflow-hidden transition-all">
//             <span className="relative z-10">Découvrir mes projets</span>
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//           </button>
//           <div className="mt-16 animate-bounce"><ChevronDown size={40} className="mx-auto text-purple-300" /></div>
//         </div>
//       </section>

//       <section id="apropos" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">À propos</h2>
//           <div className="max-w-3xl mx-auto">
//             <p className="text-lg text-gray-700 mb-6">Étudiant en cycle ingénieur, spécialisé en Data Science et Intelligence Artificielle. Passionné par le développement d'applications innovantes combinant IA, ML et technologies modernes.</p>
//             <p className="text-lg text-gray-700 mb-6">De l'analyse de données avec Power BI aux applications de reconnaissance d'images avec TensorFlow, j'aime créer des solutions qui ont un impact réel.</p>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
//               {[{ n: `${projects.length}`, l: "Projets", c: "purple" }, { n: "4+", l: "Technologies", c: "blue" }, { n: "2", l: "Ans", c: "indigo" }, { n: "100%", l: "Passion", c: "pink" }].map(({ n, l, c }) => (
//                 <div key={l} className={`text-center p-6 bg-gradient-to-br from-${c}-500 to-${c}-600 rounded-2xl shadow-lg hover:scale-105 transition-transform`}>
//                   <div className="text-4xl font-black text-white">{n}</div>
//                   <div className="text-white/90 mt-2 font-semibold">{l}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//       <section id="competences" className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Compétences</h2>
//           <p className="text-center text-gray-600 mb-12">Technologies que je maîtrise</p>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               { t: "AI & Machine Learning", s: ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV"], I: Brain },
//               { t: "Web Development", s: ["React", "Flask", "Streamlit", "Node.js"], I: Code2 },
//               { t: "Data Analytics", s: ["Power BI", "Python", "Pandas", "NumPy"], I: TrendingUp },
//               { t: "Desktop & Mobile", s: ["JavaFX", "React Native", "Java", "MySQL"], I: Database },
//               { t: "Deep Learning", s: ["CNN", "Image Recognition", "MediaPipe", "Computer Vision"], I: Brain },
//               { t: "Langages", s: ["Python", "Java", "C", "SQL","AL microsoft"], I: Code2 },
//               { t: "Outils", s: ["Git",  "VS Code", "Scene Builder"], I: Code2 },
              
//             ].map(({ t, s, I }) => (
//               <div key={t} className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all border border-purple-100">
//                 <div className="flex items-center mb-4">
//                   <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mr-3"><I className="text-white" size={24} /></div>
//                   <h3 className="text-lg font-bold">{t}</h3>
//                 </div>
//                 <div className="flex flex-wrap gap-2">{s.map((sk, i) => <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">{sk}</span>)}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="projets" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
//           <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
//         </div>
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="flex justify-between items-center mb-8">
//             <div>
//               <h2 className="text-5xl font-black text-white mb-2">Mes Projets</h2>
//               <p className="text-purple-200">Découvrez mes réalisations</p>
//             </div>
//             {isAdmin && (
//               <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold hover:scale-105 transition-all shadow-lg">
//                 <Plus size={20} /> Ajouter un projet
//               </button>
//             )}
//           </div>
//           <div className="flex justify-center flex-wrap gap-3 mb-12">
//             {cats.map(c => (
//               <button key={c} onClick={() => setFilter(c)} className={`px-6 py-3 rounded-full font-semibold transition-all ${filter === c ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-105' : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'}`}>{c}</button>
//             ))}
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filtered.map(p => (
//               <div key={p.id} className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/10 transition-all border border-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
//                 <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedProject(p)}>
//                   <img src={p.img} alt={p.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                     <span className="text-white font-bold text-lg">Voir détails</span>
//                   </div>
//                   <span className="absolute top-3 right-3 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold rounded-full">{p.cat}</span>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300">{p.title}</h3>
//                   <p className="text-gray-300 mb-4">{p.desc}</p>
//                   <div className="flex flex-wrap gap-2 mb-6">{p.tech.map((t, i) => <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-lg text-xs font-medium border border-purple-500/30">{t}</span>)}</div>
//                   <div className="flex items-center justify-between">
//                     <button onClick={() => setSelectedProject(p)} className="flex items-center text-white hover:text-purple-300 font-medium group/link">
//                       <ExternalLink size={20} className="mr-2 group-hover/link:rotate-12 transition-transform" />Voir plus
//                     </button>
//                     {isAdmin && (
//                       <div className="flex gap-2">
//                         <button onClick={() => setEditingProject(p)} className="p-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-all">
//                           <Edit2 size={18} />
//                         </button>
//                         <button onClick={() => handleDeleteProject(p.id)} className="p-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-all">
//                           <Trash2 size={18} />
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-black text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Contact</h2>
//           <p className="text-center text-gray-600 mb-12">Discutons de vos projets</p>
//           <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-2xl border border-purple-100">
//             <div className="space-y-6">
//               <div><label className="block text-gray-800 mb-2 font-bold">Nom</label><input type="text" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" placeholder="Votre nom" /></div>
//               <div><label className="block text-gray-800 mb-2 font-bold">Email</label><input type="email" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500" placeholder="votre@email.com" /></div>
//               <div><label className="block text-gray-800 mb-2 font-bold">Message</label><textarea rows="5" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 resize-none" placeholder="Votre message..." /></div>
//               <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl hover:shadow-lg font-bold hover:scale-105 transition-all">Envoyer</button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-8">
//         <div className="container mx-auto px-6 text-center">
//           <p className="mb-4">© 2025 Portfolio Data Science & AI - Tous droits réservés</p>
//           <div className="flex justify-center space-x-6">
//             {[{ I: Github, h: "https://github.com/username" }, { I: Linkedin, h: "https://linkedin.com/in/username" }, { I: Mail, h: "mailto:email@example.com" }].map(({ I, h }, i) => (
//               <a key={i} href={h} target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors"><I size={24} /></a>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { Github, Linkedin, Mail, ExternalLink, Menu, X, Terminal, Cpu, Zap, Code2, Plus, Edit2, Trash2, LogOut, Lock, ChevronLeft, ChevronRight, Activity } from 'lucide-react';

// const initialProjects = [
//   {
//     id: 1,
//     title: "Carpooling System",
//     desc: "JavaFX application connecting drivers and passengers to share rides.",
//     fullDesc: "A comprehensive carpooling platform that allows users to create ride postings, browse available trips, manage their schedules, and ultimately reduce transportation costs and environmental impact.",
//     tech: ["JavaFX", "Java", "MySQL", "Scene Builder"],
//     img: "https://startaride.com/wp-content/uploads/2024/05/2-2-1024x543-1.png",
//     media: [
//       "https://image.noelshack.com/fichiers/2026/06/7/1770559417-capture-d-cran-2025-05-14-024800.png",
//       "https://www.noelshack.com/2026-06-7-1770559417-capture-d-cran-2025-05-14-024820.png",
//       "https://image.noelshack.com/fichiers/2026/06/7/1770559544-capture-d-cran-2025-05-14-025018.png",
//       "https://image.noelshack.com/fichiers/2026/06/7/1770559544-capture-d-cran-2025-05-14-025225.png",
//       "https://image.noelshack.com/fichiers/2026/06/7/1770559585-capture-d-cran-2025-05-14-025422.png"
//     ],
//     github: "https://github.com/Hassanzorkot004/project.git",
//     demo: null,
//     cat: "Desktop App"
//   },
//   {
//     id: 2,
//     title: "World Cup Dashboard",
//     desc: "Interactive Power BI dashboard deployed with Flask to analyze performance and statistics.",
//     fullDesc: "A web application that presents an interactive Power BI dashboard for analyzing World Cup performances. Users can explore datasets, visualize trends, and gain personalized insights on team and player statistics.",
//     tech: ["Power BI", "Flask", "Python", "Data Visualization"],
//     img: "https://historyuk.s3.eu-west-2.amazonaws.com/s3fs-public/styles/768x432/public/2022-11/shutterstock_2190840355-min.jpg?itok=Lb1JcauY",
//     media: ["https://www.dropbox.com/scl/fi/b6j2unctenmnbhjykvn00/Enregistrement-2025-10-20-222551.mp4?rlkey=ikc5o89ekwoemwc78ntw2n8t1&e=1&st=kow0lipl&dl=0"],
//     github: "https://github.com/Hassanzorkot004/world-cup-power-bi-dashboard.git",
//     demo: null,
//     cat: "Data Analytics"
//   },
//   {
//     id: 3,
//     title: "Sign Language Translator",
//     desc: "Real-time sign language recognition and translation into text using a webcam.",
//     fullDesc: "A Python project using Streamlit where the webcam captures sign language gestures and instantly translates them into text via a deep learning model. Designed to assist communication for the hearing impaired, initially trained on a limited vocabulary.",
//     tech: ["Python", "Streamlit", "OpenCV", "TensorFlow", "MediaPipe"],
//     img: "https://www.shutterstock.com/image-photo/deaf-alphabet-letter-hello-by-600nw-2495650585.jpg",
//     media: ["https://www.dropbox.com/scl/fi/9tcs2iz8oqzxh1ni9s0my/Enregistrement-2026-02-09-031953.mp4?rlkey=8k1ixy6ch8wpglhidii8nz8n8&st=gphwn9ob&dl=0"],
//     github: "https://github.com/Hassanzorkot004/SigndetectionProject.git",
//     demo: null,
//     cat: "AI/ML"
//   },
//   {
//     id: 4,
//     title: "GPS Fleet Tracking System",
//     desc: "Business Central extension enabling real-time GPS fleet monitoring.",
//     fullDesc: "Developed an extension for Microsoft Dynamics 365 Business Central that tracks delivery trucks in real-time via GPS. It centralizes fleet positions, trip histories, and allows managers to efficiently handle logistics directly from the ERP interface.",
//     tech: ["Microsoft AL", "Dynamics 365", "Python", "JavaScript", "GPS API", "Cloudflare"],
//     img: "https://b2m-it.com/wp-content/uploads/2024/09/B2M-6.png",
//     media: ["https://i.postimg.cc/90Xkfzxc/BC.png"],
//     github: null,
//     demo: null,
//     cat: "ERP & Cloud"
//   },
//   {
//     id: 5,
//     title: "Eye Disease Recognition",
//     desc: "AI-powered application to detect eye diseases from retinal images.",
//     fullDesc: "A deep learning model deployed in a React app that predicts one of three eye diseases—Cataract, Glaucoma, or Retinopathy—based on uploaded retinal images. Designed to assist early diagnosis and support ophthalmologists in clinical decision-making.",
//     tech: ["Python", "React", "TensorFlow"],
//     img: "https://img.passeportsante.net/1200x675/2021-05-03/i103776-ophtalmologie.jpg",
//     media: ["https://www.dropbox.com/scl/fi/ow8qx6ncf33mpkl7i5lc4/Enregistrement-2026-02-08-153753.mp4?rlkey=apu60dr1jto3a1agja1h2f57a&st=lg6fhh86&dl=0"],
//     github: "https://github.com/Hassanzorkot004/Eyediseasedetection.git",
//     demo: null,
//     cat: "Deep Learning"
//   }
// ];


// // Image Carousel Component
// function ImageCarousel({ images, currentIndex, setCurrentIndex }) {
//   const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
//   const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <div className="relative group">
//       <img
//         src={images[currentIndex]}
//         alt={`Slide ${currentIndex + 1}`}
//         className="w-full h-96 object-contain bg-black/90 border-b-2 border-cyan-500/30"
//       />
      
//       {images.length > 1 && (
//         <>
//           <button
//             onClick={prevImage}
//             className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-cyan-500/20 border border-cyan-500 p-2 opacity-0 group-hover:opacity-100 transition-all"
//           >
//             <ChevronLeft size={24} className="text-cyan-500" />
//           </button>
//           <button
//             onClick={nextImage}
//             className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-cyan-500/20 border border-cyan-500 p-2 opacity-0 group-hover:opacity-100 transition-all"
//           >
//             <ChevronRight size={24} className="text-cyan-500" />
//           </button>
          
//           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//             {images.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentIndex(idx)}
//                 className={`h-1 transition-all ${
//                   idx === currentIndex ? 'bg-cyan-500 w-8' : 'bg-cyan-500/30 w-4'
//                 }`}
//               />
//             ))}
//           </div>
          
//           <div className="absolute top-4 right-4 bg-black/80 border border-cyan-500/50 px-3 py-1">
//             <span className="text-cyan-500 text-sm font-mono">
//               [{currentIndex + 1}/{images.length}]
//             </span>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// // Glitch Text Effect
// function GlitchText({ children, className = "" }) {
//   return (
//     <span className={`relative inline-block ${className}`} data-text={children}>
//       {children}
//     </span>
//   );
// }

// export default function Portfolio() {
//   const [projects, setProjects] = useState(initialProjects);
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);
//   const [password, setPassword] = useState('');
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [filter, setFilter] = useState("All");
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [editingProject, setEditingProject] = useState(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [newProject, setNewProject] = useState({
//     title: '', desc: '', fullDesc: '', tech: '', img: '', media: [], github: '', demo: '', cat: 'AI/ML', video: ''
//   });

//   useEffect(() => {
//     const handle = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handle);
    
//     const handleMouse = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouse);
    
//     return () => {
//       window.removeEventListener('scroll', handle);
//       window.removeEventListener('mousemove', handleMouse);
//     };
//   }, []);

//   useEffect(() => {
//     if (selectedProject) setCurrentImageIndex(0);
//   }, [selectedProject]);

//   const scroll = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//     setIsOpen(false);
//   };

//   const handleLogin = () => {
//     if (password === 'Hassanzorkot004') {
//       setIsAdmin(true);
//       setShowLogin(false);
//       setPassword('');
//     } else {
//       alert('Mot de passe incorrect');
//     }
//   };


//   const handleAddProject = () => {
//     const techArray = newProject.tech.split(',').map(t => t.trim());
//     const mediaArray = [...(newProject.media || [])];
//     if (newProject.video && newProject.video.trim() !== '') {
//       mediaArray.push(newProject.video.trim());
//     }
//     const project = {
//       id: Date.now(),
//       ...newProject,
//       tech: techArray,
//       media: mediaArray
//     };
//     setProjects([...projects, project]);
//     setShowAddModal(false);
//     setNewProject({ title: '', desc: '', fullDesc: '', tech: '', img: '', media: [], github: '', demo: '', cat: 'AI/ML', video: '' });
//   };

//   const handleEditProject = () => {
//     const techArray = typeof editingProject.tech === 'string' 
//       ? editingProject.tech.split(',').map(t => t.trim())
//       : editingProject.tech;
    
//     const mediaArray = [...(editingProject.media || [])];
//     if (editingProject.video && editingProject.video.trim() !== '') {
//       if (!mediaArray.includes(editingProject.video.trim())) {
//         mediaArray.push(editingProject.video.trim());
//       }
//     }
    
//     setProjects(projects.map(p => 
//       p.id === editingProject.id 
//         ? { ...editingProject, tech: techArray, media: mediaArray }
//         : p
//     ));
//     setEditingProject(null);
//   };

//   const handleDeleteProject = (id) => {
//     if (window.confirm('Voulez-vous vraiment supprimer ce projet ?')) {
//       setProjects(projects.filter(p => p.id !== id));
//     }
//   };

//   const cats = ["All", ...new Set(projects.map(p => p.cat))];
//   const filtered = filter === "All" ? projects : projects.filter(p => p.cat === filter);

//   const renderMedia = (project) => {
//     if (!project?.media?.length) {
//       return (
//         <img
//           src={project.img}
//           alt={project.title}
//           className="w-full h-96 object-cover border-b-2 border-cyan-500/30"
//         />
//       );
//     }

//     const allImages = project.media.filter(file => {
//       if (file instanceof File) return file.type.startsWith("image/");
//       if (typeof file === "string") return !file.includes("youtube") && !file.endsWith(".mp4") && !file.includes("dropbox");
//       return false;
//     });

//     const videos = project.media.filter(file => {
//       if (file instanceof File) return file.type.startsWith("video/");
//       if (typeof file === "string") return file.includes("youtube") || file.endsWith(".mp4") || file.includes("dropbox");
//       return false;
//     });

//     return (
//       <div className="space-y-0">
//         {allImages.length > 0 && (
//           <ImageCarousel 
//             images={allImages.map(file => file instanceof File ? URL.createObjectURL(file) : file)}
//             currentIndex={currentImageIndex}
//             setCurrentIndex={setCurrentImageIndex}
//           />
//         )}
        
//         {videos.map((file, index) => {
//           if (file instanceof File) {
//             return (
//               <video key={index} controls className="w-full h-96 object-cover bg-black border-b-2 border-cyan-500/30">
//                 <source src={URL.createObjectURL(file)} type={file.type} />
//               </video>
//             );
//           } else if (typeof file === "string") {
//             if (file.includes("youtube")) {
//               return (
//                 <iframe
//                   key={index}
//                   src={file.replace("watch?v=", "embed/")}
//                   className="w-full h-96 border-b-2 border-cyan-500/30"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               );
//             } else if (file.endsWith(".mp4") || file.includes("dropbox")) {
//               return (
//                 <video key={index} controls className="w-full h-96 object-cover bg-black border-b-2 border-cyan-500/30">
//                   <source
//                     src={file.replace("www.dropbox.com", "dl.dropboxusercontent.com").replace("?dl=0", "")}
//                     type="video/mp4"
//                   />
//                 </video>
//               );
//             }
//           }
//           return null;
//         })}
//       </div>
//     );
//   };

//   return (
//     <div className="font-mono bg-black text-green-400 min-h-screen relative overflow-hidden">
//       {/* Animated Grid Background */}
//       <div className="fixed inset-0 opacity-10 pointer-events-none">
//         <div className="absolute inset-0" style={{
//           backgroundImage: 'linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)',
//           backgroundSize: '50px 50px'
//         }}></div>
//       </div>

//       {/* Cursor Glow Effect */}
//       <div 
//         className="fixed w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-300 z-0"
//         style={{
//           left: mousePos.x - 192,
//           top: mousePos.y - 192
//         }}
//       ></div>

//       {/* Header */}
//       <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-xl border-b-2 border-cyan-500/30' : 'bg-transparent'}`}>
//         <nav className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <Terminal className="text-cyan-500" size={28} />
//               <span className="text-xl font-bold">
//                 <span className="text-cyan-500">[</span>
//                 <span className="text-green-400">DATA_SCIENTIST</span>
//                 <span className="text-cyan-500">]</span>
//               </span>
//             </div>
//             <div className="hidden md:flex items-center space-x-1">
//               {['accueil', 'apropos', 'competences', 'projets'].map((i, idx) => (
//                 <button 
//                   key={i} 
//                   onClick={() => scroll(i)} 
//                   className="px-4 py-2 text-green-400 hover:text-cyan-500 hover:bg-cyan-500/10 transition-all border-2 border-transparent hover:border-cyan-500/50 font-bold uppercase text-sm"
//                 >
//                   <span className="text-cyan-500 mr-1">[{idx + 1}]</span>
//                   {i === 'apropos' ? 'About' : i === 'competences' ? 'Skills' : i}
//                 </button>
//               ))}
//               {/* {!isAdmin ? (
//                 <button 
//                   onClick={() => setShowLogin(true)} 
//                   className="p-2 text-green-400 hover:text-cyan-500 border-2 border-cyan-500/50 hover:bg-cyan-500/10 transition-all ml-4"
//                 >
//                   <Lock size={20} />
//                 </button>
//               ) : (
//                 <button 
//                   onClick={() => setIsAdmin(false)} 
//                   className="p-2 text-red-400 hover:text-red-500 border-2 border-red-500/50 hover:bg-red-500/10 transition-all ml-4"
//                 >
//                   <LogOut size={20} />
//                 </button>
//               )} */}
//             </div>
//             <button 
//               onClick={() => setIsOpen(!isOpen)} 
//               className="md:hidden text-cyan-500"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </nav>
//       </header>

//       {/* Login Modal */}
//       {showLogin && (
//         <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
//           <div className="bg-black border-2 border-cyan-500 p-8 max-w-md w-full shadow-[0_0_50px_rgba(0,255,255,0.3)]">
//             <h3 className="text-2xl font-bold mb-6 text-cyan-500 flex items-center gap-2">
//               <Terminal size={24} />
//               ADMIN_ACCESS
//             </h3>
//             <input
//               type="password"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               onKeyPress={e => e.key === 'Enter' && handleLogin()}
//               className="w-full px-4 py-3 bg-black border-2 border-cyan-500/50 text-green-400 focus:outline-none focus:border-cyan-500 mb-6 font-mono"
//               placeholder="ENTER_PASSWORD"
//             />
//             <div className="flex gap-3">
//               <button 
//                 onClick={handleLogin} 
//                 className="flex-1 bg-cyan-500/20 border-2 border-cyan-500 text-cyan-500 py-3 font-bold hover:bg-cyan-500/30 transition-all"
//               >
//                 CONNECT
//               </button>
//               <button 
//                 onClick={() => { setShowLogin(false); setPassword(''); }} 
//                 className="flex-1 bg-red-500/20 border-2 border-red-500 text-red-500 py-3 font-bold hover:bg-red-500/30 transition-all"
//               >
//                 ABORT
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Project Detail Modal */}
//       {selectedProject && (
//         <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
//           <div className="bg-black border-2 border-cyan-500 max-w-5xl w-full shadow-[0_0_50px_rgba(0,255,255,0.3)] my-8">
//             <div className="relative">
//               {renderMedia(selectedProject)}
//               <button 
//                 onClick={() => setSelectedProject(null)} 
//                 className="absolute top-4 left-4 p-2 bg-black/90 border-2 border-red-500 text-red-500 hover:bg-red-500/20 transition-all"
//               >
//                 <X size={24} />
//               </button>
//             </div>
//             <div className="p-8 border-t-2 border-cyan-500/30">
//               <div className="flex items-start justify-between mb-6">
//                 <h2 className="text-3xl font-bold text-cyan-500 flex-1 uppercase tracking-wider">{selectedProject.title}</h2>
//                 <span className="px-4 py-2 bg-cyan-500/20 border-2 border-cyan-500 text-cyan-500 text-sm font-bold uppercase">
//                   {selectedProject.cat}
//                 </span>
//               </div>
//               <p className="text-green-400 text-lg mb-6 leading-relaxed font-sans">{selectedProject.fullDesc}</p>
//               <div className="flex flex-wrap gap-2 mb-8">
//                 {selectedProject.tech.map((t, i) => (
//                   <span 
//                     key={i} 
//                     className="px-3 py-1 bg-black border border-cyan-500/50 text-cyan-400 font-mono text-sm hover:bg-cyan-500/10 transition-all"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex gap-4">
//                 {selectedProject.github && (
//                   <a 
//                     href={selectedProject.github} 
//                     target="_blank" 
//                     rel="noopener noreferrer" 
//                     className="flex items-center gap-2 px-6 py-3 bg-green-500/20 border-2 border-green-500 text-green-400 font-bold hover:bg-green-500/30 transition-all uppercase"
//                   >
//                     <Github size={20} /> GitHub
//                   </a>
//                 )}
//                 {selectedProject.demo && (
//                   <a 
//                     href={selectedProject.demo} 
//                     target="_blank" 
//                     rel="noopener noreferrer" 
//                     className="flex items-center gap-2 px-6 py-3 bg-cyan-500/20 border-2 border-cyan-500 text-cyan-400 font-bold hover:bg-cyan-500/30 transition-all uppercase"
//                   >
//                     <ExternalLink size={20} /> Demo
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Add/Edit Project Modal */}
//       {(showAddModal || editingProject) && (
//         <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
//           <div className="bg-black border-2 border-cyan-500 p-8 max-w-2xl w-full shadow-[0_0_50px_rgba(0,255,255,0.3)] my-8">
//             <h3 className="text-2xl font-bold mb-6 text-cyan-500 uppercase">
//               {editingProject ? 'EDIT_PROJECT' : 'ADD_PROJECT'}
//             </h3>
//             <div className="space-y-4">
//               <input 
//                 type="text" 
//                 placeholder="TITLE" 
//                 value={editingProject ? editingProject.title : newProject.title} 
//                 onChange={e => editingProject ? setEditingProject({...editingProject, title: e.target.value}) : setNewProject({...newProject, title: e.target.value})} 
//                 className="w-full px-4 py-3 bg-black border-2 border-cyan-500/50 text-green-400 focus:outline-none focus:border-cyan-500 font-mono" 
//               />
//               <input 
//                 type="text" 
//                 placeholder="SHORT_DESCRIPTION" 
//                 value={editingProject ? editingProject.desc : newProject.desc} 
//                 onChange={e => editingProject ? setEditingProject({...editingProject, desc: e.target.value}) : setNewProject({...newProject, desc: e.target.value})} 
//                 className="w-full px-4 py-3 bg-black border-2 border-cyan-500/50 text-green-400 focus:outline-none focus:border-cyan-500 font-mono" 
//               />
//               <textarea 
//                 placeholder="FULL_DESCRIPTION" 
//                 value={editingProject ? editingProject.fullDesc : newProject.fullDesc} 
//                 onChange={e => editingProject ? setEditingProject({...editingProject, fullDesc: e.target.value}) : setNewProject({...newProject, fullDesc: e.target.value})} 
//                 rows="4" 
//                 className="w-full px-4 py-3 bg-black border-2 border-cyan-500/50 text-green-400 focus:outline-none focus:border-cyan-500 font-mono" 
//               />
//               <input 
//                 type="text" 
//                 placeholder="TECHNOLOGIES (comma separated)" 
//                 value={editingProject ? (Array.isArray(editingProject.tech) ? editingProject.tech.join(', ') : editingProject.tech) : newProject.tech} 
//                 onChange={e => editingProject ? setEditingProject({...editingProject, tech: e.target.value}) : setNewProject({...newProject, tech: e.target.value})} 
//                 className="w-full px-4 py-3 bg-black border-2 border-cyan-500/50 text-green-400 focus:outline-none focus:border-cyan-500 font-mono" 
//               />
//               <input 
//                 type="text" 
//                 placeholder="COVER_IMAGE_URL" 
//                 value={editingProject ? editingProject.img : newProject.img} 
//                 onChange={e => editingProject ? setEditingProject({...editingProject, img: e.target.value}) : setNewProject({...newProject, img: e.target.value})} 
//                 className="w-full px-4 py-3 bg-black border-2 border-cyan-500/50 text-green-400 focus:outline-none focus:border-cyan-500 font-mono" 
//               />
              
//               <div className="border-2 border-dashed border-cyan-500/50 p-6">
//                 <label className="block text-cyan-400 mb-2 font-bold uppercase">UPLOAD_MEDIA</label>
//                 <input
//                   type="file"
//                   accept="image/*,video/*"
//                   multiple
//                   onChange={e => {
//                     const files = Array.from(e.target.files);
//                     if (editingProject) {
//                       setEditingProject({ ...editingProject, media: [...(editingProject.media || []), ...files] });
//                     } else {
//                       setNewProject({ ...newProject, media: [...(newProject.media || []), ...files] });
//                     }
//                   }}
//                   className="w-full text-green-400"
//                 />
//                 {((editingProject?.media?.length > 0) || (newProject?.media?.length > 0)) && (
//                   <div className="mt-3 px-3 py-2 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 text-sm font-mono">
//                     [{(editingProject?.media || newProject?.media || []).length}] FILES_SELECTED
//                   </div>
//                 )}
//               </div>
              
//               <input 
//                 type="text" 
//                 placeholder="VIDEO_URL (optional)" 
//                 value={editingProject ? (editingProject.video || '') : (newProject.video || '')} 
//                 onChange={e => editingProject ? setEditingProject({...editingProject, video: e.target.value}) : setNewProject({...newProject, video: e.target.value})} 
//                 className="w-full px-4 py-3 bg-black border-2 border-cyan-500/50 text-green-400 focus:outline-none focus:border-cyan-500 font-mono" 
//               />
//               <input 
//                 type="text" 
//                 placeholder="GITHUB_LINK" 
//                 value={editingProject ? editingProject.github : newProject.github} 
//                 onChange={e => editingProject ? setEditingProject({...editingProject, github: e.target.value}) : setNewProject({...newProject, github: e.target.value})} 
//                 className="w-full px-4 py-3 bg-black border-2 border-cyan-500/50 text-green-400 focus:outline-none focus:border-cyan-500 font-mono" 
//               />
//               <input 
//                 type="text" 
//                 placeholder="DEMO_LINK (optional)" 
//                 value={editingProject ? editingProject.demo : newProject.demo} 
//                 onChange={e => editingProject ? setEditingProject({...editingProject, demo: e.target.value}) : setNewProject({...newProject, demo: e.target.value})} 
//                 className="w-full px-4 py-3 bg-black border-2 border-cyan-500/50 text-green-400 focus:outline-none focus:border-cyan-500 font-mono" 
//               />
//               <select 
//                 value={editingProject ? editingProject.cat : newProject.cat} 
//                 onChange={e => editingProject ? setEditingProject({...editingProject, cat: e.target.value}) : setNewProject({...newProject, cat: e.target.value})} 
//                 className="w-full px-4 py-3 bg-black border-2 border-cyan-500/50 text-green-400 focus:outline-none focus:border-cyan-500 font-mono font-bold"
//               >
//                 <option value="AI/ML">AI/ML</option>
//                 <option value="Data Analytics">Data Analytics</option>
//                 <option value="Desktop App">Desktop App</option>
//                 <option value="Web App">Web App</option>
//                 <option value="Mobile App">Mobile App</option>
//                 <option value="ERP & Cloud">ERP & Cloud</option>
//               </select>
//             </div>
//             <div className="flex gap-3 mt-8">
//               <button 
//                 onClick={editingProject ? handleEditProject : handleAddProject} 
//                 className="flex-1 bg-green-500/20 border-2 border-green-500 text-green-400 py-3 font-bold hover:bg-green-500/30 transition-all uppercase"
//               >
//                 {editingProject ? 'SAVE' : 'CREATE'}
//               </button>
//               <button 
//                 onClick={() => { setShowAddModal(false); setEditingProject(null); }} 
//                 className="flex-1 bg-red-500/20 border-2 border-red-500 text-red-500 py-3 font-bold hover:bg-red-500/30 transition-all uppercase"
//               >
//                 CANCEL
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Hero Section */}
//       <section id="accueil" className="min-h-screen flex items-center justify-center relative pt-20">
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="max-w-5xl">
//             <div className="mb-8">
//               <div className="flex items-center gap-4 mb-4">
//                 <Cpu className="text-cyan-500 animate-pulse" size={48} />
//                 <span className="text-cyan-500 text-xl font-mono">SYSTEM_ONLINE</span>
//               </div>
//             </div>
            
//             <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
//   <span className="text-cyan-500 block mb-2">&gt;_ ENGINEER</span>
//   <span className="text-green-400 block">DATA SCIENCE</span>
//   <span className="flex items-center gap-4 mt-4 block">
//     <span className="text-cyan-500">&amp;</span>
//     <span className="text-green-400">ARTIFICIAL</span>
//   </span>
//   <span className="text-cyan-500 block">INTELLIGENCE</span>
// </h1>

            
//             <div className="border-l-4 border-cyan-500 pl-6 mb-8">
//               <p className="text-xl text-green-400 mb-2 font-mono">Zorkot Hassan</p>
//               {/* <p className="text-lg text-cyan-400 font-sans">
//                 Développeur Full Stack · Machine Learning · Data Analysis
//               </p> */}
//             </div>
            
//             <div className="flex gap-4 mb-12">
//               {[
//                 { I: Github, h: "https://github.com/Hassanzorkot004", l: "GIT" }, 
//                 { I: Linkedin, h: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile", l: "LINKEDIN" }, 
//                 { I: Mail, h: "hassanzorkot204@gmail.com", l: "MAIL" }
//               ].map(({ I, h, l }) => (
//                 <a 
//                   key={l}
//                   href={h} 
//                   target="_blank" 
//                   rel="noopener noreferrer" 
//                   className="p-4 bg-black border-2 border-cyan-500/50 text-cyan-500 hover:bg-cyan-500/20 hover:border-cyan-500 transition-all group"
//                 >
//                   <I size={24} className="group-hover:rotate-12 transition-transform" />
//                 </a>
//               ))}
//             </div>
            
//             <button 
//               onClick={() => scroll('projets')} 
//               className="group px-8 py-4 bg-cyan-500/20 border-2 border-cyan-500 text-cyan-500 font-bold text-lg hover:bg-cyan-500/30 transition-all uppercase flex items-center gap-3"
//             >
//               <Zap size={20} className="group-hover:animate-pulse" />
//               EXPLORE_PROJECTS
//               <span className="text-green-400">_</span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="apropos" className="py-24 relative">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-black mb-12">
//             <span className="text-cyan-500">[</span>
//             <span className="text-green-400">ABOUT</span>
//             <span className="text-cyan-500">]</span>
//           </h2>
//           <div className="max-w-4xl">
//             <div className="border-l-4 border-cyan-500 pl-6 mb-8">
//               <p className="text-lg text-green-400 mb-4 font-sans leading-relaxed">
//                 Second-year computer engineering student, specializing in Data Science and Artificial Intelligence.
// Passionate about developing innovative applications that combine AI, ML, and modern technologies.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section id="competences" className="py-24 bg-gradient-to-b from-black to-green-950/10">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-black mb-12">
//             <span className="text-cyan-500">[</span>
//             <span className="text-green-400">SKILLS</span>
//             <span className="text-cyan-500">]</span>
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
//             {[
//               { t: "AI & ML", s: ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV"], I: Cpu },
//               { t: "Web Dev", s: ["React", "Flask", "Streamlit", "Node.js"], I: Code2 },
//               { t: "Data Analytics", s: ["Power BI", "Python", "Pandas", "NumPy"], I: Activity },
//               { t: "Desktop & Mobile", s: ["JavaFX", "React Native", "Java", "MySQL"], I: Terminal },
//               { t: "Deep Learning", s: ["CNN", "MediaPipe", "Computer Vision"], I: Cpu },
//               { t: "Languages", s: ["Python", "Java", "C", "SQL", "AL"], I: Code2 },
//             ].map(({ t, s, I }) => (
//               <div 
//                 key={t} 
//                 className="bg-black border-2 border-cyan-500/50 p-6 hover:border-cyan-500 hover:bg-cyan-500/5 transition-all group"
//               >
//                 <div className="flex items-center mb-4 gap-3">
//                   <I className="text-cyan-500 group-hover:text-green-400 transition-colors" size={24} />
//                   <h3 className="text-lg font-bold text-cyan-500 uppercase">{t}</h3>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {s.map((sk, i) => (
//                     <span 
//                       key={i} 
//                       className="px-2 py-1 bg-green-500/20 border border-green-500/50 text-green-400 text-xs font-mono hover:bg-green-500/30 transition-all"
//                     >
//                       {sk}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projets" className="py-24 relative">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
//             <h2 className="text-5xl font-black">
//               <span className="text-cyan-500">[</span>
//               <span className="text-green-400">PROJECTS</span>
//               <span className="text-cyan-500">]</span>
//             </h2>
//             {isAdmin && (
//               <button 
//                 onClick={() => setShowAddModal(true)} 
//                 className="flex items-center gap-2 px-6 py-3 bg-green-500/20 border-2 border-green-500 text-green-400 font-bold hover:bg-green-500/30 transition-all uppercase"
//               >
//                 <Plus size={20} /> ADD_PROJECT
//               </button>
//             )}
//           </div>
          
//           <div className="flex flex-wrap gap-3 mb-12">
//             {cats.map(c => (
//               <button 
//                 key={c} 
//                 onClick={() => setFilter(c)} 
//                 className={`px-6 py-2 font-bold transition-all uppercase ${
//                   filter === c 
//                     ? 'bg-cyan-500/30 border-2 border-cyan-500 text-cyan-400' 
//                     : 'bg-black border-2 border-cyan-500/50 text-green-400 hover:border-cyan-500 hover:bg-cyan-500/10'
//                 }`}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filtered.map(p => (
//               <div 
//                 key={p.id} 
//                 className="group bg-black border-2 border-cyan-500/50 hover:border-cyan-500 transition-all overflow-hidden"
//               >
//                 <div className="relative overflow-hidden cursor-pointer" onClick={() => setSelectedProject(p)}>
//                   <img 
//                     src={p.img} 
//                     alt={p.title} 
//                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
//                   <span className="absolute top-3 right-3 px-3 py-1 bg-cyan-500/80 border border-cyan-300 text-black text-xs font-bold uppercase backdrop-blur-sm">
//                     {p.cat}
//                   </span>
//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                     <span className="px-4 py-2 bg-cyan-500/20 border-2 border-cyan-500 text-cyan-400 font-bold uppercase backdrop-blur-sm">
//                       VIEW_DETAILS
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-3 text-cyan-500 uppercase group-hover:text-green-400 transition-colors">
//                     {p.title}
//                   </h3>
//                   <p className="text-green-400 mb-4 text-sm font-sans line-clamp-2">{p.desc}</p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {p.tech.slice(0, 3).map((t, i) => (
//                       <span 
//                         key={i} 
//                         className="px-2 py-1 bg-green-500/20 border border-green-500/50 text-green-400 text-xs font-mono"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                     {p.tech.length > 3 && (
//                       <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 text-xs font-mono">
//                         +{p.tech.length - 3}
//                       </span>
//                     )}
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <button 
//                       onClick={() => setSelectedProject(p)} 
//                       className="flex items-center text-green-400 hover:text-cyan-500 font-mono text-sm group/link transition-colors uppercase"
//                     >
//                       <ExternalLink size={16} className="mr-2 group-hover/link:rotate-12 transition-transform" />
//                       Open
//                     </button>
//                     {isAdmin && (
//                       <div className="flex gap-2">
//                         <button 
//                           onClick={() => setEditingProject(p)} 
//                           className="p-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/30 transition-all"
//                         >
//                           <Edit2 size={16} />
//                         </button>
//                         <button 
//                           onClick={() => handleDeleteProject(p.id)} 
//                           className="p-2 bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30 transition-all"
//                         >
//                           <Trash2 size={16} />
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

      

//       {/* Footer */}
//       <footer className="border-t-2 border-cyan-500/30 bg-black py-8">
//         <div className="container mx-auto px-6 text-center">
//           <p className="mb-4 text-green-400 font-mono">
//             <span className="text-cyan-500">[</span>
//             © 2025 DATA_SCIENTIST_PORTFOLIO
//             <span className="text-cyan-500">]</span>
//           </p>
//           <div className="flex justify-center space-x-6">
//             {[
//               { I: Github, h: "https://github.com/username" }, 
//               { I: Linkedin, h: "https://linkedin.com/in/username" }, 
//               { I: Mail, h: "mailto:email@example.com" }
//             ].map(({ I, h }, i) => (
//               <a 
//                 key={i} 
//                 href={h} 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="text-cyan-500 hover:text-green-400 transition-colors hover:scale-110"
//               >
//                 <I size={24} />
//               </a>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }








import React, { useState, useEffect } from 'react';
import './App.css';

const initialProjects = [
  {
    id: 1,
    title: "Carpooling System",
    desc: "JavaFX application connecting drivers and passengers to share rides.",
    fullDesc: "A comprehensive carpooling platform that allows users to create ride postings, browse available trips, manage their schedules, and ultimately reduce transportation costs and environmental impact.",
    tech: ["JavaFX", "Java", "MySQL", "Scene Builder"],
    img: "https://startaride.com/wp-content/uploads/2024/05/2-2-1024x543-1.png",
    media: [
      "https://image.noelshack.com/fichiers/2026/06/7/1770559417-capture-d-cran-2025-05-14-024800.png",
      "https://www.noelshack.com/2026-06-7-1770559417-capture-d-cran-2025-05-14-024820.png",
      "https://image.noelshack.com/fichiers/2026/06/7/1770559544-capture-d-cran-2025-05-14-025018.png",
      "https://image.noelshack.com/fichiers/2026/06/7/1770559544-capture-d-cran-2025-05-14-025225.png",
      "https://image.noelshack.com/fichiers/2026/06/7/1770559585-capture-d-cran-2025-05-14-025422.png"
    ],
    github: "https://github.com/Hassanzorkot004/project.git",
    demo: null,
    cat: "Desktop App"
  },
  {
    id: 2,
    title: "World Cup Dashboard",
    desc: "Interactive Power BI dashboard deployed with Flask to analyze performance and statistics.",
    fullDesc: "A web application that presents an interactive Power BI dashboard for analyzing World Cup performances. Users can explore datasets, visualize trends, and gain personalized insights on team and player statistics.",
    tech: ["Power BI", "Flask", "Python", "Data Visualization"],
    img: "https://historyuk.s3.eu-west-2.amazonaws.com/s3fs-public/styles/768x432/public/2022-11/shutterstock_2190840355-min.jpg?itok=Lb1JcauY",
    media: ["https://www.dropbox.com/scl/fi/b6j2unctenmnbhjykvn00/Enregistrement-2025-10-20-222551.mp4?rlkey=ikc5o89ekwoemwc78ntw2n8t1&e=1&st=kow0lipl&dl=0"],
    github: "https://github.com/Hassanzorkot004/world-cup-power-bi-dashboard.git",
    demo: null,
    cat: "Data Analytics"
  },
  {
    id: 3,
    title: "Sign Language Translator",
    desc: "Real-time sign language recognition and translation into text using a webcam.",
    fullDesc: "A Python project using Streamlit where the webcam captures sign language gestures and instantly translates them into text via a deep learning model. Designed to assist communication for the hearing impaired, initially trained on a limited vocabulary.",
    tech: ["Python", "Streamlit", "OpenCV", "TensorFlow", "MediaPipe"],
    img: "https://www.shutterstock.com/image-photo/deaf-alphabet-letter-hello-by-600nw-2495650585.jpg",
    media: ["https://www.dropbox.com/scl/fi/9tcs2iz8oqzxh1ni9s0my/Enregistrement-2026-02-09-031953.mp4?rlkey=8k1ixy6ch8wpglhidii8nz8n8&st=gphwn9ob&dl=0"],
    github: "https://github.com/Hassanzorkot004/SigndetectionProject.git",
    demo: null,
    cat: "AI/ML"
  },
  {
    id: 4,
    title: "GPS Fleet Tracking System",
    desc: "Business Central extension enabling real-time GPS fleet monitoring.",
    fullDesc: "Developed an extension for Microsoft Dynamics 365 Business Central that tracks delivery trucks in real-time via GPS. It centralizes fleet positions, trip histories, and allows managers to efficiently handle logistics directly from the ERP interface.",
    tech: ["Microsoft AL", "Dynamics 365", "Python", "JavaScript", "GPS API", "Cloudflare"],
    img: "https://b2m-it.com/wp-content/uploads/2024/09/B2M-6.png",
    media: ["https://i.postimg.cc/90Xkfzxc/BC.png"],
    github: null,
    demo: null,
    cat: "ERP & Cloud"
  },
  {
    id: 5,
    title: "Eye Disease Recognition",
    desc: "AI-powered application to detect eye diseases from retinal images.",
    fullDesc: "A deep learning model deployed in a React app that predicts one of three eye diseases—Cataract, Glaucoma, or Retinopathy—based on uploaded retinal images. Designed to assist early diagnosis and support ophthalmologists in clinical decision-making.",
    tech: ["Python", "React", "TensorFlow"],
    img: "https://img.passeportsante.net/1200x675/2021-05-03/i103776-ophtalmologie.jpg",
    media: ["https://www.dropbox.com/scl/fi/ow8qx6ncf33mpkl7i5lc4/Enregistrement-2026-02-08-153753.mp4?rlkey=apu60dr1jto3a1agja1h2f57a&st=lg6fhh86&dl=0"],
    github: "https://github.com/Hassanzorkot004/Eyediseasedetection.git",
    demo: null,
    cat: "Deep Learning"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const categories = ["All", "Desktop App", "Data Analytics", "AI/ML", "ERP & Cloud", "Deep Learning"];

  const filteredProjects = selectedCategory === "All" 
    ? initialProjects 
    : initialProjects.filter(p => p.cat === selectedCategory);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Hassan Zorkot</div>
          
          {/* Hamburger Menu */}
          <button 
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Links */}
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Hassan Zorkot</h1>
          <p className="hero-subtitle">Software Engineer & Data Analyst</p>
          <p className="hero-description">
            Passionate about building innovative solutions with AI, Web Development, and Data Analytics
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View Projects
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate software engineer with expertise in full-stack development, 
                AI/ML, and data analytics. I love creating solutions that make a real impact.
              </p>
              <p>
                My experience spans across desktop applications, web development, ERP systems, 
                and cutting-edge deep learning projects.
              </p>
              <div className="skills">
                <h3>Technical Skills</h3>
                <div className="skills-grid">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">TensorFlow</span>
                  <span className="skill-tag">Power BI</span>
                  <span className="skill-tag">MySQL</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Dynamics 365</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
                <div className="project-image">
                  <img src={project.img} alt={project.title} />
                  <div className="project-overlay">
                    <span>View Details</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-tech">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p>Interested in working together? Let's connect!</p>
            <div className="contact-links">
              <a href="https://github.com/Hassanzorkot004" className="contact-btn" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="mailto:hassan.zorkot@example.com" className="contact-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email
              </a>
              <a href="https://linkedin.com/in/hassanzorkot" className="contact-btn" target="_blank" rel="noopener noreferrer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Hassan Zorkot. All rights reserved.</p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <span className="category-badge">{selectedProject.cat}</span>
            </div>

            <div className="modal-body">
              {selectedProject.media && selectedProject.media.length > 0 && (
                <div className="modal-media">
                  {selectedProject.media[currentMediaIndex].includes('.mp4') ? (
                    <video controls key={currentMediaIndex}>
                      <source src={selectedProject.media[currentMediaIndex]} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={selectedProject.media[currentMediaIndex]} alt={selectedProject.title} />
                  )}
                  
                  {selectedProject.media.length > 1 && (
                    <div className="media-nav">
                      <button 
                        onClick={() => setCurrentMediaIndex(prev => prev === 0 ? selectedProject.media.length - 1 : prev - 1)}
                        className="media-nav-btn"
                      >
                        ‹
                      </button>
                      <span>{currentMediaIndex + 1} / {selectedProject.media.length}</span>
                      <button 
                        onClick={() => setCurrentMediaIndex(prev => prev === selectedProject.media.length - 1 ? 0 : prev + 1)}
                        className="media-nav-btn"
                      >
                        ›
                      </button>
                    </div>
                  )}
                </div>
              )}

              <div className="modal-description">
                <h3>Description</h3>
                <p>{selectedProject.fullDesc}</p>
              </div>

              <div className="modal-tech">
                <h3>Technologies</h3>
                <div className="tech-tags">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-links">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View on GitHub
                  </a>
                )}
                {selectedProject.demo && (
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;