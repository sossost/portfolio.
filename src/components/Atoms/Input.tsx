import {
  Children,
  ForwardedRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
} from "react";
import uuid from "react-uuid";
import { twMerge } from "tailwind-merge";

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  children: ReactElement;
  bottomText?: string;
}

const Input = ({
  label,
  children,
  bottomText,
  className,
  ...props
}: InputProps) => {
  const child = Children.only(children);
  const generatedId = uuid();
  const id = child.props.id ?? generatedId;
  const errors = child.props.errors;

  return (
    <div className={twMerge(`w-full`, className)} {...props}>
      <label
        htmlFor={id}
        className="inline-block py-1 text-base font-medium leading-4"
      >
        {label}
      </label>
      {cloneElement(child, {
        id,
        ...child.props,
      })}
      {errors[id] && (
        <p className="text-sm text-neutral-300 inline-block px-4 py-2">
          {errors[id].message?.toString()}
        </p>
      )}
    </div>
  );
};

export default Input;

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  errors?: unknown;
  className?: string;
}

Input.TextField = forwardRef(
  (
    { errors, className, ...props }: TextFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input
        className={twMerge(
          `
            w-full
            px-4
            py-1
            text-base
            leading-10
            border-2
            border-solid
            border-cyan-900
            rounded-md
            margin-0
            bg-transparent
            focus:outline-none
            focus:bg-[rgba(15,17,25,0.7)]
          `,
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

Input.TextField.displayName = "Input.TextField";

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  errors?: unknown;
  className?: string;
}

Input.TextArea = forwardRef(
  (
    { errors, className, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <textarea
        className={twMerge(
          `
            w-full
            h-48
            px-4
            py-4
            text-base
            leading-7
            border-2
            border-solid
            border-cyan-900
            rounded-md
            margin-0
            bg-transparent
            focus:outline-none
            focus:bg-[rgba(15,17,25,0.7)]
            resize-none
          `,
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

Input.TextArea.displayName = "Input.TextArea";
