type OscarProps = {
  children: React.ReactNode;
};
export const Oscar = (props: OscarProps) => {
  return (
    <div>
      Oscar has a pencil on a table
      <div>{props.children}</div>
    </div>
  );
};
