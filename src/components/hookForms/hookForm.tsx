"use client";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from "react-hook-form";
import { Fragment } from "react";
import {
  InputTextHookForm,
  InputRadioHookForm,
  InputCheckHookForm,
  InputSelectHookForm,
  InputTextAreaHookForm,
} from "./";
import { Input } from "../ui/input";
import { ButtonHookForm } from "./buttonHookForm";

type FormValues = {
  [key: string]: string | boolean;
};

type Props = {
  dataForms: DataForms;
  onHandleSubmit(data: FormValues): void;
  buttonText?: string;
  children?: JSX.Element  
};

type DataForms = {
  title: string;
  inputs: FormInput;
}[];

type FormInput = {
  type: "select" | "radio" | "text" | "area" | "select" | "check";
  name: string;
  label: string;
  data?: string[] | {}[];
  dataValue?: string;
  dataLabel?: string;
  disabled?: boolean;
  onChange?(e: string): void;
}[];


export const HookForm = ({
  dataForms = [],
  children = <></>,
  onHandleSubmit = (e) => {
    console.error(e);
  },
  buttonText = "Guardar",
  ...props
}: Props) => {
  const { handleSubmit } = useFormContext();
  const onSubmit = onHandleSubmit;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {dataForms.map(({ title, inputs }, i) => (
        <Fragment key={title}>
          <p>{title}</p>
          {inputs.map(({ type, name, label, ...res }) => {
            if (type === "text") {
              return (
                <InputTextHookForm
                  key={label}
                  label={label}
                  name={name}
                  {...res}
                />
              );
            }
            if (type === "area") {
              return (
                <InputTextAreaHookForm
                  key={label}
                  label={label}
                  name={name}
                  {...res}
                />
              );
            }
            if (type === "select") {
              return (
                <InputSelectHookForm
                  key={label}
                  label={label}
                  data={res.data}
                  name={name}
                  {...res}
                />
              );
            }
            if (type === "radio") {
              return (
                <InputRadioHookForm
                  key={label}
                  label={label}
                  data={res.data}
                  name={name}
                  {...res}
                />
              );
            }
            if (type === "check") {
              return (
                <InputCheckHookForm
                  key={label}
                  label={label}
                  data={res.data}
                  name={name}
                  {...res}
                />
              );
            }
          })}
        </Fragment>
      ))}
      <ButtonHookForm type="submit">{buttonText}</ButtonHookForm>
      {children}
    </form>
  );
};



