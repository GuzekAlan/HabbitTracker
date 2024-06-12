import Footer from "@/components/Footer";
import Header from "@/components/Header";

function Home() {
    return (
        <div className="flex flex-col w-full min-h-screen gap-2">
            <Header />
            <div>Home Page</div>
            <Footer />
        </div>
    )
}

export default Home;