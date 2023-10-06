import { addUser, deleteUser, getAllUsers, login, signup, updateUser } from "../controllers/user-controller";
import express from express;

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRoutes.post('/signup',signup )
userRoutes.get('/:id',getUserById)
userRoutes.put('/:id',updateUser)
userRoutes.delete('/:id', deleteUser)
userRoutes.post('/login',login)


export default userRouter;