import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {activeItem: null};

      this._onItemChange = this._onItemChange.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          onActiveItemChange={this._onItemChange}
        />
      );
    }

    _onItemChange(item) {
      this.setState({activeItem: item});
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
