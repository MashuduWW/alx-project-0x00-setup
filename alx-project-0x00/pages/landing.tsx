import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const LandingPage = () => {
  return (
    <div className="p-10 space-y-6">
      <h1 className="text-3xl font-bold">Landing Page</h1>

      <Card />

      <div className="space-y-4">
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

      <Card />
    </div>
  );
};

export default LandingPage;
