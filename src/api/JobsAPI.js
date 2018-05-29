import jobs from '../data/jobs';

export default {
  getJobs: () => new Promise(resolve =>
    setTimeout(() => resolve(jobs), 1)
  ),
};
