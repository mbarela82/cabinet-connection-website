// components/ContactForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface ContactFormProps {
  heading?: string;
  description?: string;
}

export function ContactForm({ heading, description }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        setFormData({ name: "", email: "", projectType: "", message: "" });
        router.refresh();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast.error("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
      {heading && description ? (
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            {heading}
          </h2>
          <p className="text-gray-600">{description}</p>
        </div>
      ) : (
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600">
            Fill out the form below and we'll be in touch shortly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="projectType">Type of Project</Label>
          <Select onValueChange={handleSelectChange} required>
            <SelectTrigger id="projectType">
              <SelectValue placeholder="Select a project type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="custom-kitchen">Custom Kitchen</SelectItem>
              <SelectItem value="custom-bathroom">Custom Bathroom</SelectItem>
              <SelectItem value="built-in">
                Built-in or Entertainment Center
              </SelectItem>
              <SelectItem value="home-office">Home Office</SelectItem>
              <SelectItem value="prebuilt">Prebuilt Cabinetry</SelectItem>
              <SelectItem value="commercial">Commercial Project</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Tell us about your project..."
            rows={5}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gray-800 hover:bg-gray-700 text-white"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
