"use client";
import React, { useMemo, useState } from "react";
import Profile_info from "./info/Profile_info";
import Profile_forms from "./info/Profile_forms";
import { SchemaKey } from "./forms/profile.main";
import ProfileForm from "@/libs/forms/form.profile";
import { Description } from "@radix-ui/react-dialog";
import { Dialog, DialogTitle } from "@/components/ui/shadcn/dialog";
import { DialogContentUserProfile } from "@/components/ui/custom/dialog";
import { useSession } from "@/libs/store/useSession";

const Profile_User = () => {
  const { user } = useSession();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentSchema, setCurrentSchema] = useState<SchemaKey | null>(null);

  const handleOpenForm = (schemaKey: SchemaKey) => {
    setCurrentSchema(schemaKey);
    setIsFormOpen(true);
  };

  const userInfoList = useMemo(() => {
    return ProfileForm.map((item) => ({
      id: item.id,
      icon: item.icon || "User",
      title: item.title || "",
      value: user?.id ?? "Not Provided", //TODO: Add a fallback value
      actionLabel: item.submit?.action === "edit" ? "Edit" : "Update",
      onAction: () => handleOpenForm(item.id),
    }));
  }, [user]);

  return (
    <section className="min-h-screen bg-gradient-pastel">
      <div className="container mx-auto px-4 pb-8">
        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 shadow-bubbly">
          <h2 className="text-xl font-bold text-foreground mb-6">
            User Dashboard
          </h2>
          <div className="space-y-4">
            {userInfoList.map((props) => (
              <Profile_info key={props.id} {...props} />
            ))}
          </div>
        </div>
      </div>

      {/* Centralized Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContentUserProfile className="w-fit min-w-128">
          {currentSchema && <Profile_forms currentSchema={currentSchema} />}
        </DialogContentUserProfile>
        <DialogTitle className="hidden" />
        <Description className="hidden" />
      </Dialog>
    </section>
  );
};

export default Profile_User;
