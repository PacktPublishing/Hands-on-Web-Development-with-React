import jobs from '../data/jobs';
import NetworkService from './NetworkService';

export default {
  getJobsMocked: () => new Promise(resolve =>
    setTimeout(() => resolve({
      success: true,
      response: { data: jobs },
    }), 1)
  ),
  getJobsMockedError: () => new Promise(resolve =>
    setTimeout(() => resolve({
      success: false,
      error: 'There was an error loading job offers. Please try again later!',
    }), 1)
  ),
  getJobs: async () => {
    return await NetworkService.get('/jobs');
  },
  addJobMocked: () => new Promise(resolve =>
    setTimeout(() => resolve({
      success: true,
      response: { data: { unid: 'a6bddb5a-a6a1-130a-4c1c-1a7ae01baeb1' } },
    }), 1)
  ),
  addJobMockedError: () => new Promise(resolve =>
    setTimeout(() => resolve({
      success: false,
      error: 'The server is currently busy. Please try again!',
    }), 1)
  ),
};
