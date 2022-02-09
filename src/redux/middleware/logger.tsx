export const logger =
  (store: any) => (next: (arg0: any) => void) => (action: any) => {
    console.log("_Middleware :", action);
    next(action);
  };
