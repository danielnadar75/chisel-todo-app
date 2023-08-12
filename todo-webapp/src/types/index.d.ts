declare type TodoServerResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};
