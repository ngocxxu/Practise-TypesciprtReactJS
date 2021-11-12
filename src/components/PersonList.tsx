type PersonListProps = {
  nameList: {
    first: string;
    last: string;
  }[];
};
export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h2>Bin</h2>
      <h2>Den</h2>
      <h2>Soc</h2>
      {props.nameList.map((name) => {
        return (
          <div key = {name.first}>
            {name.first}
            <h2>{name.last}</h2>
          </div>
        );
      })}
    </div>
  );
};
