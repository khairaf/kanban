import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContextMenu, MenuItem } from 'react-contextmenu';

export default class TitleMenu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, data) {
    if (data.action === 'delete') {
      this.props.deleteStart(data.type, data.parent);
    } else if (data.action === 'edit') {
      this.props.editStart(data.type, data.parent);
    }
  }

  render() {
    const column = this.props.column || '';
    const type = this.props.type;
    const index = this.props.index;
    const parent = { index, column };
    return (
      <ContextMenu id={this.props.id}>
        <MenuItem data={{ action: 'edit', type, parent }} onClick={this.handleClick}>
          Edit
        </MenuItem>
        <MenuItem data={{ action: 'delete', type, parent }} onClick={this.handleClick}>
          Delete
        </MenuItem>
      </ContextMenu>
    );
  }
}

TitleMenu.propTypes = {
  editStart: PropTypes.func.isRequired,
  deleteStart: PropTypes.func.isRequired,
  column: PropTypes.string,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

TitleMenu.defaultProps = {
  column: '',
};
