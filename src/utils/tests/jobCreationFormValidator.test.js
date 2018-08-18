import jobCreationFormValidator from '../jobCreationFormValidator';

describe('jobCreationFormValidator', () => {
  it('should return true for a valid object', () => {
    expect(jobCreationFormValidator({
      title: 'Test string of long length',
      company: 'Test Company',
      salary: '$40,000',
      acceptedToS: true,
    })).toEqual(true);
  });

  it('should return false when no object provided', () => {
    expect(jobCreationFormValidator()).toEqual(false);
  });

  it('should return false when the title is less than 10 chars long', () => {
    expect(jobCreationFormValidator({
      title: 'Test',
      company: 'Test Company',
      salary: '$40,000',
      acceptedToS: true,
    })).toEqual(false);
  });

  it('should return false no salary is provided', () => {
    expect(jobCreationFormValidator({
      title: 'Test',
      company: 'Test Company',
      salary: '',
      acceptedToS: true,
    })).toEqual(false);
  });

  it('should return false no company is provided', () => {
    expect(jobCreationFormValidator({
      title: 'Test',
      company: '',
      salary: '$40,000',
      acceptedToS: true,
    })).toEqual(false);
  });

  it('should return false no ToS are not accepted', () => {
    expect(jobCreationFormValidator({
      title: 'Test',
      company: '',
      salary: '$40,000',
      acceptedToS: false,
    })).toEqual(false);
  });
});

