import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {activeItem: null};

      this._handleItemChange = this._handleItemChange.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          onActiveItemChange={this._handleItemChange}
        />
      );
    }

    _handleItemChange(item) {
      this.setState({activeItem: item});
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
