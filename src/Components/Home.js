const Home = () => {
    return ( 
        <div className='Home' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '90vh', width: "70%", marginLeft: "15%", marginRight: '15%'}}>
            <div className="site-wrapper">
                <div className="site-wrapper-inner">
                    <div className="container">
                        <div className="inner cover" style={{color: 'white'}}>
                            <h1 className="cover-heading" >Welcome to my page.</h1>
                            <p className="lead"> Hello I'm <b>Giorgos Ganias</b>, a software developer and MSC Student. This is a website created for Data Visualization cource on my MSC, showcasing my work for the 1st assignment of the course.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Home;
