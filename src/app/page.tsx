"use client";
import { ButtonHookForm } from "@/components/hookForms/buttonHookForm";
import { HookForm } from "@/components/hookForms/hookForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useId, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

type FormValues = {
  [key: string]: string | boolean;
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


export default function Home() {
  const id = useId();

  const [initialValues, setInitialValues] = useState({
    name: "",
    genero: "",
    age: "",
    job: "",
    pet: false,
    des: "",
  });
  const [dataForms, setDataForms] = useState<DataForms>([
    {
      title: "Formulario",
      inputs: [
        {
          type: "text",
          name: "name",
          label: "Nombres*",
        },
        {
          type: "select",
          name: "genero",
          label: "Genero*",
          data: ["Male", "Female"],
        },
        {
          type: "radio",
          name: "age",
          label: "Edad*",
          data: ["1-20", "21-40", "41-100"],
        },
        {
          type: "radio",
          name: "job",
          label: "Job*",
          data: [
            { job: "chef", noc: "1" },
            { job: "driver", noc: "2" },
            { job: "dev", noc: "3" },
          ],
          dataLabel: "job",
          dataValue: "noc",
        },
        {
          type: "check",
          name: "pet",
          label: "Tiene pet*",
        },
        {
          type: "area",
          name: "des",
          label: "Descripcion*",
        },
      ],
    },
  ]);
  const methods = useForm<FormValues>({ defaultValues: initialValues });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
      </div>

      <div className="before:bg-gradient-radial after:bg-gradient-conic relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>
      <FormProvider {...methods}>
        <HookForm
          onHandleSubmit={(e) => {console.log(e); alert(JSON.stringify(methods.getValues()))}}
          dataForms={dataForms}
        >
         <div className="">
        <ButtonHookForm
          onClick={() => {
            methods.setValue("car", false);
            dataForms[0].inputs.push({
              type: "check",
              name: "car",
              label: "Tiene coche",
            });

            setDataForms([...dataForms]);
          }}
        >
          check
        </ButtonHookForm>
       
        <ButtonHookForm
          onClick={() => {
            methods.setValue("comida", "");
            dataForms[0].inputs.push({
              type: "select",
              name: "comida",
              data: ["1","2","3"],
              label: "Numero de comidas al dia",
            });

            setDataForms([...dataForms]);
          }}
        >
          select
        </ButtonHookForm>
        <ButtonHookForm
          onClick={() => {
            methods.setValue("estudios", "");
            dataForms[0].inputs.push({
              type: "text",
              name: "estudios",
              label: "Estudio superior",
            });

            setDataForms([...dataForms]);
          }}
        >
          text
        </ButtonHookForm>
        <ButtonHookForm
          onClick={() => {
            methods.setValue("device", "");
            dataForms[0].inputs.push({
              type: "radio",
              name: "device",
              data: ["xbox","play","pc"],
              label: "Plataforma favorita",
            });

            setDataForms([...dataForms]);
          }}
        >
          radio
        </ButtonHookForm>
        </div>
        </HookForm>
        
      </FormProvider>
    </main>
  );
}
