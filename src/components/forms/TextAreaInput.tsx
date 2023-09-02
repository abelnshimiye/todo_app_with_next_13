import React, { ChangeEvent } from "react";
import Link from "next/link";

interface Props {
  labelId: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  children: React.ReactNode;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
  rows?: number; // Number of rows for the textarea (optional)
}

export default function TextAreaInput({
  labelId,
  onChange,
  value,
  children,
  link,
  required = false,
  rows = 5 // Default number of rows
}: Props) {
  return (
    <div>
      <div className="flex justify-between align-center">
        <label htmlFor={labelId} className="block text-sm font-medium leading-6 text-gray-900">
          {children}
        </label>
        {link && (
          <div className="text-sm">
            <Link className="font-semibold text-indigo-600 hover:text-indigo-500" href={link.linkUrl}>
              {link.linkText}
            </Link>
          </div>
        )}
      </div>

      <div className="mt-2">
        <textarea
          id={labelId}
          className="textarea textarea-accent textarea-sm w-full"
          name={labelId}
          onChange={onChange}
          value={value}
          required={required}
          rows={rows} // Set the number of rows for the textarea
        />
      </div>
    </div>
  );
}
