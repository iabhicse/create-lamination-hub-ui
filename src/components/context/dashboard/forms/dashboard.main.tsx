"use client";
import z from "zod";
import { Card } from "@/components/ui/shadcn/card";
import { Button } from "@/components/ui/shadcn/button";
import { FormListType } from "@/libs/forms/form.profile";
import { FormTemplate, InstanceUseProfileForm } from "./dashboard.forms";
import { useLayoutDashboard } from "@/app/(protected)/(admin)/dashboard/context";

import {
  fullnameSchema,
  emailSchema,
  addressSchema,
  phoneSchema,
} from "@/libs/schema/schema.profile";

// 🔐 Schema Map
export const schemaMap = {
  fullname: fullnameSchema,
  email: emailSchema,
  address: addressSchema,
  phone: phoneSchema,
};

export type SchemaKey = keyof typeof schemaMap;
export type SchemaType<K extends SchemaKey> = z.infer<(typeof schemaMap)[K]>;

export const DashboardGlobalForm = ({
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

  const { submitHandler } = useLayoutDashboard();

  const onSubmit = (data: SchemaType<SchemaKey>): void => {
    console.log(`${schemaKey} submitted:`, data);
    submitHandler(data, schemaKey);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 my-6 px-2">
      <Card className="border-none bg-card rounded-xl p-4 shadow-sm">
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
