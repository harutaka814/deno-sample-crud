import UserService from "../services/UserService.ts";

const userService = new UserService();

// @desc    Get all users
// @route   GET /api/v1/users
export const getUsers = async ({ response }: { response: any }) => {
  response.body = await userService.getUsers();
};

// @desc    Create a user
// @route   POST /api/v1/users
export const createUser = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid user data" };
    return;
  }

  console.log(request);
  console.log(request.body);
  //   console.log(await request.body.formData());
  console.log(await request.body.json());
  //   console.log(await request.body());
  const value = await request.body.json();
  console.log(value.name, value.age);
  const userId = await userService.createUser({
    name: value.name,
    age: value.age,
  });
  response.body = { msg: "User created successfully", userId };
  response.status = 201;
};
