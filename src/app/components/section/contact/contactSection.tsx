import React from "react";
import ContactForm from "./contactForm";
import { motion } from "framer-motion";
import { Card } from "../../assets/cards";

const Contact = () => (
  <main id= "contact" className="min-h-screen">
    {/* Header Section */}
    <motion.div className="mb-10 md:mb-16">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="md:text-5xl text-4xl font-bold text-white mb-4">Get in Touch</h1>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-blue-200 to-white/50 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I&apos;d love to hear from you. Whether you have a project in mind,
            want to collaborate, or just want to say hello, feel free to reach
            out.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start p-3">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Contact Information & Social Links */}
          <div className="space-y-8"> 
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-white">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-400 mb-6">
                I&apos;m always open to discussing new opportunities, creative
                projects, or potential collaborations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">
                    Usually responds within 24 hours
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">
                    Available for freelance projects
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">
                    Open to remote collaboration
                  </span>
                </div>
              </div>
            </Card>

            {/* <SocialLinks /> */}

            {/* Trust Indicators */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Trusted By
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-400/10 rounded flex items-center justify-center">
                    <span className="text-green-400 font-semibold text-xs">
                      S
                    </span>
                  </div>
                  <span>Startups</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-400/10 rounded flex items-center justify-center">
                    <span className="text-green-400 font-semibold text-xs">
                      A
                    </span>
                  </div>
                  <span>Agencies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-400/10 rounded flex items-center justify-center">
                    <span className="text-green-400 font-semibold text-xs">
                      E
                    </span>
                  </div>
                  <span>Enterprises</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-400/10 rounded flex items-center justify-center">
                    <span className="text-green-400 font-semibold text-xs">
                      F
                    </span>
                  </div>
                  <span>Freelancers</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
        {/* <SocialLinks /> */}
      </div>
    </motion.div>
  </main>
);

export default Contact;
