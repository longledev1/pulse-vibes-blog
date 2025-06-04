import { useForm } from 'react-hook-form';
import AuthenticationPages from './AuthenticationPage';
import Button, { ButtonGoogle } from '../../components/button/button';
import { useEffect, useState } from 'react';
import { Field } from '../../components/field';
import { Label } from '../../components/label';
import { Input } from '../../components/Input';
import { IconEyeClose, IconEyeOpen } from '../../components/icon';
import { NavLink } from 'react-router-dom';
// yup
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// toast
import { toast } from 'react-toastify';
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth, db } from '../../firebase-app/firebase-config';
import { useNavigate } from 'react-router-dom';
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from 'firebase/firestore';
import { useAuth } from '../../context/auth-context';

const schemaValidation = Yup.object({
  email: Yup.string()
    .required('Please enter your email address')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Email is not valid'
    ),
  password: Yup.string()
    .required('Please enter your password')
    .min(8, 'Your password must be at leats 8 character or greater'),
});

function SignInPage() {
  const naviagate = useNavigate();

  const [togglePassword, setTogglePassword] = useState(false);
  const { userInfo } = useAuth();

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    shouldFocusError: true,
    resolver: yupResolver(schemaValidation),
    mode: 'onBlur',
  });

  useEffect(() => {
    const arrErrors = Object.values(errors);
    arrErrors.length > 0 &&
      toast.error(arrErrors[0].message, {
        style: {
          fontFamily: 'Poppins,sans-seriff',
        },
      });
  }, [errors]);

  useEffect(() => {
    if (userInfo?.email) {
      naviagate('/');
    }
  }, []);

  const handleSignIn = async (values) => {
    if (!isValid) return;

    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast.success('Login successful', {
        style: {
          fontFamily: 'Poppins,sans-seriff',
        },
      });
      naviagate('/');
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        toast.error('Incorrect Email or Password', {
          style: {
            fontFamily: 'Poppins,sans-seriff',
          },
        });
      } else {
        toast.error('Login failed. Please try again');
      }
    }
  };

  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Kiểm tra xem người dùng đã có trong Firestore chưa
      const q = query(
        collection(db, 'users'),
        where('email', '==', user.email)
      );
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        await addDoc(collection(db, 'users'), {
          fullname: user.displayName,
          email: user.email,
          avatar: user.photoURL || '',
          loginAt: serverTimestamp(),
          provider: 'google',
        });
      }

      toast.success('Signed in with Google successfully!', {
        style: {
          fontFamily: 'Poppins, sans-serif',
        },
      });
    } catch (error) {
      console.error('Google Sign-in Error:', error);
      toast.error('Google sign-in failed. Please try again.', {
        style: {
          fontFamily: 'Poppins, sans-serif',
        },
      });
    }
  };
  return (
    <AuthenticationPages>
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="w-full max-w-[600px] mx-auto"
        action=""
      >
        <Field>
          <Label htmlFor="email">Email</Label>
          <Input
            autoComplete="email"
            control={control}
            type="email"
            placeholder="Enter your Email"
            name="email"
            shouldFocusError={errors?.email ? true : false}
          ></Input>
        </Field>

        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            control={control}
            autoComplete="current-password"
            type={togglePassword ? 'text' : 'password'}
            placeholder="Enter your Password"
            name="password"
            shouldFocusError={errors?.password ? true : false}
            hasIcon
          >
            {togglePassword ? (
              <IconEyeOpen
                onClick={() => setTogglePassword(!togglePassword)}
              ></IconEyeOpen>
            ) : (
              <IconEyeClose
                onClick={() => setTogglePassword(!togglePassword)}
              ></IconEyeClose>
            )}
          </Input>
        </Field>
        <div className="flex justify-center items-center gap-x-2 mb-6 ">
          <Button
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            Sign In
          </Button>
          <ButtonGoogle onClick={handleSignInWithGoogle}>
            Sign In with Google
          </ButtonGoogle>
        </div>
        <div>
          <span className="text-darkgray">
            Don't have an account? Create one{' '}
            <NavLink to={'/sign-up'} className="text-primary hover:underline">
              here
            </NavLink>
          </span>
        </div>
      </form>
    </AuthenticationPages>
  );
}

export default SignInPage;
