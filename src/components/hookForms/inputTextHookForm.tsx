import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const InputTextHookForm = ({ ...props }): JSX.Element => {
  const { register, setValue } = useFormContext();
  return (
    <div className="mb-4 mt-2 grid w-full max-w-sm items-center gap-1.5">
      <Label>{props.label}</Label>
      <Input 
         {...register(props.name)}
        onChange={(e) => {
          !props.onChange ? setValue(props.name, e.target.value) : props.onChange(e.target.value);
          setValue(props.name, e.target.value);
        }}
      />
    </div>
  );
};
//  {...register(props.name)}
