import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import BlogSeccionExpanded from "../components/BlogSeccionExpanded"

const blog = () => {
    return <div>
        <Navbar />
        <Header  title = "Blog"/>
        <BlogSeccionExpanded />
        <Footer/>
    </div>
}

export default blog;