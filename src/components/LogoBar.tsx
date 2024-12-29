import "../style/Home.css";

function LogoBar() {
  const logos = [
    "edutorij2.png",
    "thinkific2.png",
    "teachable2.png",
    "udemy2.png",
    "khanacademy2.png",
    "googleclass2.png",
    "moodle2.png",
    "loomen2.png",
  ];

  return (
    <div className="logoBar">
      {logos.map((logo) => (
        <img
          key={logo}
          src={`/images/${logo}`}
          alt="logo edu portal"
          className="logoBar-img"
        />
      ))}
    </div>
  );
}

export default LogoBar;
