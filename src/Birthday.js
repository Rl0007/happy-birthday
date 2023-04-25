import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import lydia2 from "./img/lydia2.png";
import baloon1 from "./img/ballon1.svg";
import baloon2 from "./img/ballon2.svg";
import baloon3 from "./img/ballon3.svg";
import favicon from "./img/favicon.png";
import { Helmet } from "react-helmet";
import { Elastic, Expo, gsap } from "gsap";
import arti from "./img/arti.jpg";
import hat from "./img/hat.png";
import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";
import hbdsong from "./img/hbdsong.mp3";
// import { ReactComponent as Hat } from "./img/hat.svg";
// import { TweenMax, TimelineLite, Power2, Elastic } from "gsap/TweenMax";
// import ScriptTag from "react-script-tag";

function Birthday() {
  const birthday = useRef();
  const circle = useRef();
  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  console.log("hello");

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };
  function play() {
    new Audio(hbdsong).play();
  }
  useEffect(() => {}, []);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      play();

      const tl = new TimelineMax();

      tl.to(".container", 0.1, {
        visibility: "visible",
      })
        .from(".one", 0.7, {
          opacity: 0,
          y: 10,
        })
        .from(".two", 0.4, {
          opacity: 0,
          y: 10,
        })
        .to(
          ".one",
          0.7,
          {
            opacity: 0,
            y: 10,
          },
          "+=2.5"
        )
        .to(
          ".two",
          0.7,
          {
            opacity: 0,
            y: 10,
          },
          "-=1"
        )
        .from(".three", 0.7, {
          opacity: 0,
          y: 10,
          // scale: 0.7
        })
        .to(
          ".three",
          0.7,
          {
            opacity: 0,
            y: 10,
          },
          "+=2"
        )
        .from(".four", 0.7, {
          scale: 0.2,
          opacity: 0,
        })
        .from(".fake-btn", 0.3, {
          scale: 0.2,
          opacity: 0,
        })
        .staggerTo(
          ".hbd-chatbox span",
          0.5,
          {
            visibility: "visible",
          },
          0.05
        )
        .to(".fake-btn", 0.1, {
          backgroundColor: "rgb(127, 206, 248)",
        })
        .to(
          ".four",
          0.5,
          {
            scale: 0.2,
            opacity: 0,
            y: -150,
          },
          "+=0.7"
        )
        .from(".idea-1", 0.7, ideaTextTrans)
        .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
        .from(".idea-2", 0.7, ideaTextTrans)
        .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
        .from(".idea-3", 0.7, ideaTextTrans)
        .to(".idea-3 strong", 0.5, {
          scale: 1.2,
          x: 10,
          backgroundColor: "rgb(21, 161, 237)",
          color: "#fff",
        })
        .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
        .from(".idea-4", 0.7, ideaTextTrans)
        .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
        .from(
          ".idea-5",
          0.7,
          {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
          },
          "+=0.5"
        )
        .to(
          ".idea-5 .smiley",
          0.7,
          {
            rotation: 90,
            x: 8,
          },
          "+=0.4"
        )
        .to(
          ".idea-5",
          0.7,
          {
            scale: 0.2,
            opacity: 0,
          },
          "+=2"
        )
        .staggerFrom(
          ".idea-6 span",
          0.8,
          {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
          },
          0.2
        )
        .staggerTo(
          ".idea-6 span",
          0.8,
          {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
          },
          0.2,
          "+=1"
        )
        .staggerFromTo(
          ".baloons img",
          2.5,
          {
            opacity: 0.9,
            y: 1400,
          },
          {
            opacity: 1,
            y: -1000,
          },
          0.2
        )
        .from(
          ".lydia-dp",
          0.5,
          {
            scale: 1,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
            objectFit: "contain",
          },
          "-=2"
        )
        .from(".hat", 0.5, {
          x: -200,
          y: 350,
          rotation: -180,
          opacity: 0,
        })
        .staggerFrom(
          ".wish-hbd span",
          0.7,
          {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
          },
          0.1
        )
        .staggerFromTo(
          ".wish-hbd span",
          0.7,
          {
            scale: 1.4,
            rotationY: 150,
          },
          {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
          },
          0.1,
          "party"
        )
        .from(
          ".wish h5",
          0.5,
          {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
          },
          "party"
        )
        .staggerTo(
          ".eight svg",
          1.5,
          {
            visibility: "visible",
            opacity: 0,
            scale: 80,
            repeat: 3,
            repeatDelay: 1.4,
          },
          0.3
        )
        .to(".six", 0.5, {
          opacity: 0,
          y: 30,
          zIndex: "-1",
        })
        .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
        .to(
          ".last-smile",
          0.5,
          {
            rotation: 90,
          },
          "+=1"
        );

      // or we can use refs
      const replyBtn = document.getElementById("replay");
      replyBtn.addEventListener("click", () => {
        window.location.reload(false);
      });
    }, birthday); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
    <div className="begining" ref={birthday}>
      {/* <div className="test"></div> */}
      <div className="container">
        <div className="one">
          <h1 className="one">
            <span data-node-name="greeting">Hiya </span>
            <span data-node-name="name">Arti</span>
          </h1>
          <p className="two" data-node-name="greetingText">
            I really like your name btw!
          </p>
        </div>
        {/* <img src={hat} className="testhat" /> */}

        <div className="three">
          <p data-node-name="text1">It's your birthday!!! :D</p>
        </div>
        <div className="four">
          <div className="text-box">
            <p className="hbd-chatbox" data-node-name="textInChatBox">
              {/* Happy birthday to you!! Yeee! Many many happy blah...
               */}
              <div>
                <span>H</span>
                <span>a</span>
                <span>p</span>
                <span>p</span>
                <span>y</span>
                <span> </span>
                <span>B</span>
                <span>i</span>
                <span>r</span>
                <span>t</span>
                <span>h</span>
                <span>d</span>
                <span>a</span>
                <span>y</span>
                <span> </span>
                <span>t</span>
                <span>o</span>
                <span> </span>
                <span>y</span>
                <span>o</span>
                <span>u</span>
                <span> </span>
                <span>M</span>
                <span>y</span>
                <span> </span>
                <span>d</span>
                <span>e</span>
                <span>a</span>
                <span>r</span>
                <span> </span>
                <span>A</span>
                <span>r</span>
                <span>t</span>
                <span>i</span>
                <span> </span>
                <span>y</span>
                <span>o</span>
                <span>u</span>
                <span> </span>
                <span>a</span>
                <span>r</span>
                <span>e</span>
                <span> </span>
                <span>s</span>
                <span>p</span>
                <span>e</span>
                <span>c</span>
                <span>i</span>
                <span>a</span>
                <span>l</span>
                <span> </span>
                <span>t</span>
                <span>u</span>
                <span>m</span>
                <span> </span>
                <span>j</span>
                <span>i</span>
                <span>o</span>
                <span> </span>
                <span>b</span>
                <span>l</span>
                <span>a</span>
                <span>h</span>
                <span> </span>
                <span>b</span>
                <span>l</span>
                <span>a</span>
                <span>h</span>
                <span>.</span>
                <span>.</span>
                <span>!</span>
              </div>
            </p>
            <p className="fake-btn" data-node-name="sendButtonLabel">
              Send
            </p>
          </div>
        </div>
        <div className="five">
          <p className="idea-1" data-node-name="text2">
            Ye mein karne wala tha...
          </p>
          <p className="idea-2" data-node-name="text3">
            But then I stopped.
          </p>
          <p className="idea-3">
            <span data-node-name="text4">
              I realised, I wanted to do something
            </span>
            <strong data-node-name="text4Adjective">special</strong>.
          </p>
          <p className="idea-4" data-node-name="text5Entry">
            Because,
          </p>
          <p className="idea-5">
            <span data-node-name="text5Content">You are Special </span>
            <span className="smiley" data-node-name="smiley">
              {"   "}
              :)
            </span>
          </p>
          {/* <img src={lydia2} /> */}
          <p className="idea-6">
            <span data-node-name="bigTextPart1">S</span>
            <span data-node-name="bigTextPart2">O</span>
          </p>
        </div>
        <div className="six">
          <img
            src={arti}
            alt=""
            className="lydia-dp"
            data-node-name="imagePath"
          />
          <img src={hat} alt="" className="hat" />
          {/* <Hat className="hat" /> */}
          <div class="wish">
            <h3 class="wish-hbd" data-node-name="wishHeading">
              <span>H</span>
              <span>a</span>
              <span>p</span>
              <span>p</span>
              <span>y </span>
              <span> </span>
              <span>B</span>
              <span>i</span>
              <span>r</span>
              <span>t</span>
              <span>h</span>
              <span>d</span>
              <span>a</span>
              <span>y</span>
              <span>!</span>
            </h3>
            <h5 data-node-name="wishText">
              Bhagwan Shree Krishna hamesha tumhare saath rahe! ;)
            </h5>
          </div>
        </div>
        <div className="seven">
          <div className="baloons">
            <img src={baloon1} alt="" />
            <img src={baloon2} alt="" />
            <img src={baloon3} alt="" />
            <img src={baloon3} alt="" />
            <img src={baloon2} alt="" />
            <img src={baloon1} alt="" />
            <img src={baloon2} alt="" />
            <img src={baloon1} alt="" />
            <img src={baloon3} alt="" />
            <img src={baloon2} alt="" />
            <img src={baloon2} alt="" />
            <img src={baloon1} alt="" />
            <img src={baloon1} alt="" />
            <img src={baloon3} alt="" />
            <img src={baloon2} alt="" />
            {/* <img src={baloon1} alt="" />
            <img src={baloon1} alt="" />
            <img src={baloon3} alt="" />
            <img src={baloon1} alt="" />
            <img src={baloon1} alt="" />
            <img src={baloon3} alt="" />
            <img src={baloon2} alt="" />
            <img src={baloon2} alt="" />
            <img src={baloon3} alt="" />
            <img src={baloon1} alt="" />
            <img src={baloon1} alt="" />
            <img src={baloon2} alt="" />
            <img src={baloon1} alt="" />
            <img src={baloon1} alt="" />
            <img src={baloon3} alt="" />
            <img src={baloon2} alt="" />
            <img src={baloon3} alt="" />
            <img src={baloon1} alt="" /> */}
          </div>
        </div>
        <div className="eight">
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
          <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
            {/* <square /> */}
          </svg>
        </div>
        <div className="nine">
          <p data-node-name="outroText">
            Okay, now come back and tell me if you liked it.
          </p>
          <p id="replay" data-node-name="replayText">
            Or click, if you want to watch it again.
          </p>
          <p className="last-smile" data-node-name="outroSmiley">
            :)
          </p>
        </div>
      </div>
      {/* <ScriptTag
        isHydrating={true}
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"
      />
      <ScriptTag isHydrating={true} type="text/javascript" src="./newmain.js" /> */}

      {/* <Helmet> */}
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></scri>
        <script src="./newmain.js" type="text/javascript" /> */}
      {/* </Helmet> */}
    </div>
  );
}

