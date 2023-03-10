const Items = ({ items }) => {
  return (
    <ul className="flex flex-col md:flex-row gap-4 text-white flex-wrap">
      {items?.map((item) => (
        <li className="flex-1 bg-blue-300 md:max-w-md" key={item.id}>
          <div className="p-4">
            <h2 className="text-4xl font-bold">
              {item.name} (${item.price})
            </h2>
            <p className="italic">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Items;
