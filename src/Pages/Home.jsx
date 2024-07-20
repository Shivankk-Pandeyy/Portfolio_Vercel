import "./Page.css";
import Footer from "../Component/Footer";
import G1 from "./G1.gif";
import P1 from "./p1.png";
import { motion, useScroll } from "framer-motion"
import phone from "./phone.png"
import add from "./add.png"
import mail from "./mail.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import CARD from "./CARD.pdf";
import SP from "./SP.pdf";
// eslint-disable-next-line no-unused-vars
import { useForm, ValidationError } from '@formspree/react';
const Home = () => {
    const a1=()=>toast.warning("INVALID NAME!");
    const a2=()=>toast.warning("INVALID EMAIL!");
    const a3=()=>toast.error("ALL FIELDS ARE MANDATORY!");
    const a4=()=>toast.success("MESSAGE SENT!");
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const nameRegex=/^[a-zA-Z]+[a-zA-Z]/;
    const {scrollYProgress}=useScroll();
    const [data,setData]=useState({
        name:"",
        email:"",
        message:"",
    })
    const FormData=(e)=>{
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        })
    }
    // eslint-disable-next-line no-unused-vars
    const [state,setState]=useForm("xkgwongv");
    const submitData=async(e)=>{
        e.preventDefault();
        let email=emailRegex.test(data.email);
        let name=nameRegex.test(data.name);
        if(data.name===""||data.email===""||data.message===""){
            return a3();
        }
        else if(!email){
            return a2();
        }
        else if(!name){
            return a1();
        }
        else{
            try{
                setState({
                    errors:null,
                    result:data,
                    succeeded:true,
                    submitting:true
                })
            setData({
                name:"",
                email:"",
                message:""
            })
            }
            catch(err){
                console.log(err);
            }   
            return a4();
        }
    }