// Import the data to customize and insert them into page
// const fetchData = () => {
//   fetch("customize.json")
//     .then((data) => data.json())
//     .then((data) => {
//       var dataArr = Object.keys(data);
//       dataArr.map((customData) => {
//         if (data[customData] !== "") {
//           if (customData === "imagePath") {
//             document
//               .querySelector(`[data-node-name*="${customData}"]`)
//               .setAttribute("src", data[customData]);
//           } else {
//             document.querySelector(
//               `[data-node-name*="${customData}"]`
//             ).innerText = data[customData];
//           }
//         }

//         // Check if the iteration is over
//         // Run amimation if so
//         if (dataArr.length === dataArr.indexOf(customData) + 1) {
//           animationTimeline();
//         }
//       });
//     });
// };

// Animation Timeline
// const animationTimeline = () => {
//   // Spit chars that needs to be animated individually
//   const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
//   const hbd = document.getElementsByClassName("wish-hbd")[0];

//   textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
//     .split("")
//     .join("</span><span>")}</span`;

//   hbd.innerHTML = `<span>${hbd.innerHTML
//     .split("")
//     .join("</span><span>")}</span`;

//   const ideaTextTrans = {
//     opacity: 0,
//     y: -20,
//     rotationX: 5,
//     skewX: "15deg",
//   };

