import React from "react";
import Slide from "react-reveal/Slide";
export default function AboutMe() {
  return (
    <>
      <section className="aboutMe" id="about-me">
        <div className="skillsBarsContainer">
          <h1 className="">My Skills</h1>
          <div className="skillBar html">
            <p>HTML</p>
            <p>90%</p>
            <Slide left>
              <div className="background "></div>
            </Slide>
          </div>

          <div className="skillBar css3">
            <p>CSS3</p>
            <p>85%</p>
            <Slide left>
              <div className="background "></div>
            </Slide>
          </div>

          <div className="skillBar javaScript">
            <p>JavaScript</p>
            <p>90%</p>
            <Slide left>
              <div className="background "></div>
            </Slide>
          </div>

          <div className="skillBar react">
            <p>React</p>
            <p>80%</p>
            <Slide left>
              <div className="background "></div>
            </Slide>
          </div>

          <div className="skillBar nodeJs">
            <p>Node JS</p>
            <p>60%</p>
            <Slide left>
              <div className="background "></div>
            </Slide>
          </div>

          <div className="skillBar express">
            <p>Express</p>
            <p>75%</p>
            <Slide left>
              <div className="background "></div>
            </Slide>
          </div>

          <div className="skillBar mongoDb">
            <p>MongoDB & Mongoose</p>
            <p>70%</p>
            <Slide left>
              <div className="background "></div>
            </Slide>
          </div>

          <div className="skillBar git">
            <p>Git</p>
            <p>65%</p>
            <Slide left>
              <div className="background "></div>
            </Slide>
          </div>
        </div>
        <div className="infoContainer">
          <Slide bottom>
            <div className="generalInfo infoDiv">
              <h3>Who am I?</h3>
              <p>
                My name is Luay Mallak, I am a frontend web-developer, I come
                from Syria, but have been living in Leipzig since 2015. I love
                history and everything about space, I also am so fond of
                science-fiction movies! if I am not coding, I am playing video
                games.
              </p>
            </div>
          </Slide>
          <Slide bottom>
            <div className="otherSkills infoDiv">
              <h3>Why Web Development?</h3>
              <p>
                I studied English-Arabic Translation in Damascus University and
                worked as a translator and interpreter for 8 years, before I
                decided to be a web-developer. Why? I have been always fond of
                programming and computers, so I seized the best chance to learn
                programing languages, to add it to my set of languages I speak,
                Arabic, English and German.
              </p>
            </div>
          </Slide>
          <Slide bottom>
            <div className="experience infoDiv">
              <h3>What do I do?</h3>
              <p>
                I am at the final two months of a one year web-development
                course at Digital Career Institute. I am the representative of
                my class. Along with my classmates, we have designed a couple of
                projects, using HTML/CSS, javaScript, react and Express! Have a
                look here!
              </p>
            </div>
          </Slide>
        </div>
      </section>
    </>
  );
}
