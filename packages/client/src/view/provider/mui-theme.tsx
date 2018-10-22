import React, { PureComponent } from 'react';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { mobileDetect } from 'client/src/view/common/mobile-detect';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: grey,
  },
  overrides: {
    MuiInputLabel: {
      shrink: {
        fontSize: '18px',
        fontWeight: 'bold',
      },
    },
    MuiTablePagination: {
      actions: {
        marginLeft: 0,
      },
      selectRoot: {
        marginRight: 15,
      },
      spacer: {
        flex: 0,
      },
      caption: {
        flexGrow: 0,
        flexBasis: 'auto',
        minWidth: 85,
      },
      toolbar: {
        paddingLeft: 0,
        justifyContent: 'flex-end',
      },
    },
    MuiIconButton: {
      root: mobileDetect.phone() ? ({
        '&:hover': {
          backgroundColor: 'unset',
        },
      }) : {},
    },
  },
  props: {
    MuiButtonBase: {
    },
    MuiMenuItem: {
      disableRipple: Boolean(mobileDetect.phone()),
      disableTouchRipple: Boolean(mobileDetect.phone()),
    },
    MuiCheckbox: {
      disableRipple: Boolean(mobileDetect.phone()),
      disableTouchRipple: Boolean(mobileDetect.phone()),
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export class MuiTheme extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { children } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    );
  }
}
