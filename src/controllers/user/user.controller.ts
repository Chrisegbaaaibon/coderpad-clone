import {TryCatchAsyncFn, SuccessResponse, DRequest, DResponse} from "@dolphjs/dolph/common";
import {UserModel} from "../../models/user/user.model";


export const defaultFunc = TryCatchAsyncFn(async (req: DRequest, res: DResponse) => {
  const {name, email, password} = req.body;
  const user = new UserModel({name, email, password});
  await user.save();
  SuccessResponse({res, body: {message: "user working!"}});
});



