"use client";
import z from "zod";
import { Button } from "@/components/ui/shadcn/button";
import { Card } from "@/components/ui/shadcn/card";
import { FormListType } from "@/libs/forms/form.profile";
import { FormTemplate, InstanceUseProfileForm } from "./profile.forms";

import {
  fullnameSchema,
  emailSchema,
  addressSchema,
  phoneSchema,
} from "@/libs/schema/schema.profile";
import { useLayoutProfile } from "@/app/(protected)/(user)/profile/context";

// 🔐 Schema Map
export const schemaMap = {
  fullname: fullnameSchema,
  email: emailSchema,
  address: addressSchema,
  phone: phoneSchema,
};

export type SchemaKey = keyof typeof schemaMap;
export type SchemaType<K extends SchemaKey> = z.infer<(typeof schemaMap)[K]>;

export const ProfileGlobalForm = ({
  schemaKey,
  FormList,
}: {
  schemaKey: SchemaKey;
  FormList: FormListType;
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = InstanceUseProfileForm(schemaKey);

  const { submitHandler } = useLayoutProfile();

  const onSubmit = (data: SchemaType<SchemaKey>): void => {
    console.log(`${schemaKey} submitted:`, data);
    submitHandler(data, schemaKey);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 my-6 px-2">
      <Card>
        <FormTemplate
          formList={FormList}
          register={register}
          control={control}
          errors={errors}
          className="mt-6"
        />
        <div className="center">
          <Button
            type="submit"
            variant="gradient"
            disabled={isSubmitting}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
          >
            {isSubmitting
              ? FormList.submit?.onSubmitLabel
              : FormList.submit?.label}
          </Button>
        </div>
      </Card>
    </form>
  );
};
