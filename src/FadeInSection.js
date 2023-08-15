import { useEffect, useRef, useState } from "react";
import "./styles/fadeInSection.css";

export const FadeInSection = (props) => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef();

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });
    observer.observe(ref.current);

    return () => observer.unobserve(currentRef);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={ref}
    >
      {props.children}
    </div>
  );
};
