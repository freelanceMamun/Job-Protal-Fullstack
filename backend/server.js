import { app } from './src/app';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log('JOB PORTAl Server Is Running');
});
