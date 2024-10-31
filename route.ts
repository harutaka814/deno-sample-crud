import { Router } from "jsr:@oak/oak/router";
import { createUser, getUsers } from "./controllers/UserController.ts";

const router = new Router();
const port = 8000;
console.log(`Server running on port ${port}`);

router.get("/api/v1/users", getUsers).post("/api/v1/users", createUser);

export default router;
