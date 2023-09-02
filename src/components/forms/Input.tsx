import {ChangeEvent} from "react";
import Link from "next/link";

interface Props {
    labelId: string;
    type?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    children: React.ReactNode;
    link?:{
      linkText:string;
      linkUrl: string;
    },
    required?:boolean;
}

export default function Input({
  labelId, 
  type,
  onChange,
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
          {link &&(
            <div className="text-sm">
              <Link className="font-semibold text-indigo-600 hover:text-indigo-500" href={link.linkUrl}>
                {link.linkText}
              </Link>
            </div>
          )}
      </div>
      

      <div className="mt-2">
        <input
          id={labelId}
          className="input input-bordered input-sm w-full"
          name={labelId}
          type={type}
          onChange={onChange}
          value={value}
          required= {required}
          
        />
      </div>
    </div>
  )
}
