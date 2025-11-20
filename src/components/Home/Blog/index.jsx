import { ArrowRight } from "lucide-react";
import { Container } from "react-bootstrap";
import pfp from "../../../assets/review-pfp.png";
import blogImg from "../../../assets/blog.png";
import "./index.scss";

const blogs = [
  {
    img: blogImg,
    pfp: pfp,
    date: "12/05/25",
    author: "Raphaëlle",
    title: "Les meilleures croisières fluviales à découvrir en 2025",
    link_text: "Lire l'article",
  },
  {
    img: blogImg,
    pfp: pfp,
    date: "12/05/25",
    author: "Raphaëlle",
    title: "Les meilleures croisières fluviales à découvrir en 2025",
    link_text: "Lire l'article",
  },
  {
    img: blogImg,
    pfp: pfp,
    date: "12/05/25",
    author: "Raphaëlle",
    title: "Les meilleures croisières fluviales à découvrir en 2025",
    link_text: "Lire l'article",
  },
];

export default function Blog() {
  return (
    <Container as="section" className="blog-section">
      <h3>Le Blog Riverly</h3>
      <a className="action" href="/">
        Tous nos articles <ArrowRight size={16} />
      </a>
      <div className="blogs">
        {blogs.map((b, idx) => {
          return <BlogTile key={idx} {...b} />;
        })}
      </div>
    </Container>
  );
}

const BlogTile = ({ img, pfp, date, author, title, link_text }) => {
  return (
    <div className="blog">
      <img className="banner" src={img} alt="blog banner" />
      <div className="top">
        <div className="left">
          <img src={pfp} alt="profile of user" />
          <span>{author}</span>
        </div>
        <span className="right">{date}</span>
      </div>
      <h4>{title}</h4>
      <a href="/">
        {link_text} <ArrowRight size={16} />
      </a>
    </div>
  );
};
