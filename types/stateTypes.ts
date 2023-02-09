export interface ModalState {
  registerModal: boolean;
  loginModal: boolean;
  forgotPassword: boolean;
  checkEmail: boolean;
  resetPassword: boolean;
  passwordChanged: boolean;
  verificationNotif: boolean;
  verificationVerify: boolean;
  addMovieModal: boolean;
  addEmailModal: boolean;
  updateUsernameModal: boolean;
  confirmChangesModal: boolean;
  updatePasswordModal: boolean;
  confirmPasswordModal: boolean;
  updateEmailsModal: boolean;
  addNewEmailModal: boolean;
}

export interface UserState {
  name: string;
  email: string;
  id: string;
  image: string;
}

export interface RootState {
  modal: ModalState;
  user: UserState;
}
