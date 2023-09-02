import React, { ChangeEvent } from "react";
import Link from "next/link";

interface Option {
  value: string;
  label: string;
}

interface Props {
  labelId: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options?: Option[];
  value: string;
  children: React.ReactNode;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
  
}

export default function SelectInput({
  labelId,
  onChange,
  options,
  value,
  children,
  link,
  required = false
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
        <select
          id={labelId}
          className="select select-bordered select-sm w-full"
          name={labelId}
          onChange={onChange}
          value={value}
          required={required}
        >
          {options && options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
