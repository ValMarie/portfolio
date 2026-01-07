"use client";
import { useState } from "react";
// import { cn } from "@/app/lib/utils";
import { Label, LabelInputContainer } from "@/app/components/ui/Label";
import { Input } from "@/app/components/ui/Input";
import { Textarea } from "@/app/components/ui/Textarea";
import MagicButton from "@/app/components/ui/MagicButton"

import { FaMessage } from "react-icons/fa6";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log("change", name, value);
    setForm({ ...form, [name]: value });
    // setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <LabelInputContainer>
        <Label
          htmlFor="name"
          className="block text-sm font-medium text-white mb-1"
        >
          Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded text-white border border-gray-700 focus:outline-none"
        />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label
          htmlFor="email"
          className="block text-sm font-medium text-white mb-1"
        >
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded text-white border border-gray-700 focus:outline-none"
        />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label
          htmlFor="message"
          className="block text-sm font-medium text-white mb-1"
        >
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Send a message..."
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded text-white border border-gray-700 focus:outline-none"
        />
      </LabelInputContainer>
       <div className="flex justify-center items-center">
            <a href="#">
              <MagicButton
                title="Send Message"
                icon={<FaMessage />}
                position="right"
              />
            </a>
          </div>
      {/* <button
        type="submit"
        className="relative w-full overflow-hidden rounded-lg  focus:outline-none 
         p-[1px] transition"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E4ECFF_0%,#1d4ed8_50%,#E4ECFF_100%)]" />
        <span className="inline-flex h-full w-full justify-center rounded-lg bg-black-100 bg-opacity-95 text-white font-semibold backdrop-blur-3xl gap-2 p-2">
          Send Message
        </span>
      </button> */}
      <div>
        {submitted && (
          <p className="text-green-400 ">
            Thank you for reaching out! I&apos;ll get back to you soon.
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
