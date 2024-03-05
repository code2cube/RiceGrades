import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Logo from '../img/logo.png';

function Home() {
    return (
        <div>
            <Nav />
            <section id="header">
                <div class="header">
                    <div class="container">
                        <p>"Cook your Grades like your Rice" - Jiaming Lin</p>
                        <img src="https://placehold.co/400x400.png" alt="temp" />
                    </div>
                </div>
            </section>
            <section id="about">
                <div class="about">
                    <div class="container">
                        <img src={Logo} alt="temp" />
                        <p>Professional Grading App for Students by Students</p>
                    </div>
                </div>
            </section>
            <div id="gallery">
                <div class="gallery">
                    <div class="container">
                        <h>Gallery View</h> <br /><br /><br />
                        <div class="slider-wrapper">
                            <div class="slider">
                                <img id="slide-1" src="https://placehold.co/640x360.png" alt="temp" />
                                <img id="slide-2" src="https://placehold.co/640x360/000000/FFF" alt="temp" />
                                <img id="slide-3" src="https://placehold.co/640x360/FF2400/FFF" alt="temp" />
                            </div>
                            <div class="slider-nav">
                                <a href="#slide-1"></a>
                                <a href="#slide-2"></a>
                                <a href="#slide-3"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
