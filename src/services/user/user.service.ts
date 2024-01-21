
import { TryCatchAsyncFn } from "@dolphjs/dolph/common";

export const defaultuserService = TryCatchAsyncFn(async (data: string) => {
  return { data };
});

