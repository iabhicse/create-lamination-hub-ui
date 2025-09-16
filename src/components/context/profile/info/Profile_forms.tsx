import React from "react";
import ProfileForm from "@/libs/forms/form.profile";
import { ProfileGlobalForm } from "../forms/profile.main";
import { SchemaKeyType } from "@/app/(protected)/(user)/profile/context";

const Profile_forms = ({
  currentSchema,
}: {
  currentSchema?: SchemaKeyType;
}) => {
  const currentForm = ProfileForm.filter((item) => item.id === currentSchema);

  return (
    <>
      {currentSchema && (
        <ProfileGlobalForm
          schemaKey={currentSchema}
          FormList={currentForm[0]}
        />
      )}
    </>
  );
};

export default Profile_forms;
