import "react-multi-carousel/lib/styles.css";
import SignupInfo from "./signupInfo";

export const SignupC = () => {
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
                        <div style={{ marginBottom: "7em" }} w>
                            <div className="skill-bx wow zoomIn">
                                <br></br>
                                <br></br>
                                <h2>sign up</h2>
                                <p>we have a couple of steps</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="skill-bx wow zoomIn">
                                <SignupInfo></SignupInfo>
                            </div>
                        </div>
                        <br></br>
                    </div>
                </div>
            </section>
        </div>
    );
};
