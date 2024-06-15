import { useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export const InputRadioHookForm = ({ ...props }): JSX.Element => {
  const { register, setValue, getValues } = useFormContext();
  return (
    <RadioGroup
      onValueChange={(e) => {
        !props.onChange ? setValue(props.name, e) : props.onChange(e);
        setValue(props.name, e);
      }}
      {...register(props.name)}
      defaultValue={getValues()[props.name]}
    >
      <Label>{props.label}</Label>
      <div className="flex flex-wrap">
        {props.data.map((item: any) => {
          return (
            <div
              className="m-2 flex flex-row space-x-2"
              key={item?.[props.dataLabel] || item}
            >
              <RadioGroupItem
                value={item?.[props.dataLabel] || item}
                id={item?.[props.dataLabel] || item}
              />
              <Label>{item?.[props.dataLabel] || item}</Label>
            </div>
          );
        })}
      </div>
    </RadioGroup>
  );
};
