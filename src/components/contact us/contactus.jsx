import './contactus.css';

function Contactus() {
    return (
        <div className="contact-us-container">
            <div className="site-map">
                <h3>Site Map</h3>
                <p>Explore our pages:</p>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Sign Up</li>
                </ul>
            </div>

            <div className="contact-info">
                <h3>Contact Us</h3>
                <p>
                    <span className="icon">📞</span> +91 27462843
                </p>
                <p>
                    <span className="icon">✉️</span> abc@gmail.com
                </p>
            </div>

            <div className="branding">
                <img
                    src="https://i.postimg.cc/Wb1J8y5n/Screenshot-2024-11-05-at-9-19-04-PM-removebg.png"
                    alt="Novels N Roses Logo"
                    className="logo"
                />
            </div>
        </div>
    );
}

export default Contactus;
