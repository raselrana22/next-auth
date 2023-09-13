import Link from "next/link";

export default function Buttons() {
  return (
    <div>
      <Link href={"/"}>
        <button>Home</button>
      </Link>
      <br />
      <Link href={"login"}>
        <button>Login</button>
      </Link>
      <br />
      <Link href={"/logout"}>
        <button>Logout</button>
      </Link>
    </div>
  );
}
