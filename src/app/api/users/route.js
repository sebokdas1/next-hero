export async function GET() {
  return Response.json({
    users,
  });
}

export async function POST(request) {
  const newUser = await request.json();
  users.push({
    id: users.length + 1,
    name: newUser.name,
  });
  return Response.json({
    message: "new user added",
    users,
  });
}

const users = [
  {
    id: 1,
    name: "rahim",
  },
  {
    id: 2,
    name: "sahid",
  },
  {
    id: 3,
    name: "sebok",
  },
  {
    id: 4,
    name: "abdul",
  },
];
