import { Button } from "react-bootstrap";

export default function ScrollCard({ img, alt = "offer", title, content }) {
  return (
    <div className="scroll-card">
      <div className="left">
        <img className="rounded-2" src={img} alt={alt} />
      </div>
      <div as="div" className="right">
        <h3>{title}</h3>
        <p>{content}</p>
        <Button>J'en profite</Button>
      </div>
    </div>
  );
}
