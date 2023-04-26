import "./FooterStyles.css";

const Footer = () =>{
    return(
        <div className="footer">
                <div className="top">
                    <div>
                        <h1>Donate</h1>
                        <p>Give what you can.</p>
                    </div>
                    <div>
                        <a href="">
                            <i className="fa-brands fa-facebook-square">

                            </i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-instagram-square">

                            </i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-youtube-square">

                            </i>
                        </a>
                        <a href="">
                            <i className="fa-brands fa-twitter-square">

                            </i>
                        </a>
                    </div>
                </div>

                <div className="bottom">
                    <div>
                        <h4>Donor's guidelines </h4>
                            <a href="/">Changelog</a>
                            <a href="/">Status</a>
                            <a href="/">License</a>
                            <a href="/">All versions</a>
                    </div>
                    <div>
                        <h4>HUNGER FACTS</h4>
                            <a href="/">Children</a>
                            <a href="/">Senior</a>
                            <a href="/">Impact of Hunger</a>
                            <a href="/">Nutrition</a>
                    </div>
                    <div>
                        <h4>Help</h4>
                            <a href="/">Support</a>
                            <a href="/">Troubleshooting</a>
                            <a href="/">Contact Us</a>
                    </div>
                    <div>
                        <h4>Others</h4>
                            <a href="/">Terms of service </a>
                            <a href="/">Privacy Policy</a>
                            <a href="/">License</a>
                    </div>
                </div>
        </div>
    )
}

export default Footer;