'use client';

import { motion } from "framer-motion";
import '../../styles/globals.css';

interface SubjectsPageProps {
  onBack: () => void;
  selectedClass: string | null;
}

const subjects = [
  { title: "🧮 Mathematics", description: "Algebra, Geometry, Calculus and more" },
  { title: "🔬 Science", description: "Physics, Chemistry, Biology fundamentals" },
  { title: "📜 Hindi", description: "Language, literature and composition" },
  { title: "📖 English", description: "Grammar, writing and comprehension" },
  { title: "🕉️ Sanskrit", description: "Ancient language and scriptures" },
  { title: "🌍 Social Science", description: "History, Geography, Civics" },
  { title: "🧠 General Knowledge", description: "Current affairs and basic knowledge" },
  { title: "🎨 Drawing", description: "Art and creative expression" },
  { title: "🎵 Music", description: "Vocal and instrumental training" },
  { title: "💻 Computer Science", description: "Coding and digital literacy" },
  { title: "🏃 Physical Education", description: "Sports and fitness activities" },
];

export default function SubjectsPage({ onBack, selectedClass }: SubjectsPageProps) {
  return (
    <div className="education-page">
      <button onClick={onBack} className="back-button">
        ← Back to Classes
      </button>
      
      <h2 className="education-title">Subjects for {selectedClass}</h2>
      <div className="education-grid">
        {subjects.map((subject, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="education-card"
          >
            <div className="card-container">
              <div className="card-header">
                <h3 className="card-title">{subject.title}</h3>
              </div>
              <div className="card-content">
                <p className="card-description">{subject.description}</p>
                <div>
                  <button className="action-button resources-button">
                    Resources
                  </button>
                  <button className="action-button practice-button">
                    Practice
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}