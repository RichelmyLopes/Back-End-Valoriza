import {Router} from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import {CreateTagController} from "./controllers/CreateTagController";
import { ensureAdmin } from './middlewares/ensureAdmin';
import {AuthenticateUserController} from "./controllers/AuthenticateUserController";
import { CreateComplimentsController } from "./controllers/CreateComplimentsControllers";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import {ListTagsController} from "./controllers/ListTagsController";
import {ListAllUsersController} from "./controllers/ListAllUsersController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const complimentController = new CreateComplimentsController();
const userReceiverController = new ListUserReceiverComplimentsController();
const userSendController = new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();
const listAllUsersController = new ListAllUsersController();

router.post("/tags",ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post("/users",createUserController.handle)
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, complimentController.handle);
router.get("/users/compliments/send", ensureAuthenticated, userSendController.handle);
router.get("/users/compliments/receiver", ensureAuthenticated, userReceiverController.handle);
router.get("/listTags", ensureAuthenticated, listTagsController.handle)
router.get("/listAllUsers", ensureAuthenticated, listAllUsersController.handle);
export {router};