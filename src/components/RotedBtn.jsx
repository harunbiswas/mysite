import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsArrowDown } from "react-icons/bs";

export default function RotedBtn() {
  const ref = useRef();
  let text = "My all projects that I done. ";
  text = text.split("");
  const [rotate, setRotate] = useState(1);

  useEffect(() => {
    const items = ref.current.childNodes;
    items.forEach((item, i) => {
      item.style.transform = ` rotate(${
        (360 / items.length) * i
      }deg) translateX(0%) translateY(100%) `;
    });

    const intervalId = setInterval(() => {
      ref.current.style.transform = `rotate(${rotate}deg)`;
      setRotate(rotate + 0.3);
    }, 1);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, rotate]);

  return (
    <Link href="#portfolios" className="roted-btn">
      <div ref={ref} className="roted-btn-wrp">
        {text.map((t, i) => (
          <span key={i} className="text">
            {t}
          </span>
        ))}
      </div>

      <div className="icon">
        <BsArrowDown />
      </div>
    </Link>
  );
}
