import UserRole from '../enums/UserRole';

export default {
  loginMocked: ({ username }) => new Promise(resolve =>
    setTimeout(() => resolve({
      success: true,
      response: {
        data: {
          username,
          sessionToken: 'pf2oi86edebfc8zffedfi5xb9m2e028baneb4uldb6e2af0ye8acbe8ag68f60z28ffeag0t0',
          id: username === 'admin' ? '35f7b2c8-9965-4682-831b-8071d9785242' : 'b237f1f2-455c-476b-bcbb-66a92c0fc7e2',
          role: username === 'admin' ? UserRole.ADMIN : UserRole.USER,
        }
      },
    }), 2000)
  ),
  loginMockedError: () => new Promise(resolve =>
    setTimeout(() => resolve({
      success: false,
      error: 'Username or password is incorrect. Please try again!',
    }), 2000)
  ),
  checkSessionTokenMocked: () => new Promise(resolve =>
    setTimeout(() => resolve({
      success: true,
    }), 1)
  ),
  checkSessionTokenMockedError: () => new Promise(resolve =>
    setTimeout(() => resolve({
      success: false,
    }), 1)
  ),
};
