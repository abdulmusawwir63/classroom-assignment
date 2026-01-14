import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'

const Home = () => {
  const navigate = useNavigate()

  const classes = [
    {
      id: 1,
      title: 'BQ 5.0 Web II ReactJS',
      teacher: 'Basit Hussain',
      code: 'B',
      bgColor: '#4285F4',
      icon: 'A'
    },
    {
      id: 2,
      title: 'PIA (8-10)',
      subject: 'Digital Marketing',
      teacher: 'Abdul Nafay',
      code: 'P',
      bgColor: '#34A853',
      icon: 'A'
    },
    {
      id: 3,
      title: 'Bano Qabil Boys - WEB Boys',
      teacher: 'Syed Ibad',
      code: 'B',
      bgColor: '#1E88E5',
      icon: 'A'
    },
    {
      id: 4,
      title: 'BQ 4.0 | GDE | Male | 4...',
      teacher: 'Armughan Sarib',
      code: 'B',
      bgColor: '#455A64',
      icon: 'A'
    },
  
  ]

  return (
    <div className="home-layout">
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <div className="nav-item active">
            <span className="nav-icon">🏠</span>
            <span>Home</span>
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
            {classes.map(cls => (
              <div 
                key={cls.id} 
                className="enrolled-item"
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
        <section className="classes-grid">
          <h2>Your classes</h2>
          <div className="cards-container">
            {classes.map(cls => (
              <div 
                key={cls.id} 
                className="class-card" 
                style={{ borderTopColor: cls.bgColor }}
                onClick={() => navigate(`/class/${cls.id}`)}
              >
                <div className="card-header" style={{ backgroundColor: cls.bgColor }}>
                  <h3>{cls.title}</h3>
                  {cls.subject && <p className="card-subject">{cls.subject}</p>}
                  <div className="card-avatar">{cls.icon}</div>
                </div>
                <div className="card-body">
                  <p className="card-teacher">{cls.teacher}</p>
                </div>
                <div className="card-footer">
                  <button className="card-action">📋</button>
                  <button className="card-action">📁</button>
                  <button className="card-action">⋮</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
