import connect from 'connect';
import path from 'path';
import serveStatic from 'serve-static';
import { env } from './scripts/env';
alert('app.ts verificar puerto');
const port: number = env.PORT;
alert(port);

connect()
	.use(serveStatic(path.join(__dirname, '../../../')))
	.listen(port);
console.log(`listening on ${port}`);
