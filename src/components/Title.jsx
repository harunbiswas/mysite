export default function Title({ data }) {
  return (
    <div className="title">
      {data.icon}
      <p>{data.text}</p>
    </div>
  );
}
