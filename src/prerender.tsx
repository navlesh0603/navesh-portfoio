import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import Home, { ServicesSection } from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import { NotFound } from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import { ContactBlock } from './components/UI'
import { projects } from './data/projects'
export { projects }
export function render(path:string){return renderToString(<MotionConfig reducedMotion="always"><StaticRouter location={path}><Routes><Route path="/" element={<Home/>}/><Route path="/projects/:slug" element={<ProjectPage/>}/><Route path="/services" element={<><ServicesSection/><ContactBlock/></>}/><Route path="/contact" element={<ContactBlock/>}/><Route path="*" element={<NotFound/>}/></Routes></StaticRouter></MotionConfig>)}
