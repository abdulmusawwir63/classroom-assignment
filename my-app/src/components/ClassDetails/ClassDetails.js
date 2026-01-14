import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ClassDetails.css'

const ClassDetails = () => {
  const { classId } = useParams()
  const navigate = useNavigate()

  const classesData = [
    {
      id: 1,
      title: 'BQ 5.0 Web II ReactJS',
      teacher: 'Basit Hussain',
      code: 'B',
      bgColor: '#4285F4',
      icon: 'A',
      description: 'Learn advanced ReactJS concepts including hooks, state management, and component optimization.'
    },
    {
      id: 2,
      title: 'PIA (8-10)',
      subject: 'Digital Marketing',
      teacher: 'Abdul Nafay',
      code: 'P',
      bgColor: '#34A853',
      icon: 'A',
      description: 'Comprehensive digital marketing course covering SEO, social media, and content strategy.'
    },
    {
      id: 3,
      title: 'Bano Qabil Boys - WEB Boys',
      teacher: 'Syed Ibad',
      code: 'B',
      bgColor: '#1E88E5',
      icon: 'A',
      description: 'Web development fundamentals for beginners with hands-on projects.'
    },
    {
      id: 4,
      title: 'BQ 4.0 | GDE | Male | 4...',
      teacher: 'Armughan Sarib',
      code: 'B',
      bgColor: '#455A64',
      icon: 'A',
      description: 'Advanced topics in web development and software engineering.'
    },
  ]

  const currentClass = classesData.find(cls => cls.id === parseInt(classId))

  if (!currentClass) {
    return (
      <div className="class-details">
        <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
        <p>Class not found</p>
      </div>
    )
  }

  return (
    <div className="class-details-layout">
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <div className="nav-item">
            <span className="nav-icon">🏠</span>
            <span onClick={() => navigate('/')}>Home</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">📅</span>
            <span>Calendar</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">✓</span>
            <span>To do</span>
          </div>
        </nav>

        <div className="sidebar-section">
          <h3>Enrolled</h3>
          <div className="enrolled-list">
            {classesData.map(cls => (
              <div 
                key={cls.id} 
                className={`enrolled-item ${currentClass.id === cls.id ? 'active' : ''}`}
                onClick={() => navigate(`/class/${cls.id}`)}
              >
                <span className="enrolled-code">{cls.code}</span>
                <div className="enrolled-info">
                  <div className="enrolled-title">{cls.title}</div>
                  {cls.subject && <div className="enrolled-subject">{cls.subject}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar-footer">
          <div className="nav-item">
            <span className="nav-icon">📂</span>
            <span>Archived classes</span>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <div className="class-header" style={{ backgroundColor: currentClass.bgColor }}>
          <h1>{currentClass.title}</h1>
          {currentClass.subject && <p className="class-subject">{currentClass.subject}</p>}
          <p className="class-teacher">Teacher: {currentClass.teacher}</p>
        </div>

        <div className="class-body">
          <section className="class-section">
            <h2>About this class</h2>
            <p>{currentClass.description}</p>
          </section>

          <section className="class-section">
            <h2>Recent Announcements</h2>
            <div className="announcement">
              <div className="announcement-header">
                <h3>Welcome to {currentClass.title}</h3>
                <span className="announcement-date">Today</span>
              </div>
              <p>This is your class workspace. Here you can find announcements, assignments, and resources.</p>
            </div>
          </section>

          <section className="class-section">
            <h2>Classwork</h2>
            <div className="classwork-section">
              <p>No assignments yet</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default ClassDetails
