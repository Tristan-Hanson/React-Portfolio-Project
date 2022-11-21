import PortCard from "../components/PortCard";

const port = [
    {
        image: "scamazon.jpg",
        title: "Scamazon",
        description: "An in class project where as a group we worked with handlebars.js templating",
        link: "http://mineboss.asuscomm.com:55674/"
    },
    {
        image: "noteTaker.jpg",
        title: "Note Taker App",
        description: "I developed an app for taking notes.",
        link: "https://notetaker2-production.up.railway.app/"
    },
    {
        image: "techBlog.jpg",
        title: "Tech Blog",
        description: "A tech blog website",
        link: "https://tech-blog-production-3ad1.up.railway.app/"
    }
]

const Portfolio = () =>{
    return(
        <div id="port">
            {port.map( (project,index) =>{
                return <PortCard key={index} port={project}/>
            })}
        </div>
    )
}

export default Portfolio;