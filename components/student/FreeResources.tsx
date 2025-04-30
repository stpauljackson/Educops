 
// const resources = [
//   { title: "📚 Study Materials", description: "Download PDFs, video lessons & notes." },
//   { title: "📝 Test Series", description: "Practice with mock exams & quizzes." },
//   { title: "🎯 Career Guidance", description: "Explore different career paths & expert advice." },
//   { title: "🧠 Psychometric Tests", description: "Understand your strengths with free tests." },
// ];

// import { motion } from "framer-motion";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// export function FreeResources() {
//   return (
//     <div className="py-20 px-8 bg-white text-blue-900">
//       <h2 className="text-4xl font-bold text-center mb-12">Free Resources</h2>
//       <div className="flex flex-col items-center gap-8 px-4">
//         {resources.map((resource, index) => (
//           <motion.div 
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.6 }}
//             className="w-full max-w-lg px-4"
//           >
//             <Card
//               className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1"
//             >
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-primary">{resource.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-muted-foreground">{resource.description}</p>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ClassesPage from './classes';
import SubjectsPage from './subjects';
import '../../styles/globals.css';

export function FreeResources() {
  const [currentView, setCurrentView] = useState<'resources' | 'classes' | 'subjects'>('resources');
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const resources = [
    { 
      title: "📚 Study Materials", 
      description: "Download PDFs, video lessons & notes.",
      onClick: () => setCurrentView('classes')
    },
    { title: "📝 Test Series", description: "Practice with mock exams & quizzes." },
    { title: "🎯 Career Guidance", description: "Explore different career paths & expert advice." },
    { title: "🧠 Psychometric Tests", description: "Understand your strengths with free tests." },
  ];

  const handleClassSelect = (className: string) => {
    setSelectedClass(className);
    setCurrentView('subjects');
  };

  const handleBack = () => {
    setCurrentView('resources');
  };

  return (
    <div className="education-page">
      {currentView === 'resources' && (
        <>
          <h2 className="education-title">Free Resources</h2>
          <div className="education-grid">
            {resources.map((resource, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="education-card"
              >
                <div 
                  className={`card-container ${resource.onClick ? 'cursor-pointer' : ''}`}
                  onClick={resource.onClick}
                >
                  <div className="card-header">
                    <h3 className="card-title">{resource.title}</h3>
                  </div>
                  <div className="card-content">
                    <p className="card-description">{resource.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}

      {currentView === 'classes' && (
        <ClassesPage onBack={handleBack} onClassSelect={handleClassSelect} />
      )}

      {currentView === 'subjects' && (
        <SubjectsPage onBack={handleBack} selectedClass={selectedClass} />
      )}
    </div>
  );
}