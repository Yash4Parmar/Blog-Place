import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="Home">
            {error && <div> {error}</div>}
            {isLoading && <div>Please Wait...</div>}
            {blogs && <BlogList blogs={blogs} title="Blogs:" />}
        </div>
    );
}

export default Home;