//   const ideaTextTransLeave = {
//     opacity: 0,
//     y: 20,
//     rotationY: 5,
//     skewX: "-15deg",
//   };

//   const tl = new TimelineMax();

//   tl.to(".container", 0.1, {
//     visibility: "visible",
//   })
//     .from(".one", 0.7, {
//       opacity: 0,
//       y: 10,
//     })
//     .from(".two", 0.4, {
//       opacity: 0,
//       y: 10,
//     })
//     .to(
//       ".one",
//       0.7,
//       {
//         opacity: 0,
//         y: 10,
//       },
//       "+=2.5"
//     )
//     .to(
//       ".two",
//       0.7,
//       {
//         opacity: 0,
//         y: 10,
//       },
//       "-=1"
//     )
//     .from(".three", 0.7, {
//       opacity: 0,
//       y: 10,
//       // scale: 0.7
//     })
//     .to(
//       ".three",
//       0.7,
//       {
//         opacity: 0,
//         y: 10,
//       },
//       "+=2"
//     )
//     .from(".four", 0.7, {
//       scale: 0.2,
//       opacity: 0,
//     })
//     .from(".fake-btn", 0.3, {
//       scale: 0.2,
//       opacity: 0,
//     })
//     .staggerTo(
//       ".hbd-chatbox span",
//       0.5,
//       {
//         visibility: "visible",
//       },
//       0.05
//     )
//     .to(".fake-btn", 0.1, {
//       backgroundColor: "rgb(127, 206, 248)",
//     })
//     .to(
//       ".four",
//       0.5,
//       {
//         scale: 0.2,
//         opacity: 0,
//         y: -150,
//       },
//       "+=0.7"
//     )
//     .from(".idea-1", 0.7, ideaTextTrans)
//     .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
//     .from(".idea-2", 0.7, ideaTextTrans)
//     .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
//     .from(".idea-3", 0.7, ideaTextTrans)
//     .to(".idea-3 strong", 0.5, {
//       scale: 1.2,
//       x: 10,
//       backgroundColor: "rgb(21, 161, 237)",
//       color: "#fff",
//     })
//     .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
//     .from(".idea-4", 0.7, ideaTextTrans)
//     .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
//     .from(
//       ".idea-5",
//       0.7,
//       {
//         rotationX: 15,
//         rotationZ: -10,
//         skewY: "-5deg",
//         y: 50,
//         z: 10,
//         opacity: 0,
//       },
//       "+=0.5"
//     )
//     .to(
//       ".idea-5 .smiley",
//       0.7,
//       {
//         rotation: 90,
//         x: 8,
//       },
//       "+=0.4"
//     )
//     .to(
//       ".idea-5",
//       0.7,
//       {
//         scale: 0.2,
//         opacity: 0,
//       },
//       "+=2"
//     )
//     .staggerFrom(
//       ".idea-6 span",
//       0.8,
//       {
//         scale: 3,
//         opacity: 0,
//         rotation: 15,
//         ease: Expo.easeOut,
//       },
//       0.2
//     )
//     .staggerTo(
//       ".idea-6 span",
//       0.8,
//       {
//         scale: 3,
//         opacity: 0,
//         rotation: -15,
//         ease: Expo.easeOut,
//       },
//       0.2,
//       "+=1"
//     )
//     .staggerFromTo(
//       ".baloons img",
//       2.5,
//       {
//         opacity: 0.9,
//         y: 1400,
//       },
//       {
//         opacity: 1,
//         y: -1000,
//       },
//       0.2
//     )
//     .from(
//       ".lydia-dp",
//       0.5,
//       {
//         scale: 3.5,
//         opacity: 0,
//         x: 25,
//         y: -25,
//         rotationZ: -45,
//       },
//       "-=2"
//     )
//     .from(".hat", 0.5, {
//       x: -100,
//       y: 350,
//       rotation: -180,
//       opacity: 0,
//     })
//     .staggerFrom(
//       ".wish-hbd span",
//       0.7,
//       {
//         opacity: 0,
//         y: -50,
//         // scale: 0.3,
//         rotation: 150,
//         skewX: "30deg",
//         ease: Elastic.easeOut.config(1, 0.5),
//       },
//       0.1
//     )
//     .staggerFromTo(
//       ".wish-hbd span",
//       0.7,
//       {
//         scale: 1.4,
//         rotationY: 150,
//       },
//       {
//         scale: 1,
//         rotationY: 0,
//         color: "#ff69b4",
//         ease: Expo.easeOut,
//       },
//       0.1,
//       "party"
//     )
//     .from(
//       ".wish h5",
//       0.5,
//       {
//         opacity: 0,
//         y: 10,
//         skewX: "-15deg",
//       },
//       "party"
//     )
//     .staggerTo(
//       ".eight svg",
//       1.5,
//       {
//         visibility: "visible",
//         opacity: 0,
//         scale: 80,
//         repeat: 3,
//         repeatDelay: 1.4,
//       },
//       0.3
//     )
//     .to(".six", 0.5, {
//       opacity: 0,
//       y: 30,
//       zIndex: "-1",
//     })
//     .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
//     .to(
//       ".last-smile",
//       0.5,
//       {
//         rotation: 90,
//       },
//       "+=1"
//     );

//   // tl.seek("currentStep");
//   // tl.timeScale(2);

//   // Restart Animation on click
//   const replyBtn = document.getElementById("replay");
//   replyBtn.addEventListener("click", () => {
//     tl.restart();
//   });
// };

// // Run fetch and animation in sequence
// fetchData();

export default Birthday;
