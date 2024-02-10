"use client";
import pptxgen from "pptxgenjs";

function Pptgenerator({ article, children }) {
  const pptx = new pptxgen();

  async function generatePresentation() {
    const presentationData = article;
    presentationData.topics.forEach((topic) => {
      let slide = pptx.addSlide();
      slide.addText(topic.title, {
        x: 0.5,
        y: 0.5,
        fontSize: 18,
        color: "363636",
      });
      if (topic.content) {
        slide.addText(topic.content, {
          x: 0.5,
          y: 1,
          fontSize: 14,
          color: "363636",
        });
      }
      if (topic.image && topic.image.url) {
        slide.addImage({ path: topic.image.url, x: 0.5, y: 1.5, w: 5, h: 3 });
      }
    });
    pptx.writeFile({ fileName: `${presentationData.title}.pptx` });
  }
  return <>{children}</>;
}

export default Pptgenerator;
