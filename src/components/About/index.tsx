import { Reveal } from "..";
import { default as DottedPattern } from "../../assets/dotted-pat.svg";
import { default as StrokePattern } from "../../assets/stroke-pat.svg";

type AboutProps = object;

const About: React.FC<AboutProps> = () => {
    return (
        <div className="text-black bg-[#d2d2d2] my-section">
            <img
                src={DottedPattern}
                alt="dotted pattern"
                className="hidden md:block absolute top-[7rem] left-[7rem]"
            />
            <img
                src={StrokePattern}
                alt="stroke pattern"
                className="hidden md:block absolute bottom-[7rem] right-[10rem]"
            />
            <div className={`common-content`}>
                <Reveal>
                    <h3 className="common-title">About Me</h3>
                </Reveal>
                <Reveal>
                    <div className={`text-container`}>
                        <p>
                            I'm a software engineer, Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Odio ullam incidunt
                            architecto harum amet.
                        </p>
                        <p>
                            Expedita delectus quis impedit quia, quae totam
                            perspiciatis, recusandae laudantium maiores officiis
                            quod velit omnis aut.
                        </p>
                        <p>
                            Expedita delectus quis impedit quia, quae totam
                            perspiciatis, recusandae laudantium maiores officiis
                            quod velit omnis aut.
                        </p>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default About;
