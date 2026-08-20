import nodemailer from "nodemailer";
import type { Options } from "nodemailer/lib/smtp-transport";
import dns from "node:dns";

dns.setDefaultResultOrder("ipv4first");

const smtpOptions: Options = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

export const transporter = nodemailer.createTransport(smtpOptions);

