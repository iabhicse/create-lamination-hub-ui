"use client";
import React, { useMemo, useState } from "react";
import { SchemaKey } from "./forms/dashboard.main";
import ProfileForm from "@/libs/forms/form.profile";
import { Description } from "@radix-ui/react-dialog";
import Profile_info from "../profile/info/Profile_info";
import { Dialog, DialogTitle } from "@/components/ui/shadcn/dialog";
import { DialogContentUserProfile } from "@/components/ui/custom/dialog";
import Dashboard_forms from "./Dashboard_forms";
import { useSession } from "@/components/providers/AuthProvider";

const Dashboard_user = () => {
  const { user } = useSession();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentSchema, setCurrentSchema] = useState<SchemaKey | null>(null);

  const handleOpenForm = (schemaKey: SchemaKey) => {
    setCurrentSchema(schemaKey);
    setIsFormOpen(true);
  };

  const userInfoList = useMemo(() => {
    return ProfileForm.map((item) => {
      const key = item.id as keyof typeof user;
      const value = user?.[key] ?? "Not Provided";

      return {
        id: item.id,
        icon: item.icon || "User",
        title: item.title || "",
        value,
        actionLabel: item.submit?.action === "edit" ? "Edit" : "Update",
        onAction: () => handleOpenForm(item.id),
      };
    });
  }, [user]);

  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 pb-8">
        <div className=" backdrop-blur-md rounded-3xl p-6 shadow-bubbly">
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
          {currentSchema && <Dashboard_forms currentSchema={currentSchema} />}
        </DialogContentUserProfile>
        <DialogTitle className="hidden" />
        <Description className="hidden" />
      </Dialog>
    </section>
  );
};

export default Dashboard_user;
