"use client";

import React from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaThreads,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa6";
import { metaData, socialLinks } from "@/app/[locale]/config";
import { syne } from "@/app/_lib/fonts";
import Link from "next/link";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon, size = 16 }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon size={size} />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-4 float-right transition-opacity duration-300">
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.threads} icon={FaThreads} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.email} icon={FaEnvelope} />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="container w-full py-6 grid gap-4">
      <small className="flex flex-col gap-2 sm:flex-row justify-between">
        <div className={`text-neutral-600 font-normal dark:text-neutral-300`}>
          <time>&copy; {YEAR} - </time> <span>{metaData.title}</span>
        </div>
        <style jsx>{`
            @media screen and (max-width: 480px) {
              article {
                padding-top: 2rem;
                padding-bottom: 4rem;
              }
            }
          `}</style>
        <SocialLinks />
      </small>
    </footer >
  );
}
