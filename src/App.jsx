import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import SiteHeader from './components/SiteHeader'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import AboutWorkPage from './pages/AboutWorkPage'
import ResearchPage from './pages/ResearchPage'
import LecturingPage from './pages/LecturingPage'
import MePage from './pages/MePage'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      window.setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 50)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}

function NotFound() {
  return (
    <main className="not-found page-top">
      <p className="eyebrow">404</p>
      <h1>This page wandered off.</h1>
      <a className="text-link" href="/">Return home →</a>
    </main>
  )
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about/work" element={<AboutWorkPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/lecturing" element={<LecturingPage />} />
        <Route path="/me" element={<MePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
