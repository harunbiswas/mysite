import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ data }) {
  const { img, link, title } = data;
  return (
    <div className="blog-card">
      <div className="blog-card-img">
        <Link target="_blank" href={link}>
          <Image src={img} alt={title} width={100000} height={100000} />
        </Link>
      </div>
      <Link target="_blank" href={link}>
        <h1>{title}</h1>
      </Link>
    </div>
  );
}
