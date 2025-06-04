import { Input } from '../../components/Input';
import { Label } from '../../components/label';
import { Field } from '../../components/field';
import { useForm } from 'react-hook-form';
import { IconEyeClose, IconEyeOpen } from '../../components/icon';
import { useEffect, useState } from 'react';
import { Button } from '../../components/button';

// yup
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// toast
import { toast } from 'react-toastify';

// firebase-auth
import { auth, db } from '../../firebase-app/firebase-config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import AuthenticationPages from './AuthenticationPage';

const schemaValidation = Yup.object({
  fullname: Yup.string().required('Please enter your fullname'),
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

function SignUpPage() {
  const navigate = useNavigate();
  const [togglePassword, setTogglePassword] = useState(false);

  const {
    control,
    handleSubmit,

    formState: { errors, isValid, isSubmitting },
  } = useForm({
    shouldFocusError: true,
    mode: 'onBlur',
    resolver: yupResolver(schemaValidation),
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

  const handleSignUp = async (values) => {
    if (!isValid) return;

    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);

      toast.success('Create user successfully', {
        style: {
          fontFamily: 'Poppins,sans-seriff',
        },
      });

      navigate('/');

      const colRef = collection(db, 'users');
      await setDoc(doc(db, 'users', auth.currentUser.uid), {
        fullname: values.fullname,
        email: values.email,
        password: values.password,
        createdAt: serverTimestamp(),
      });
      // addDoc(colRef, {});
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email is exist, please try again', {
          style: {
            fontFamily: 'Poppins,sans-seriff',
          },
        });
      } else {
        toast.error('Failed to create user, please try again', {
          style: {
            fontFamily: 'Poppins,sans-seriff',
          },
        });
      }
    }

    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  };

  return (
    <AuthenticationPages>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="w-full max-w-[600px] mx-auto"
        action=""
      >
        <Field>
          <Label htmlFor="fullname">Fullname</Label>
          <Input
            autoComplete="fullname"
            control={control}
            type="text"
            placeholder="Enter your fullname"
            name="fullname"
            shouldFocusError={errors?.fullname ? true : false}
          ></Input>
        </Field>

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
        <div className="flex justify-center items-center gap-x-2 mb-6">
          <Button
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            Sign Up
          </Button>
        </div>
        <div className="text-left">
          <span className="text-darkgray text-sm md:text-[16px]">
            You have already an account? Please{' '}
            <NavLink to={'/sign-in'} className="text-primary hover:underline">
              Login
            </NavLink>
          </span>
        </div>
      </form>
    </AuthenticationPages>
  );
}

export default SignUpPage;
