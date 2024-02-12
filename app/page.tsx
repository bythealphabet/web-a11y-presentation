export default function Home() {
  return (
    <main
      className="sub-grid"
      style={{
        gridColumn: "1 / -1",
        gridRow: "1 / -1",
      }}
    >
      <div
        style={{
          gridColumn: "1 / -1",
          height: "100vh",
          width: "100%",
          backgroundImage:
            "url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </main>
  );
}
