import meter1 from "../assets/img/home.png";
import meter3 from "../assets/img/connection.png";
import meter2 from "../assets/img/sun.png";
import meter4 from "../assets/img/comp.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Matches = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>what's so special?</h2>
                            <p>
                                forget about the catfishers and fake friends; we
                                use our user youtube watch history as the primary
                                method to help you find new connections as we
                                have seen that oftentimes youtube seems to know
                                us better than we know ourselves. <br></br> <br></br>this will help
                                you find your perfect connections who genuinely
                                share similar interests, senses of humor, and
                                love for cat videos.
                            </p>
                            <br></br>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="owl-carousel owl-theme skill-slider"
                            >
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>new roots</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>cutting edge algorithm</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>authentic connection</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="Image" />
                                    <h5>security</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
