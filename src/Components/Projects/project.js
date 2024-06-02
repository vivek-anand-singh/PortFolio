import Tile from './tile.js';
import RestaurantBookingimg from './images/Screenshot 2024-06-02 162712.png'
import BankingSystemimg from './images/BankingSystem.jpg'
import VivekTypeLogo from './images/vivektypelogo.png'
import SocialmediaLogo from './images/SocialMedia.png';
import './project.css';
function Project()
{
    const projects = [
        {
            img: RestaurantBookingimg,
            projectName: "Restaurant Booking",
            descriptionPoints: [
                "A web application to book tables in a restaurant.",
                "Users can view the available tables and book them.",
                "Admin can add and remove tables."
            ],
            GitHubLink: "https://github.com/vivek-anand-singh/webDev",
            LiveLink: "https://vivek-anand-singh.github.io/webDev/",
            TechStacks: ["HTML","CSS"],
        },
        {
            img: BankingSystemimg,
            projectName: "Banking System",
            descriptionPoints: [
                "A web application to book tables in a restaurant.",
                "Users can view the available tables and book them.",
                "Admin can add and remove tables."
            ],
            GitHubLink: "https://github.com/vivek-anand-singh/UpdatedBankingSystem",
            TechStacks: ["Spring Boot","Hibernate","MySQL"], 
        },
        {
            img: VivekTypeLogo,
            projectName: "VivekType",
            descriptionPoints: [
                "A typing practice web application.",
                "Users can practice typing with different difficulty levels.",
                "Users can view their progress."
            ],
            GitHubLink: "https://github.com/vivek-anand-singh/vivektype",
            LiveLink: "https://vivek-anand-singh.github.io/vivektype/",
            TechStacks: ["HTML","CSS","JavaScript"],
        },
        {
            img: SocialmediaLogo,
            projectName: "Social Media",
            descriptionPoints: [
                "A social media web application.",
                "Users can create posts and view other users' posts.",
                "Users can follow other users."
            ],
            GitHubLink: "https://github.com/vivek-anand-singh/finalcontestproject",
            LiveLink: "https://vivek-anand-singh.github.io/finalcontestproject/",
            TechStacks: ["HTML","CSS","JavaScript"],
        }
    ];
    return (
        <div> 
            <h1 className="heading">Projects</h1>  
            <div className="projects">
            {projects.map((project, index) => (<Tile className="tile" key={index} {...project}></Tile>))}
            </div>
        </div>
    );
}

export default Project;