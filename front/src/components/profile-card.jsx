import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import Cards from "./card";
import ProfileInfo from "./profileInfo";

export const ProfileC = () => {
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
        <div className="profile">
            <section className="skill" id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="skill-bx wow zoomIn">
                                <br></br>
                                <h2>y o u</h2>
                                <br></br>
                                <br></br>
                                <p>
                                    here is all the data that we have from you.<br></br>{" "}
                                    remember with our method of training, this is all we have on you as your privacy <br></br>
                                    and security are the most important things to us
                                </p>
                                <ProfileInfo></ProfileInfo>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img
                className="background-image-left"
                src={colorSharp}
                alt="Image"
            /> */}
            </section>
        </div>
    );
};
