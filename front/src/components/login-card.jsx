import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import Cards from "./card";
import LoginInfo from "./loginInfo";

export const LoginC = () => {
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
        <div className="login2">
            <section className="box" id="box">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="box-bx wow zoomIn">
                                <br></br>
                                <LoginInfo></LoginInfo>
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
