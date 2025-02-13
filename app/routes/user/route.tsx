import type { User } from "@prisma/client";
import { useLoaderData } from "@remix-run/react";
import db from "~/service/db";

export async function loader() {
  const user = await db.user.findMany();
  return { items: user };
}

export default function User() {
  const { items } = useLoaderData<{ items: User[] }>();
  return (
    <div>
      {items.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
}