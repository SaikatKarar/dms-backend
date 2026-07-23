import { create } from "json-server";

const server = await create();

const PORT = process.env.PORT || 10000;

server.listen(PORT, () => {
    console.log(`JSON Server running on ${PORT}`);
});