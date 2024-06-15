import React from "react";
import { Button } from "../ui/button";

export const ButtonHookForm = ({ ...props }) => {
  return <Button {...props} />;
};

ButtonHookForm.displayName = "Button";
