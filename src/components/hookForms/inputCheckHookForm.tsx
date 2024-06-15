import { useFormContext } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export const InputCheckHookForm = ({ ...props }): JSX.Element => {
  const { register, setValue, getValues } = useFormContext();
  return (
    <div className="mb-4 mt-2 grid w-full max-w-sm items-center gap-1.5">
      <Label>{props.label}</Label>
      <Checkbox
        defaultChecked={getValues()[props.name]}
        onCheckedChange={(e) => {
          !props.onChange ? setValue(props.name, e) : props.onChange(e);
          setValue(props.name, e);
        }}
        {...register(props.name)}
      />
    </div>
  );
};
