export function slidesModel1({ slide, article, pres }) {
  slide.background = { color: "#0d0d0d" };

  const slideBackground = {
    x: 0.1,
    y: 0.1,
    w: 9.8,
    h: 5.4,
    fill: {
      color: "FFFFFF",
    },
  };

  // Slide background
  slide.addShape(pres.ShapeType.rect, {
    ...slideBackground,
    rectRadius: 0.5,
  });

  slide.addText(article.title, {
    x: 1,
    y: 1,
    fontSize: 14,
    color: "363636",
  });

  slide.addText(article.topics[0].title, {
    x: 1,
    y: 1.4,
    fontSize: 20,
    color: "363636",
    bold: true,
  });

  slide.addText(article.description, {
    x: 1,
    y: 2.8,
    w: 4,
    fontSize: 16,
    color: "363636",
  });

  slide.addImage({
    path: "https://images.pexels.com/photos/14538648/pexels-photo-14538648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    x: 6,
    y: 1,
    w: 3,
    h: 3,
  });
  return slide;
}
