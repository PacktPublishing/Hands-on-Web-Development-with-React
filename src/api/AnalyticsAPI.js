import analytics from '../data/analytics';

export default {
  getAnalyticsMocked: () => new Promise(resolve =>
    setTimeout(() => resolve({
      success: true,
      response: {
        data: analytics,
      },
    }), 2000)
  ),
};
