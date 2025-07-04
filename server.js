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

   app.use(cors({
    origin: "*", // ✅ allow only this origin
    credentials: true, // if you're using cookies or authorization headers
  })
);

    app.use(express.json());

    app.use('/api/users', userRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/valve', valveRouter);
    app.use('/api/data', actuatorDataRouter);
    app.use('/api/form', formRouter);
    
    app.get("/", (req, res) => {
  res.send("Actuator Backend is live ✅");
});

// Vercel expects this export
export default app;
