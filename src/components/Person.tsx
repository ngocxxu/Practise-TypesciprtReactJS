type PersonProps = {
  name: {
    first: string,
    last: string,  
  }
}
export const Person = (props: PersonProps) => {
  return <div>Bono Quach & {props.name.first} {props.name.last}</div>;
};
