import React, { useState } from 'react'
import { user } from '../data.json'

import { motion } from 'framer-motion'
import Typed from 'react-typed'

const AboutMe = () => {
  const [userData] = useState(user)
  const [value] = useState(0)
  const { name, profession, linkSocial, description } = userData[value]
  return (
    <div className=" md:pt-48 pt-96">
      <div className=" text-start  ">
        <h4 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-withe mb-8">
          Bienvenido a mi porfolio
        </h4>
        <h1 className="text-7xl font-black mt-2 text-white">
          Mi nombre es
          <Typed
            className="ml-5 font-black text-cyan-400"
            strings={[`${name}`]}
            typeSpeed={150}
            backSpeed={100}
          />
        </h1>
        <p className="text-4xl mt-5">
          <span className="text-slate-100 font-semibold"> {profession}</span>
        </p>
        <div className="flex justify-start mt-8 gap-10 text-3xl text-slate-400">
          <a
            className=""
            href={`${linkSocial.gitHub}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github text-4xl text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-cyan-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-slate-900 hover:to-purple-200 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110"></i>
          </a>
          <a
            className=""
            href={`${linkSocial.linkedIn}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in text-4xl text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-cyan-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-slate-900 hover:to-purple-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"></i>
          </a>

          <a
            className=""
            href={`${linkSocial.instagram}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram text-4xl  text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-cyan-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-slate-900 hover:to-purple-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"></i>
          </a>
        </div>
        <motion.div
          className="z-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p className="mt-5 w-[600px] text-xl text-slate-300 ">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutMe
