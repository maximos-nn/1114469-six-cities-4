import React, {PureComponent} from "react";
import {getComponentDisplayName} from "../../utils";

const withToggle = (Component) => {
  class WithToggle extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {isActive: false};

      this._handleToggle = this._handleToggle.bind(this);
    }

    render() {
      return <Component {...this.props} toggle={this.state.isActive} onToggle={this._handleToggle} />;
    }

    _handleToggle() {
      this.setState((prevState) => ({isActive: !prevState.isActive}));
    }
  }

  WithToggle.displayName = `WithToggle(${getComponentDisplayName(Component)})`;

  return WithToggle;
};

export default withToggle;
