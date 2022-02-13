export const logger = (store: any) => (next: (arg0: any) => void) => (action: any) => {
  process.env.NODE_ENV === "development" && console.log("_Middleware :", action);
  next(action);
};
