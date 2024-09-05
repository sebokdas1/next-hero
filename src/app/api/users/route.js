export async function GET() {
  return Response.json({
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
