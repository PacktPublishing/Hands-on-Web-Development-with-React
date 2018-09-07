import React from 'react';
import styled from 'styled-components';
import JobsAPI from '../api/JobsAPI';
import JobListElementHoC from '../components/JobListElement';
import ExternalLink from '../components/ExternalLink';
import SubtleErrorBox from '../components/SubtleErrorBox';
import Spinner from '../components/Spinner';

const JobListElement = JobListElementHoC(false, false);

const Background = styled.div`
  width: 100%;
  height: 620px;
  background-image: url(${props => props.promoImageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > a {
    width: 60%;
  }
`;

export default class JobPage extends React.Component {
  state = {
    loading: false,
    job: undefined,
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    const { success, response, error } = await JobsAPI.getJobMocked(
      this.props.match.params.slug
    );
    if (success) {
      this.setState({
        job: response.data,
        loading: false,
        error: undefined,
      });
    } else {
      this.setState({
        error,
        loading: false,
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }
    if (this.state.job) {
      return (
        <Background promoImageUrl={this.state.job.promoImageUrl}>
          <JobListElement
            {...this.state.job}
          />
          <ExternalLink href={this.state.job.applyAt}>
            Apply Now!
          </ExternalLink>
        </Background>
      );
    }
    if (this.state.error) {
      return <SubtleErrorBox label={this.state.error} />;
    }
    return <div></div>;
  }
}
