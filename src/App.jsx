import React from 'react'
import Profile from "./component/Profile";

const App = () => {
  const employees = [
    {
      image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVtcGxveWVlfGVufDB8fDB8fHww",
      name: "Wade Wilson",
      role: "UI/UX Designer",
      company: "Epic Coders",
      pay: "$55/hr",
      skills: ["UI", "UX", "Photoshop", "+4"],
      details:
        "Wade is a 32 year old UI/UX designer, with an impressive portfolio behind him."
    },
    {
      image: "https://images.unsplash.com/photo-1699899657680-421c2c2d5064?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGVtcGxveWVlfGVufDB8fDB8fHww",
      name: "Sophia Carter",
      role: "Product Designer",
      company: "Pixel Studio",
      pay: "$62/hr",
      skills: ["Figma", "UI", "UX", "+3"],
      details:
        "Sophia is a creative product designer who specializes in user-centered design experiences."
    },
    {
      image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "James Anderson",
      role: "Frontend Developer",
      company: "Creative Minds",
      pay: "$48/hr",
      skills: ["React", "JavaScript", "CSS", "+5"],
      details:
        "James is a front-end developer with 6 years of experience building modern web applications."
    },
    {
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww",
      name: "Emma Watson",
      role: "Graphic Designer",
      company: "Vision Tech",
      pay: "$70/hr",
      skills: ["Branding", "Illustrator", "Photoshop", "+2"],
      details:
        "Emma is a talented graphic designer known for creating strong visual identities."
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Michael Brown",
      role: "Full Stack Developer",
      company: "NextGen Labs",
      pay: "$65/hr",
      skills: ["Node.js", "MongoDB", "Express", "+4"],
      details:
        "Michael is a full-stack developer passionate about scalable and efficient web solutions."
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Olivia Taylor",
      role: "UX Designer",
      company: "Design Hub",
      pay: "$52/hr",
      skills: ["UI", "Figma", "Prototyping", "+3"],
      details:
        "Olivia focuses on intuitive interfaces that improve user engagement and satisfaction."
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1689629870780-5d0e655383e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE3fHxwZXJzb258ZW58MHx8MHx8fDA%3D",
      name: "Daniel Lee",
      role: "React Developer",
      company: "CodeCraft",
      pay: "$75/hr",
      skills: ["React", "Redux", "TypeScript", "+4"],
      details:
        "Daniel is a skilled React developer with expertise in creating dynamic user interfaces."
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxwZXJzb258ZW58MHx8MHx8fDA%3D",
      name: "Ava Johnson",
      role: "Digital Marketer",
      company: "Bright Works",
      pay: "$58/hr",
      skills: ["Marketing", "SEO", "Content", "+5"],
      details:
        "Ava is a digital marketing expert helping brands grow through innovative strategies."
    },
    {
      image: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxwZXJzb258ZW58MHx8MHx8fDA%3D",
      name: "Ethan Davis",
      role: "Backend Developer",
      company: "TechNova",
      pay: "$68/hr",
      skills: ["Python", "Django", "API", "+4"],
      details:
        "Ethan is a backend engineer focused on building secure and high-performance systems."
    },
    {
      image: "https://images.unsplash.com/photo-1574108233269-86d1199d28de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxwZXJzb258ZW58MHx8MHx8fDA%3D",
      name: "Mia Rodriguez",
      role: "UI Researcher",
      company: "Future Pixels",
      pay: "$60/hr",
      skills: ["UI", "UX", "Research", "+3"],
      details:
        "Mia combines design thinking and user research to craft impactful digital products."
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1661374927471-24a90ebd5737?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxwZXJzb258ZW58MHx8MHx8fDA%3D",
      name: "Ryan Mitchell",
      role: "Senior Frontend Engineer",
      company: "InnovateX",
      pay: "$72/hr",
      skills: ["React", "Next.js", "Tailwind", "+6"],
      details:
        "Ryan is a senior front-end engineer with over 8 years of experience building fast and scalable web applications."
    },
    {
      image: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHxwZXJzb258ZW58MHx8MHx8fDA%3D",
      name: "Isabella Moore",
      role: "UX Designer",
      company: "Creative Spark",
      pay: "$64/hr",
      skills: ["UI", "UX", "Figma", "+5"],
      details:
        "Isabella is a passionate UX designer who creates intuitive digital experiences through research-driven design."
    }
  ];
  
  return (
    <div className='parent'>
      {employees.map(function(elem) {
        return <Profile employeeImg={elem.image} employeeName={elem.name} employeeRole={elem.role} companyName={elem.company} payment={elem.pay} employeeSkills={elem.skills} employeeDetails={elem.details}/>
      })}
      
    </div>
  )
}

export default App
