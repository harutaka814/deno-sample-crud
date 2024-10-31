import { MongoClient } from "https://deno.land/x/mongo@v0.33.0/mod.ts";

import { load } from "https://deno.land/std@0.203.0/dotenv/mod.ts";

await load({ export: true });
const mongoDbUrl: string = Deno.env.get("MONGO_DB_URL") ?? "";

console.log(mongoDbUrl);
const dbName: string = Deno.env.get("MONGO_DB_NAME") ?? "";

const client = new MongoClient();

await client.connect(mongoDbUrl);

const db = client.database(dbName);

export default db;