return (
    <>
    <ToastContainer theme="dark"/>
    <motion.div className="top" style={{
        scaleX:scrollYProgress,
        backgroundColor:"#FFFFFF",
        position:"sticky",
        top:0,
        height:"1vh",
        width:"100%",
        transformOrigin:"left"
    }}></motion.div>
    <div className="home">
    <div className="home-2">
    <motion.div className="home-22" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:0.5}}>
    <h2>Aspiring <span>Full Stack Developer</span> | <span>Computer Science Student</span></h2>
    <h2>I am <span>Shivank Pandey</span>, a passionate and dedicated <span>Software Developer</span>.</h2>
    <h2>Your Partner in Creating Cutting-Edge <span>Web Applications</span>.</h2>
    <div className="home-button">
    <a href={SP} download="SHIVANK_PANDEY_RESUME"><button>DOWNLOAD RESUME</button></a>
    </div>
    </motion.div>
    <motion.div className="home-22" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}}>
    <img src={G1} alt="GIF"></img>
    </motion.div>
    </div>
    <motion.div className="home-1" initial={{opacity:0}} animate={{opacity:1,x:0}} transition={{duration:2,delay:2}}>
    <img src={P1} alt="LOGO AND PIC"></img>
    </motion.div>
    </div>
    <div className="abt">
    <div className="abt-heading"><h2>ABOUT ME</h2></div>
    <div className="abt-content">
    <div className="abt-edu">
    <h2>EDUCATION</h2>
    <div className="abt-edu-box">
    <h2>Vellore Institute of Technology,Vellore</h2>
    <h2>BTech in Computer Science with Specialization in Blockchain Technology | <span>2021-2025</span></h2>
    </div>
    <div className="abt-edu-box">
    <h2>Delhi Public School,Bhilai</h2>
    <h2>Senior Secondary(XII) | <span>2020-2021</span></h2>
    <h2>Secondary(X) | <span>2018-2019</span></h2>
    </div>
    <h2>SKILLS</h2>
    <div className="skills">
    <ul>
    <li><span>Front-end</span>:HTML,CSS,JavaScript,React</li>
    <li><span>Back-end</span>:Node.Js,Express.Js</li>
    <li><span>DataBase</span>:MySQL,MongoDB</li>
    <li><span>Programming Language</span>:Core Java</li>
    <li><span>Version Control</span>:Git,GitHub</li>
    <li><span>Hosting</span>:Vercel,Netlify,Render</li>
    </ul>
    </div>
    </div>
    <div className="abt-ex">
    <h2>WORK EXPERIENCE</h2>
    <div className="abt-ex-box">
    <h2>GLOBUSSOFT TECHNOLOGY | <span>Sept,2023-Oct,2023</span></h2>
    <h2> FULL STACK WEB DEVELOPER |<span> INTERN</span></h2>
    <p>Developed a website, encompassing tasks such as coding the front-end and back-end functionalities, ensuring
    user friendly navigation and implementing responsive design.</p>
    </div>
    <div className="abt-ex-box">
    <h2>MEDIDE | <span>Sept,2023-Nov,2023</span></h2>
    <h2> FULL STACK WEB DEVELOPER |<span> INTERN</span></h2>
    <p> Developed company’s website while leading a team of 15 people , overseeing the project from design and coding
    to ensuring user friendly navigation and implementing responsive design.</p>
    </div>
    <div className="abt-ex-box">
    <h2>APTIFYR | <span>Mar,2024-April,2024</span></h2>
    <h2> FULL STACK WEB DEVELOPER |<span> INTERN</span></h2>
    <p>Developed company’s website, encompassing tasks such as coding the front-end and back-end functionalities,
    ensuring user friendly navigation and implementing responsive design</p>
    </div>
    </div>
    </div>
    </div>
    <div className="project">
    <div className="project-head"><h2>SELECTED PROJECTS</h2></div>
    <div className="pc">
    <div className="pc-con">
    <h2>CHAT APPLICATION</h2>
    <p>Developed a real-time chat application using the MERN stack (MongoDB, Express.js, React, Node.js)and Socket.IO. Implemented dynamic, instant messaging features for seamless communication.</p>
    <span><a href="https://github.com/Shivankk-Pandeyy?tab=repositories">LINK</a></span>
    </div>
    <div className="pc-con">
    <h2>COMMERCIAL GYM APPLICATION</h2>
    <p>Developed an e-commerce gym website with an admin panel using the MERN stack (MongoDB, Express.js,React, Node.js). Implemented features for product listings, user authentication, and secure payments.</p>
    <span><a href="https://github.com/Shivankk-Pandeyy?tab=repositories">LINK</a></span>
    </div>
    <div className="pc-con">
    <h2>EXPENSE TRACKER</h2>
    <p>A Developed an expense tracker application using the MERN stack (MongoDB, Express.js, React, Node.js) and Chart.js. Implemented features for adding, categorizing, and visualizing expenses in real-time</p>
    <span><a href="https://github.com/Shivankk-Pandeyy?tab=repositories">LINK</a></span>
    </div>
    <div className="pc-con">
    <h2>BLOG PLATFORM</h2>
    <p>Developed a blog platform using the MERN stack (MongoDB, Express.js, React, Node.js). Implemented features for creating, editing, and commenting on posts with user authentication.</p>
    <span><a href="https://github.com/Shivankk-Pandeyy?tab=repositories">LINK</a></span>
    </div>
    <div className="pc-con">
    <h2>E-COMMERCE APPLICATION</h2>
    <p>Developed an e-commerce application using React, featuring dynamic product listings and a seamless shopping experience.</p>
    <span><a href="https://holikenterprise.vercel.app/">LINK</a></span>
    </div>
    <div className="pc-con">
    <h2>HEALTHCARE APPLICATION</h2>
    <p>Developed a healthcare application using React, incorporating popup modals, AOS library animations,and pagination. Enhanced user interaction with intuitive UI elements and smooth, responsive animations</p>
    <span><a href="https://vitalcaree.netlify.app/">LINK</a></span>
    </div>
    </div>
    </div>
    <div className="contact">
    <h2>GET IN TOUCH</h2>
    <div className="c1">
    <div className="c11">
    <a href="tel:7389288618"><motion.button whileHover={{scale:1.15}}>CALL NOW</motion.button></a>
    <a href='mailto:pandeyshivank21@gmail.com'><motion.button whileHover={{scale:1.15}}>EMAIL NOW</motion.button></a>
    <a href="https://api.whatsapp.com/send?phone=7389288618"><motion.button whileHover={{scale:1.15}}>MESSAGE NOW</motion.button></a>
    <a href={CARD} download="SHIVANK_PANDEY_CONTACT_CARD"><motion.button whileHover={{scale:1.15}}>CONTACT CARD</motion.button></a>
    </div>
    <div className="c11">
    <form onSubmit={submitData}>
    <input type="text" placeholder="ENTER YOUR NAME" autoComplete="off" name="name" onChange={FormData} value={data.name}></input>
    <input type="text" placeholder="ENTER YOUR EMAIL" autoComplete="off" name="email" onChange={FormData} value={data.email}></input>
    <input type="text" placeholder="ENTER YOUR MESSAGE" autoComplete="off" name="message" onChange={FormData} value={data.message}></input>
    <motion.button whileHover={{scale:1.15}} transition={{duration:0.25,ease:"easeInOut"}} type="submit">SUBMIT</motion.button>
    </form>
    </div>
    </div>
    <div className="c2">
    <div className="c22">
    <motion.img src={phone} alt="PHONE" title="PHONE NUMBER INFORMATION" whileHover={{scale:1.15}} whileTap={{rotate:"360deg"}} transition={{duration:0.25,ease:"easeInOut"}}></motion.img>
    <h2>+ (91) 7389288618</h2>
    </div>
    <div className="c22">
    <motion.img src={mail} alt="MAIL" title="EMAIL INFORMATION" whileHover={{scale:1.15}} whileTap={{rotate:"360deg"}} transition={{duration:0.25,ease:"easeInOut"}}></motion.img>
    <h2>pandeyshivank21@gmail.com</h2>
    </div>
    <div className="c22">
    <motion.img src={add} alt="ADDRESS" title="ADDRESS INFORMATION" whileHover={{scale:1.15}} whileTap={{rotate:"360deg"}} transition={{duration:0.25,ease:"easeInOut"}}></motion.img>
    <h2>Bhilai,CG</h2>
    </div>
    </div>
    </div>
    <Footer/>
    </>
)
}
export default Home