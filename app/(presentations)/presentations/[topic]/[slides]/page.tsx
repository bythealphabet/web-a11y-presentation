import clsx from "clsx";
import { useEffect, useState } from "react";
import pptxgen from "pptxgenjs";
import { markdownToIPresentation } from "@/containers/markdownToIPresentation";

async function generatePresentation(filePath) {
  const pres = new pptxgen();
  const presentationData = await markdownToIPresentation(filePath);

  presentationData.topics.forEach((topic) => {
    let slide = pres.addSlide();

    slide.addShape(pres.ShapeType.rect, {
      x: 0.5,
      y: 0.5,
      w: 10,
      h: 7,
      fill: {
        color: "#2345ff",
      },
    });

    // slide.addText(topic.title, {
    //   x: 0.5,
    //   y: 0.5,
    //   fontSize: 18,
    //   color: "363636",
    // });

    // if (topic.content) {
    //   slide.addText(topic.content, {
    //     x: 0.5,
    //     y: 1,
    //     fontSize: 14,
    //     color: "363636",
    //   });
    // }
    // if (topic.image && topic.image.url) {
    //   slide.addImage({ path: topic.image.url, x: 0.5, y: 1.5, w: 5, h: 3 });
    // }
  });

  pres.writeFile({ fileName: `${presentationData.title}.pptx` });
}

// function SlideGenerator({ params }) {
//   const [filePath, setFilePath] = useState("");

//   useEffect(() => {
//     if (params.topic) {
//       const path = `/presentations/${params.topic}/${params.slides}.md`;
//       setFilePath(path);
//       generatePresentation(path);
//     }
//   }, [params]);

//   return <p>Generating slides for {params.topic}</p>;
// }

// export default SlideGenerator;

async function Slide() {
  // generatePresentation(`introduction-web-a11y`).then((data) => {
  //   console.log("data", data);
  // });
  return <></>;
}

export default Slide;
