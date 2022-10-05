import { UserRow } from "../UserRow";

export const Main = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((n) => (
        <UserRow key={n} />
      ))}
    </div>
  );
};
