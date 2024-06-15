import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "@/components/ui/label";
import { log } from "console";

export const InputSelectHookForm = ({ ...props }): JSX.Element => {
  const { register, setValue, getValues } = useFormContext();

  return (
    <div className="mb-4 mt-2 grid w-full max-w-sm items-center gap-1.5">
      <Label>{props.label}</Label>
      <Select
        onValueChange={(e) => {
          !props.onChange ? setValue(props.name, e) : props.onChange(e);
          setValue(props.name, e);
        }}
        {...register(props.name)}
        defaultValue={getValues()[props.name]}
      >
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder={`Seleciona la edad`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {props.data.map((value: string) => {
              return (
                <SelectItem key={value} value={value}>
                  {value}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
