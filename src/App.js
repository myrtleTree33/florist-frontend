import React, { Component } from 'react';
import { Link, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Icon, Dropdown, Layout, Menu, Popover, Row, Col } from 'antd';
import { connect } from 'react-redux';

import { userLogin, userLogout } from './redux/actions/userActions';

import HomeScreen from './screens/Home';
import CvScreen from './screens/Cv';
import LoginScreen from './screens/Login';
import SignupScreen from './screens/Signup';
import CartWidgetScreen from './screens/CartWidget';
import CartScreen from './screens/Cart';
import ProfileScreen from './screens/Profile';

import './App.css';

const { Header, Content, Footer } = Layout;

function isAuthenticated() {
  return localStorage.getItem('auth');
}

/**
 * Allows the creation of a protected route, if the user is not signed in.
 * @param {*} param0
 */
const PrivateRoute = ({ component: Component, ...rest }) => {
  // TODO refactor this if needed
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { handleLogout } = this.props;

    const loginMenu = (
      <Menu>
        <Menu.Item>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </Menu.Item>
      </Menu>
    );

    return (
      <div className="App">
        <Layout className="layout" style={{ minHeight: '100vh' }}>
          <div
            style={{
              textAlign: 'center',
              fontSize: '0.8em',
              color: '#fff',
              background: '#121212'
            }}
          >
            Promotional items go here
          </div>
          <Header
            style={{
              background: '#fff'
            }}
          >
            {/* <div
              className="logo"
              style={{
                width: '5rem',
                background: '#f00',
                float: 'left'
              }}
            >
              Logo
            </div> */}
            <Menu
              theme="light"
              mode="horizontal"
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/cv">CV</Link>
              </Menu.Item>
              {isAuthenticated() ? (
                <Menu
                  style={{
                    float: 'right',
                    lineHeight: '64px'
                  }}
                >
                  <Menu.Item key="9.1">
                    <Popover
                      content={<CartWidgetScreen />}
                      placement="bottomRight"
                    >
                      <Link to="/cart">
                        <Icon
                          type="shopping-cart"
                          style={{ fontSize: '1.2rem' }}
                        />
                      </Link>
                    </Popover>
                  </Menu.Item>

                  <Menu.Item key="9.2">
                    <Dropdown overlay={loginMenu} placement="bottomCenter">
                      <a className="ant-dropdown-link" href="#">
                        <Link to="/profile">
                          <Icon type="user" style={{ fontSize: '1.2rem' }} />
                        </Link>
                      </a>
                    </Dropdown>
                  </Menu.Item>
                </Menu>
              ) : (
                <Menu
                  style={{
                    float: 'right',
                    lineHeight: '64px'
                  }}
                >
                  <Link to="/login">Login</Link>
                </Menu>
              )}
            </Menu>
          </Header>
          <Content
            style={{
              padding: '0 0'
            }}
          >
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <PrivateRoute path="/cv" component={CvScreen} />
              <Route path="/cart" component={CartScreen} />
              <Route path="/login" component={LoginScreen} />
              <Route path="/signup" component={SignupScreen} />
              <PrivateRoute path="/profile" component={ProfileScreen} />
            </Switch>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              margin: '2rem 0 1rem 0'
            }}
          >
            <Row
              gutter={16}
              style={{
                textAlign: 'left',
                fontSize: '.8em'
              }}
            >
              <Col className="gutter-row" span={6}>
                <div
                  className="gutter-box"
                  style={{
                    marginBottom: '.5rem'
                  }}
                >
                  <b>General</b>
                </div>
                <Link to="/about" className="footerLink">
                  <div className="gutter-box">About us</div>
                </Link>
                <Link to="/" className="footerLink">
                  <div className="gutter-box">Privacy policy</div>
                </Link>
                <Link to="/" className="footerLink">
                  <div className="gutter-box">Refund policy</div>
                </Link>
                <Link to="/" className="footerLink">
                  <div className="gutter-box">Terms of service</div>
                </Link>
              </Col>
              <Col className="gutter-row" span={6}>
                <div
                  className="gutter-box"
                  style={{
                    marginBottom: '.5rem'
                  }}
                >
                  <b>Collections</b>
                </div>
                <Link to="/" className="footerLink">
                  <div className="gutter-box">For her</div>
                </Link>
                <Link to="/" className="footerLink">
                  <div className="gutter-box">For him</div>
                </Link>
                <Link to="/" className="footerLink">
                  <div className="gutter-box">Graduation</div>
                </Link>
              </Col>
              <Col className="gutter-row" span={6}>
                <div
                  className="gutter-box"
                  style={{
                    marginBottom: '.5rem'
                  }}
                >
                  <b>Products</b>
                </div>
                <Link to="/" className="footerLink">
                  <div className="gutter-box">Fresh flowers</div>
                </Link>
                <Link to="/" className="footerLink">
                  <div className="gutter-box">Dried flowers</div>
                </Link>
              </Col>
              <Col className="gutter-row" span={6}>
                <div
                  className="gutter-box"
                  style={{
                    marginBottom: '.5rem'
                  }}
                >
                  <b>Let us help you</b>
                </div>
                <Link to="/profile" className="footerLink">
                  <div className="gutter-box">My account</div>
                </Link>
                <Link to="/" className="footerLink">
                  <div className="gutter-box">Contact us</div>
                </Link>
              </Col>
            </Row>
            <div
              style={{
                marginTop: '3.2rem'
              }}
            >
              Made in Singapore
            </div>
          </Footer>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    handleLogout: () => dispatch(userLogout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
