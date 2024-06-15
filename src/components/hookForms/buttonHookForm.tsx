import React from "react";
import { Button } from "../ui/button";

export const ButtonHookForm = ({ ...props }) => {
  return <Button {...props} className="m-1 w-full"/>;
};

ButtonHookForm.displayName = "Button";
