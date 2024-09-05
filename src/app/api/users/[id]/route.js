export async function PATCH(request, { params }) {
  console.log(params);

  const body = await request.json();
  const index = users.findIndex((c) => c.id === parseInt(params.id));
  users[index] = {
    id: index + 1,
    name: body.name,
  };

  return Response.json({
    message: "user updated",
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
