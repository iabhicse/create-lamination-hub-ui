import { SchemaKey } from "@/components/context/profile/forms/profile.main";
import { InputType } from "@/types/app";

export interface FormInputType {
  id: string;
  label: string;
  type: InputType;
  placeholder: string;
  options?: { label: string; value: string }[];
  required: boolean;
  errorMessage: string;
}

export interface SubmitType {
  action: "edit" | "update" | "delete" | "submit";
  label: string;
  onSubmitLabel: string;
}

export interface FormListType {
  id: SchemaKey;
  title: string;
  description: string;
  icon?: string;
  submit?: SubmitType;
  formInputs: FormInputType[];
}

export type ProfileFormType = FormListType[];

const ProfileForm: ProfileFormType = [
  {
    id: "fullname",
    title: "Full Name",
    description: "",
    icon: "User",
    submit: {
      action: "edit",
      label: "Submit",
      onSubmitLabel: "Submitting",
    },
    formInputs: [
      {
        id: "fullname",
        label: "Full Name",
        type: "text",
        placeholder: "Enter full name",
        required: true,
        errorMessage: "Please enter your full name",
      },
    ],
  },

  {
    id: "email",
    title: " Primary Email",
    description: "",
    icon: "Mail",
    submit: {
      action: "update",
      label: "Update",
      onSubmitLabel: "Updating",
    },
    formInputs: [
      {
        id: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter email",
        required: true,
        errorMessage: "Please enter your email",
      },
    ],
  },

  {
    id: "address",
    title: " Shipping Address",
    description: "",
    icon: "MapPin",
    submit: {
      action: "update",
      label: "Update",
      onSubmitLabel: "Updating",
    },
    formInputs: [
      {
        id: "address",
        label: "Address",
        type: "text",
        placeholder: "Enter address",
        required: true,
        errorMessage: "Please enter your address",
      },
    ],
  },

  {
    id: "phone",
    title: " Primary Phone",
    description: "",
    icon: "Phone",
    submit: {
      action: "update",
      label: "Update",
      onSubmitLabel: "Updating",
    },
    formInputs: [
      {
        id: "phone",
        label: "Phone",
        type: "text",
        placeholder: "Enter phone",
        required: true,
        errorMessage: "Please enter your phone",
      },
    ],
  },
];

export default ProfileForm;
