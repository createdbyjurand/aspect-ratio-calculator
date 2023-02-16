//dog.ceo/api/breeds/image/random/3
//dog.ceo/api/breed/hound/images
https: https: import React from 'react';

export function withFetch(WrappedComponent, requestUrl) {
  class WithFetch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

    // fetch functionality to populate this.state.data

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  }

  return WithFetch;
}
