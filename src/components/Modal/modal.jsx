import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const Modal = ({
  modalText,
  headerText,
  children,
  leftButtonText,
  rightButtonText,
  leftButtonAction,
  rightButtonAction,
  isLoading
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const processAndClose = () => {
    rightButtonAction();
  };

  const cancelAndClose = () => {
    leftButtonAction();
  };

  return (
    <S.ModalBody>
      <S.Wrapper>
        <S.ModalContainer>
          {children || (
            <Fragment>
              {headerText && <S.Header>{headerText}</S.Header>}
              {modalText && <S.Text>{modalText}</S.Text>}
            </Fragment>
          )}
          <S.Buttons left={leftButtonText} right={rightButtonText}>
            {leftButtonText ? (
              <S.LeftButton
                type="button"
                white
                textColor="primary"
                onClick={cancelAndClose}
              >
                {leftButtonText || 'No'}
              </S.LeftButton>
            ) : null}
            {rightButtonText ? (
              <S.RightButton
                className="float-right"
                type="button"
                primary
                onClick={processAndClose}
              >
                {isLoading && (<i className="fas fa-circle-notch fa-spin" />)}
                {' '}
                {rightButtonText || 'Yes'}
              </S.RightButton>
            ) : null}
          </S.Buttons>
        </S.ModalContainer>
      </S.Wrapper>
    </S.ModalBody>
  );
};

Modal.propTypes = {
  leftButtonAction: PropTypes.func.isRequired,
  rightButtonAction: PropTypes.func.isRequired,
  children: PropTypes.node,
  modalText: PropTypes.string.isRequired,
  leftButtonText: PropTypes.string,
  rightButtonText: PropTypes.string,
  headerText: PropTypes.string
};

Modal.defaultProps = {
  children: null,
  leftButtonText: null,
  rightButtonText: null,
  headerText: null
};
export default Modal;
