import React from "react";
import ProfileForm from "@/libs/forms/form.profile";
import { DashboardGlobalForm } from "./forms/dashboard.main";
import { SchemaKeyType } from "@/app/(protected)/(admin)/dashboard/context";

const Dashboard_forms = ({
  currentSchema,
}: {
  currentSchema?: SchemaKeyType;
}) => {
  const currentForm = ProfileForm.filter((item) => item.id === currentSchema);

  return (
    <>
      {currentSchema && (
        <DashboardGlobalForm
          schemaKey={currentSchema}
          FormList={currentForm[0]}
        />
      )}
    </>
  );
};
export default Dashboard_forms;
