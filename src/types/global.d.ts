/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
interface IChildren {
  children: React.ReactNode;
}

interface IClass {
  className?: string;
}

interface IProps {
  children: React.ReactNode;
  className?: string;
}

type ComponentProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
  React.ComponentProps<T>;

interface ILogin {
  email: string;
  password: string;
}

interface ICustomError {
  response?: {
    data?: {
      data?: Record<string, unknown>;
      message?: string;
      status?: number
    };
  };
  message?: string;
}

