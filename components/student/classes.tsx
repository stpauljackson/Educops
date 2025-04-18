'use client';

import { motion } from "framer-motion";
import '../../styles/globals.css';

interface ClassesPageProps {
  onBack: () => void;
  onClassSelect: (className: string) => void;
}

const classGroups = [
  {
    title: "Primary School",
    classes: [
      { title: "Class 1", description: "Basic literacy and numeracy skills" },
      { title: "Class 2", description: "Developing foundational knowledge" },
      { title: "Class 3", description: "Building core competencies" },
      { title: "Class 4", description: "Expanding subject knowledge" },
      { title: "Class 5", description: "Preparing for middle school" },
    ]
  },
  {
    title: "Middle School",
    classes: [
      { title: "Class 6", description: "Introduction to advanced concepts" },
      { title: "Class 7", description: "Developing critical thinking" },
      { title: "Class 8", description: "Board exam preparation begins" },
    ]
  },
  {
    title: "High School",
    classes: [
      { title: "Class 9", description: "Building strong fundamentals" },
      { title: "Class 10", description: "Board exam preparation" },
      { title: "Class 11 (Science)", description: "Specialized science stream" },
      { title: "Class 11 (Commerce)", description: "Business and economics focus" },
      { title: "Class 11 (Arts)", description: "Humanities and creative arts" },
      { title: "Class 12 (Science)", description: "Medical/Engineering preparation" },
      { title: "Class 12 (Commerce)", description: "Professional course foundation" },
      { title: "Class 12 (Arts)", description: "Higher education in humanities" },
    ]
  }
];

export default function ClassesPage({ onBack, onClassSelect }: ClassesPageProps) {
  return (
    <div className="education-page">
      <button onClick={onBack} className="back-button">
        ← Back to Resources
      </button>
      
      <h2 className="education-title">Select Your Class</h2>
      <div className="education-grid">
        {classGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="class-group">
            <h3 className="class-group-title">{group.title}</h3>
            {group.classes.map((classItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="education-card"
              >
                <div 
                  className="card-container cursor-pointer"
                  onClick={() => onClassSelect(classItem.title)}
                >
                  <div className="card-header">
                    <h3 className="card-title">{classItem.title}</h3>
                  </div>
                  <div className="card-content">
                    <p className="card-description">{classItem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}