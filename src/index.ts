import { printSomething } from './anotherFile';

console.log('hello world');

printSomething('new string from function in another file');

// Node says that when importing from commonjs you only can bring 
// const pg = require('pg'); // That works is we change Typescript and Node to use regular commonjs
// import * as pg from 'pg'; // Won't work as this does equal this that:
import pg from 'pg';
const { Pool } = pg;

async function main() {

  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "test",
    password: "test",
    port: 5432
  });
  
  // second bonus is to try to move this into Top level await
  let res = await pool.query(`
    SELECT 1+1
  `);
  
  console.log(res.rows[0]);
}

main()
    .catch(e => console.error(e));


