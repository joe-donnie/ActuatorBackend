    import express from 'express';
    import dotenv from 'dotenv';
    dotenv.config();

    import userRouter from './router/userRouter.js'
    import connectDatabase from './config/db.js';
    import authRouter from './router/authRouter.js'
    import valveRouter from './router/valveRouter.js' 
    import actuatorDataRouter from './router/actuatorDataRouter.js';
    import formRouter from './router/formRouter.js';
    import cors from 'cors';

    connectDatabase();

    const app = express();

   app.use(
  cors({
    origin: "https://actuatorprojectksb.vercel.app", // ✅ allow only this origin
    credentials: true, // if you're using cookies or authorization headers
  })
);

    app.use(express.json());

    app.use('/api/users', userRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/valve', valveRouter);
    app.use('/api/data', actuatorDataRouter);
    app.use('/api/form', formRouter);
    const PORT = 5000;
    app.listen(PORT, () => console.log(`Server started on ${PORT} `));
