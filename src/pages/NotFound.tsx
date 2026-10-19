import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
export function NotFound(){return <section className="section not-found"><p className="eyebrow">404 / OFF THE MAP</p><h1>This page took<br/>a different route.</h1><Link className="button primary" to="/">Back to home <ArrowLeft size={18}/></Link></section>}
