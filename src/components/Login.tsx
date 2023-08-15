import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './Login.css';

const Login = () => {

    const formFields = {
        signIn: {
            username: {
                label: 'Email:',
                placeholder: 'Enter your email',
            },
        },
        signUp: {
            username: {
                label: 'Email:',
                placeholder: 'Enter your email',
                order: 1,
            },
            password: {
                label: 'Password:',
                placeholder: 'Enter your Password:',
                isRequired: false,
                order: 2,
            },
            confirm_password: {
                label: 'Confirm Password:',
                order: 3,
            },
        },
        forceNewPassword: {
            password: {
                placeholder: 'Enter your Password:',
            },
        },
        resetPassword: {
            username: {
                label: 'Email:',
                placeholder: 'Enter your email:',
            },
        },
        confirmResetPassword: {
            confirmation_code: {
                placeholder: 'Enter your Confirmation Code:',
                label: 'New Label',
                isRequired: false,
            },
            confirm_password: {
                placeholder: 'Enter your Password Please:',
            },
        }
    };

    return (
        <Authenticator className="Authenticator" formFields={formFields}>
            {({ signOut, user }) => (
                <div>
                    <p>Welcome {user.username}</p>
                    <button className="sign-out-button" onClick={signOut}>Sign out</button>
                </div>
            )}
        </Authenticator>
    );
}

export default Login;