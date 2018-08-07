export default {
  loginMocked: ({ username }) => new Promise(resolve =>
    setTimeout(() => resolve({
      success: true,
      response: {
        data: {
          username,
          sessionToken: 'pf2oi86edebfc8zffedfi5xb9m2e028baneb4uldb6e2af0ye8acbe8ag68f60z28ffeag0t0'
        }
      },
    }), 1)
  ),
  loginMockedError: () => new Promise(resolve =>
    setTimeout(() => resolve({
      success: false,
      error: 'Username or password is incorrect. Please try again!',
    }), 1)
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
