export const DividerUI = ({
  width = "100%",
  color = "#CCCCC",
  thick = "1px",
}: {
  width?: string;
  color?: string;
  thick?: string;
}) => {
  return (
    <div
      className="divider mx-auto my-4 rounded-b-md"
      style={{ width, borderBottom: `${thick} solid ${color}` }}
    ></div>
  );
};
