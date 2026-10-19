import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { ArrowUpRight, Download } from 'lucide-react'
export function Reveal({children,className=''}:{children:ReactNode;className?:string}) {return <motion.div className={className} initial={{opacity:1,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.08}} transition={{duration:.55}}>{children}</motion.div>}
export function SectionHeading({number,kicker,title,text}:{number:string;kicker:string;title:string;text?:string}) {return <div className="section-heading"><div><p className="eyebrow"><span>{number}</span> {kicker}</p><h2>{title}</h2></div>{text&&<p>{text}</p>}</div>}
export function Resume({compact=false}:{compact?:boolean}) {return <a className={compact?'resume-link':'button secondary'} href="/navlesh-todkar-resume.docx" download>Résumé <Download size={15}/>{!compact&&<small>DOCX</small>}</a>}
export function ContactBlock(){return <section id="contact" className="contact section"><Reveal><p className="eyebrow">LET’S MAKE SOMETHING USEFUL</p><h2>Have a challenge?<br/><span>Let’s build the solution.</span></h2><a className="email-link" href="mailto:Navlesh0603@gmail.com">Navlesh0603@gmail.com <ArrowUpRight/></a><p>For mobile engineering roles, connected-device projects,<br className="desktop-only"/> and thoughtful freelance collaborations.</p><Resume/></Reveal></section>}
