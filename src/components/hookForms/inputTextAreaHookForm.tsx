import { useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export const InputTextAreaHookForm = ({ ...props }): JSX.Element => {
const { register } = useFormContext() 
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 mt-2 mb-4">
      <Label>{props.label}</Label>
      <Textarea {...props} {...register(props.name)}/>
    </div>
  );
};
