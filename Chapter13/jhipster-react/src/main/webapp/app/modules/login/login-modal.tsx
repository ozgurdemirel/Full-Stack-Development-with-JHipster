import * as React from 'react';
import { Translate, translate } from 'react-jhipster';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Alert } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';

export interface ILoginModalProps {
  showModal: boolean;
  loginError: boolean;
  handleLogin: Function;
  handleClose: Function;
}

class LoginModal extends React.Component<ILoginModalProps> {
  handleSubmit = (event, errors, { username, password, rememberMe }) => {
    const { handleLogin } = this.props;
    handleLogin(username, password, rememberMe);
  };

  render() {
    const { loginError, handleClose } = this.props;

    return (
      <Modal isOpen={this.props.showModal} toggle={handleClose} backdrop="static" id="login-page">
        <AvForm onSubmit={this.handleSubmit}>
          <ModalHeader toggle={handleClose} id="login-title">
            <Translate contentKey="login.title" />
          </ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-md-12">
                {loginError ? (
                  <div className="alert alert-danger">
                    <Translate contentKey="login.messages.error.authentication" />
                  </div>
                ) : null}
              </div>
              <div className="col-md-12">
                <AvField
                  name="username"
                  label={<Translate contentKey="global.form.username" />}
                  placeholder={translate('global.form.username.placeholder')}
                  required
                  errorMessage="Username cannot be empty!"
                />
                <AvField
                  name="password"
                  type="password"
                  label={<Translate contentKey="login.form.password" />}
                  placeholder={translate('login.form.password.placeholder')}
                  required
                  errorMessage="Password cannot be empty!"
                />
                <AvGroup check>
                  <Label check for="rememberMe" className="form-check-label">
                    <AvInput type="checkbox" name="rememberMe" /> <Translate contentKey="login.form.rememberme" />
                  </Label>
                </AvGroup>
              </div>
            </div>
            <Alert color="warning">
              <Link to="/reset/request">
                <Translate contentKey="login.password.forgot" />
              </Link>
            </Alert>
            <Alert color="warning">
              <span>
                <Translate contentKey="global.messages.info.register.noaccount" />
              </span>{' '}
              <Link to="/register">
                <Translate contentKey="global.messages.info.register.link" />
              </Link>
            </Alert>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={handleClose} tabIndex="1">
              <Translate contentKey="entity.action.cancel" />
            </Button>{' '}
            <Button color="primary" type="submit">
              <Translate contentKey="login.form.button" />
            </Button>
          </ModalFooter>
        </AvForm>
      </Modal>
    );
  }
}

export default LoginModal;
