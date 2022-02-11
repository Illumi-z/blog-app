import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
};

const lists = ({ users }) => {
  return (
    <div>
      <h1>All Lists</h1>
      {users.map((user) => (
        <Link href={"./lists/" + user.id} key={user.id}>
          <h4 className="my-2 mx-4 p-12 bg-red-100">{user.name}</h4>
        </Link>
      ))}
    </div>
  );
};

export default lists;
