"use client";
import clsx from "clsx";
import styles from "./slide.module.scss";
import pptxgen from "pptxgenjs";
import {
  slidesModel1,
  // slidesModel2,
  // slidesModel3,
} from "@/containers/slidesModels"; // Assuming you have multiple models
import { useState } from "react";
import Modal from "../modal/modal";

function Slide({ article }: { article: any }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<number | null>(null);

  async function generatePresentation() {
    const pres = new pptxgen();
    let slide = pres.addSlide();

    switch (selectedStyle) {
      case 1:
        slide = slidesModel1({ slide, article, pres });
        break;
      // case 2:
      //   slide = slidesModel2({ slide, article, pres }); // Assuming slidesModel2 exists
      //   break;
      // case 3:
      //   slide = slidesModel3({ slide, article, pres }); // Assuming slidesModel3 exists
      //   break;
      default:
        console.error("No style selected");
        return;
    }

    pres.writeFile({ fileName: `${article.link.label}.pptx` });
  }

  const generatePresentationHandler = () => {
    setOpenDialog(true);
  };

  const handleSubmit = () => {
    generatePresentation();
    setOpenDialog(false); // Close the modal after submission
  };

  return (
    <section className={clsx("base-grid", styles.presentation)}>
      <p className={clsx(styles.slideTopic)}>{article.topics[0].title}</p>
      <h3>{article.title}</h3>
      <figure className={styles.presentationFigure}>
        <img src={`/${article.image.url}`} alt={article.image.alt} />
      </figure>
      <p className={clsx(styles.slideTopicText)}>{article.description}</p>
      <button className="btn" onClick={generatePresentationHandler}>
        Generate Slide
      </button>

      <Modal isOpen={openDialog} onClose={() => setOpenDialog(false)}>
        <div className={clsx(styles.dialogContainer, "base-grid")}>
          <h3>Choose a style you would like to generate</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            {[1, 2, 3].map((model) => (
              <label key={model}>
                <input
                  type="radio"
                  name="slideStyle"
                  value={model}
                  onChange={() => setSelectedStyle(model)}
                />
                Style {model}
              </label>
            ))}
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </Modal>
    </section>
  );
}

export default Slide;
