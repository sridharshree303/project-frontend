

const Home = () => {

    return (
        <div
            style={{
                backgroundImage: "url(" + "https://media.istockphoto.com/photos/the-silhouette-of-a-farmer-stands-near-a-cow-milk-cans-in-the-picture-id1301384827?b=1&k=20&m=1301384827&s=170667a&w=0&h=FYOAq55S21fIWd1FZT_AS7WdbkDYIpWUGcGThhnVL0I=" + ")",
                backgroundPosition: 'left center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            {/* <div className=".container-flluid"
                    style={{
                        height:600,
                        width:400,
                    
                        color: "white"
                    }}> */}
            <div className="container"
                style={{
                    height: "100vh",
                    color: "white"
                }}>
                <h1 className="display-4 text-primary m-1 pt-5">Welcome<span></span> to Dairy Management</h1>

            </div>

        </div>
    );
}

export default Home;

