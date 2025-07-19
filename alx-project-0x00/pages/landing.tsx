import React from "react";
import Button from "@/components/Button";

const LandingPage = () => {
  return (
    <div className="p-10 space-y-4">
      <h1 className="text-3xl font-bold">Reusable Buttons</h1>

      <div className="space-x-4">
        <Button title="Small Button" styles="text-xs rounded-sm" />
        <Button title="Medium Button" styles="text-base rounded-md" />
        <Button title="Large Button" styles="text-lg rounded-full" />
      </div>

      <div className="space-x-4">
        <Button title="Rounded-sm" styles="rounded-sm" />
        <Button title="Rounded-md" styles="rounded-md" />
        <Button title="Rounded-full" styles="rounded-full" />
      </div>
    </div>
  );
};

export default LandingPage;
