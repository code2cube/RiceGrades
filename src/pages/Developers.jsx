import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Developers() {
    return (
        <div id="developers-page">
            <Nav />
            <section>
                <div className="developers">
                    <div className="container" id="sam-dev-card">
                        <img src="https://placehold.co/150x150.png" alt="Developer" />
                        <h>Samuel Sharivker</h>
                        <p className="dev-title">Lead Developer</p>
                        <p className="dev-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus proin nibh nisl.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="developers">
                    <div className="container" id="yu-dev-card">
                        <img src="https://placehold.co/150x150/000000/FFF.png" alt="Developer" />
                        <h>Zi Xuan Yu</h>
                        <p className="dev-title">Chief Firebase Developer</p>
                        <p className="dev-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus proin nibh nisl.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="developers">
                    <div className="container" id="ben-dev-card">
                        <img src="https://placehold.co/150x150/00F0FF/FFF.png" alt="Developer" />
                        <h>Benjamin The Chau</h>
                        <p className="dev-title">Chief React Developer</p>
                        <p className="dev-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus proin nibh nisl.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Developers;
