function SideBarHeading(props: {
  h_name: string;
  id: number;
  selectHead: (selHead: number) => void;
  selected: number;
}) {
  return (
    <div
      className={`sidebar-heading-div ${
        props.selected === props.id && "sidebar-heading-div-selected"
      }`}
      onClick={() => props.selectHead(props.id)}
    >
      <p>
        {props.id > 3
          ? `Tutorial ${props.id - 3} : ${props.h_name}`
          : props.h_name}
      </p>
    </div>
  );
}

export default SideBarHeading;
