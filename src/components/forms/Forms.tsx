import React, {FormEvent, ChangeEvent} from 'react';
import {Input, TextAreaInput, SelectInput } from '@/components/forms';
import { Spinner } from '@/components/common';
import {Config} from "@/types/form"



interface Props {
    config: Config[];
    isLoading: boolean;
    btnText: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Forms({config, isLoading,btnText, onChange, onSubmit}: Props) {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>

{config.map((input) => {
        switch (input.componentType) {
          case 'textarea':
            return (
              <TextAreaInput
                key={input.labelId}
                labelId={input.labelId}
                onChange={onChange}
                value={input.value}
                required={input.required}
              >
                {input.labelText}
              </TextAreaInput>
            );
          case 'select':
            return (
              <SelectInput
                key={input.labelId}
                labelId={input.labelId}
                onChange={onChange}
                value={input.value}
                required={input.required}
                options={input.options} // Pass options for select inputs
              >
                {input.labelText}
              </SelectInput>
            );
          default:
            return (
              <Input
                key={input.labelId}
                labelId={input.labelId}
                type={input.type}
                onChange={onChange}
                value={input.value}
                link={input.link}
                required={input.required}
              >
                {input.labelText}
              </Input>
            );
        }
      })}

        
    <div>
      <button
        type="submit"
        className="btn"
        disabled={isLoading}
      >
       {isLoading ? <Spinner sm/> : `${btnText}`}

      </button>
    </div>

        
    </form>
  )
}
