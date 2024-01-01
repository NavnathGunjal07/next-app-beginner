interface User {
  id: string;
  name: string;
}
const UserPage = async () => {
  //caching is by default available in next
  // you can controll caching but only by using fetch
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <div>
      UserPage
      <div>
        <ul>
          {users.map((item, i) => (
            <li key={i}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserPage;
