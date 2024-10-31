import { Application } from "jsr:@oak/oak/application";
import router from "./route.ts";

const port = 8000;
console.log(`Server running on port ${port}`);

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port });
